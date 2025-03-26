import 'dotenv/config'
import { createPublicClient, createWalletClient, getContract, http, type Address } from 'viem'
import { sonic } from 'viem/chains'
import { REWARDS_MANAGER_ABI } from './abis'
import { CRUDE_OIL_TOKEN, MAX_REWARD_TO_CLAIM, PLOT_ID, REFINERY_ADDRESS, REWARDS_MANAGER_ADDRESS } from './constants'
import { privateKeyToAccount } from 'viem/accounts'
import { ERC20_ABI } from './abis/erc20'
import { REFINERY_ABI } from './abis/refinery'

export const publicClient = createPublicClient({
  chain: sonic,
  transport: http()
})

export const walletClient = createWalletClient({ chain: sonic, transport: http() })

async function main() {
  console.log('==> Starting Petroleum Bot')

  const rpc = process.env.RPC_ENDPOINT
  const privateKey = process.env.PRIVATE_KEY

  if (!rpc || !privateKey) {
    console.error('==> Missing private key or RPC endpoint')
    process.exit()
  }

  const account = privateKeyToAccount(privateKey as Address)

  console.log('==> Checking available reward')

  const reward = (await publicClient.readContract({
    address: REWARDS_MANAGER_ADDRESS,
    abi: REWARDS_MANAGER_ABI,
    functionName: 'getRewardOfPlot',
    args: [PLOT_ID]
  })) as bigint

  if (reward >= MAX_REWARD_TO_CLAIM) {
    console.log('==> Claiming rewards')

    await walletClient.writeContract({
      account,
      address: REWARDS_MANAGER_ADDRESS,
      abi: REWARDS_MANAGER_ABI,
      functionName: 'claimRewardOfPlot',
      args: [PLOT_ID]
    })
  }

  console.log('==> Getting the balance of cOIL')

  const balance = (await publicClient.readContract({
    address: CRUDE_OIL_TOKEN,
    abi: ERC20_ABI,
    functionName: 'balanceOf',
    args: [account.address]
  })) as bigint

  if (balance >= MAX_REWARD_TO_CLAIM) {
    console.log('==> Getting list of decayed nodes')

    const decayedNodes = (await publicClient.readContract({
      address: REWARDS_MANAGER_ADDRESS,
      abi: REWARDS_MANAGER_ABI,
      functionName: 'getAllDecayedNodeOfPlot',
      args: [PLOT_ID]
    })) as bigint[]

    if (decayedNodes.length > 0) {
      console.log('==> Fixing one node')

      await walletClient.writeContract({
        account,
        address: REWARDS_MANAGER_ADDRESS,
        abi: REWARDS_MANAGER_ABI,
        functionName: 'repairPump',
        args: [decayedNodes[0], CRUDE_OIL_TOKEN]
      })

      console.log('==> Sending left balance to refinery')

      const leftBalance = (await publicClient.readContract({
        address: CRUDE_OIL_TOKEN,
        abi: ERC20_ABI,
        functionName: 'balanceOf',
        args: [account.address]
      })) as bigint

      await walletClient.writeContract({
        account,
        address: REFINERY_ADDRESS,
        abi: REFINERY_ABI,
        functionName: 'refinate',
        args: [leftBalance]
      })
    }
  }

  console.log('==> Finished')
}

setInterval(main, 1000 * 60)
