export const REWARDS_MANAGER_ABI = [
  {
    inputs: [],
    name: 'AccessControlBadConfirmation',
    type: 'error'
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'account',
        type: 'address'
      },
      {
        internalType: 'bytes32',
        name: 'neededRole',
        type: 'bytes32'
      }
    ],
    name: 'AccessControlUnauthorizedAccount',
    type: 'error'
  },
  {
    inputs: [],
    name: 'EnforcedPause',
    type: 'error'
  },
  {
    inputs: [],
    name: 'ExpectedPause',
    type: 'error'
  },
  {
    inputs: [],
    name: 'InvalidInitialization',
    type: 'error'
  },
  {
    inputs: [],
    name: 'NotInitializing',
    type: 'error'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: '_User',
        type: 'address'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'Amount',
        type: 'uint256'
      }
    ],
    name: 'AllRewardsClaimed',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint64',
        name: 'version',
        type: 'uint64'
      }
    ],
    name: 'Initialized',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint256',
        name: '_NodeID',
        type: 'uint256'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'Amount',
        type: 'uint256'
      }
    ],
    name: 'NodeClaimed',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'uint256',
        name: 'nodeID',
        type: 'uint256'
      },
      {
        indexed: true,
        internalType: 'uint256',
        name: 'plotID',
        type: 'uint256'
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'owner',
        type: 'address'
      }
    ],
    name: 'NodeDeleted',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'account',
        type: 'address'
      }
    ],
    name: 'Paused',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'newAddress',
        type: 'address'
      }
    ],
    name: 'PetroGemsAddressSet',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint256',
        name: '_PlotID',
        type: 'uint256'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'Amount',
        type: 'uint256'
      }
    ],
    name: 'PlotClaimed',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint256',
        name: '_amount',
        type: 'uint256'
      }
    ],
    name: 'RevShareDistributed',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'bytes32',
        name: 'role',
        type: 'bytes32'
      },
      {
        indexed: true,
        internalType: 'bytes32',
        name: 'previousAdminRole',
        type: 'bytes32'
      },
      {
        indexed: true,
        internalType: 'bytes32',
        name: 'newAdminRole',
        type: 'bytes32'
      }
    ],
    name: 'RoleAdminChanged',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'bytes32',
        name: 'role',
        type: 'bytes32'
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'account',
        type: 'address'
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'sender',
        type: 'address'
      }
    ],
    name: 'RoleGranted',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'bytes32',
        name: 'role',
        type: 'bytes32'
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'account',
        type: 'address'
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'sender',
        type: 'address'
      }
    ],
    name: 'RoleRevoked',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'account',
        type: 'address'
      }
    ],
    name: 'Unpaused',
    type: 'event'
  },
  {
    inputs: [],
    name: 'CrudeOilAddress',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'DEFAULT_ADMIN_ROLE',
    outputs: [
      {
        internalType: 'bytes32',
        name: '',
        type: 'bytes32'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'DevWallet',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'GAME_MANAGER',
    outputs: [
      {
        internalType: 'bytes32',
        name: '',
        type: 'bytes32'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'GemsMultiplier',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'LABORATORY_ROLE',
    outputs: [
      {
        internalType: 'bytes32',
        name: '',
        type: 'bytes32'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'MAP_ROLE',
    outputs: [
      {
        internalType: 'bytes32',
        name: '',
        type: 'bytes32'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256'
      }
    ],
    name: 'NodeByID',
    outputs: [
      {
        internalType: 'uint256',
        name: 'NodeTypeID',
        type: 'uint256'
      },
      {
        internalType: 'uint256',
        name: 'Id',
        type: 'uint256'
      },
      {
        internalType: 'uint256',
        name: 'plotID',
        type: 'uint256'
      },
      {
        internalType: 'uint256',
        name: 'creationTime',
        type: 'uint256'
      },
      {
        internalType: 'uint256',
        name: 'lastRepairTime',
        type: 'uint256'
      },
      {
        internalType: 'uint256',
        name: 'lastClaimTime',
        type: 'uint256'
      },
      {
        internalType: 'uint256',
        name: 'level',
        type: 'uint256'
      },
      {
        internalType: 'uint256',
        name: 'totalRewardsSinceCreation',
        type: 'uint256'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'OilAddress',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'PetroBankAddress',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'PetroConnectAddress',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'PetroGemsAddress',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'PetroLaboratoryAddress',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'PetroMapAddress',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'PetroStakeStrategy',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'REFINERY_ROLE',
    outputs: [
      {
        internalType: 'bytes32',
        name: '',
        type: 'bytes32'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'REWARD_MANAGER_ROLE',
    outputs: [
      {
        internalType: 'bytes32',
        name: '',
        type: 'bytes32'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'RefineryAddress',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'RewardManagerAddress',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'TreasuryAddress',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: '__PetroAccessControl_init',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [],
    name: 'claimAllReward',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_nodeID',
        type: 'uint256'
      }
    ],
    name: 'claimReward',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_nodeID',
        type: 'uint256'
      }
    ],
    name: 'claimRewardAndSendBenefitsToRefinery',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_plotID',
        type: 'uint256'
      }
    ],
    name: 'claimRewardAndSendBenefitsToRefineryOfPlot',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_plotID',
        type: 'uint256'
      }
    ],
    name: 'claimRewardOfPlot',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_nodeTypeID',
        type: 'uint256'
      },
      {
        internalType: 'uint256',
        name: '_plotID',
        type: 'uint256'
      }
    ],
    name: 'createNode',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256'
      }
    ],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_type',
        type: 'uint256'
      },
      {
        internalType: 'uint256',
        name: '_durability',
        type: 'uint256'
      },
      {
        internalType: 'uint256',
        name: '_storage',
        type: 'uint256'
      },
      {
        internalType: 'uint256',
        name: '_rewards',
        type: 'uint256'
      },
      {
        internalType: 'uint256',
        name: '_reductionClog',
        type: 'uint256'
      },
      {
        internalType: 'uint256',
        name: '_levelUpPrice',
        type: 'uint256'
      },
      {
        internalType: 'uint256',
        name: '_repairPrice',
        type: 'uint256'
      },
      {
        internalType: 'uint256',
        name: '_storageRateLevelUp',
        type: 'uint256'
      },
      {
        internalType: 'uint256',
        name: '_rewardRateLevelUp',
        type: 'uint256'
      },
      {
        internalType: 'uint256',
        name: '_durabilityRateLevelUp',
        type: 'uint256'
      }
    ],
    name: 'createNodeType',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_strategyID',
        type: 'uint256'
      },
      {
        internalType: 'uint256',
        name: '_plotID',
        type: 'uint256'
      }
    ],
    name: 'createStrategy',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256'
      }
    ],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address'
      }
    ],
    name: 'currencyAuthorized',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_nodeID',
        type: 'uint256'
      }
    ],
    name: 'deleteNode',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_plotID',
        type: 'uint256'
      }
    ],
    name: 'getAllCloggedNodeOfPlot',
    outputs: [
      {
        internalType: 'uint256[]',
        name: '',
        type: 'uint256[]'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_plotID',
        type: 'uint256'
      }
    ],
    name: 'getAllDecayedNodeOfPlot',
    outputs: [
      {
        internalType: 'uint256[]',
        name: '',
        type: 'uint256[]'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_plotID',
        type: 'uint256'
      }
    ],
    name: 'getAmountCloggedOfPlot',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_plotID',
        type: 'uint256'
      }
    ],
    name: 'getAmountDecayedOfPlot',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_nodeID',
        type: 'uint256'
      }
    ],
    name: 'getBlockUntilClog',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_plotID',
        type: 'uint256'
      }
    ],
    name: 'getCentralBoost',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_nodeID',
        type: 'uint256'
      }
    ],
    name: 'getCurrentNodeOwner',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_nodeID',
        type: 'uint256'
      }
    ],
    name: 'getIsNodeClogged',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_nodeID',
        type: 'uint256'
      }
    ],
    name: 'getIsNodeDecayed',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_Id',
        type: 'uint256'
      }
    ],
    name: 'getLevelUpPriceOfId',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'getMaxLevel',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_Id',
        type: 'uint256'
      }
    ],
    name: 'getNodeByID',
    outputs: [
      {
        components: [
          {
            internalType: 'uint256',
            name: 'NodeTypeID',
            type: 'uint256'
          },
          {
            internalType: 'uint256',
            name: 'Id',
            type: 'uint256'
          },
          {
            internalType: 'uint256',
            name: 'plotID',
            type: 'uint256'
          },
          {
            internalType: 'uint256',
            name: 'creationTime',
            type: 'uint256'
          },
          {
            internalType: 'uint256',
            name: 'lastRepairTime',
            type: 'uint256'
          },
          {
            internalType: 'uint256',
            name: 'lastClaimTime',
            type: 'uint256'
          },
          {
            internalType: 'uint256',
            name: 'level',
            type: 'uint256'
          },
          {
            internalType: 'uint256',
            name: 'totalRewardsSinceCreation',
            type: 'uint256'
          }
        ],
        internalType: 'struct PetroRewardManager.NodeEntity',
        name: '',
        type: 'tuple'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_Id',
        type: 'uint256'
      }
    ],
    name: 'getNodeTypeByID',
    outputs: [
      {
        components: [
          {
            internalType: 'uint256',
            name: 'Base',
            type: 'uint256'
          },
          {
            internalType: 'uint256',
            name: 'Durability',
            type: 'uint256'
          },
          {
            internalType: 'uint256',
            name: 'Storage',
            type: 'uint256'
          },
          {
            internalType: 'uint256',
            name: 'ReductionWhenClogged',
            type: 'uint256'
          },
          {
            internalType: 'uint256',
            name: 'levelUpPrice',
            type: 'uint256'
          },
          {
            internalType: 'uint256',
            name: 'repairPrice',
            type: 'uint256'
          },
          {
            internalType: 'uint256',
            name: 'StorageRateLevelUp',
            type: 'uint256'
          },
          {
            internalType: 'uint256',
            name: 'RewardRateLevelUp',
            type: 'uint256'
          },
          {
            internalType: 'uint256',
            name: 'DurabilityRateLevelUp',
            type: 'uint256'
          }
        ],
        internalType: 'struct PetroRewardManager.NodeType',
        name: '',
        type: 'tuple'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_plotID',
        type: 'uint256'
      }
    ],
    name: 'getNodesOfPlot',
    outputs: [
      {
        components: [
          {
            internalType: 'uint256',
            name: 'NodeTypeID',
            type: 'uint256'
          },
          {
            internalType: 'uint256',
            name: 'Id',
            type: 'uint256'
          },
          {
            internalType: 'uint256',
            name: 'plotID',
            type: 'uint256'
          },
          {
            internalType: 'uint256',
            name: 'creationTime',
            type: 'uint256'
          },
          {
            internalType: 'uint256',
            name: 'lastRepairTime',
            type: 'uint256'
          },
          {
            internalType: 'uint256',
            name: 'lastClaimTime',
            type: 'uint256'
          },
          {
            internalType: 'uint256',
            name: 'level',
            type: 'uint256'
          },
          {
            internalType: 'uint256',
            name: 'totalRewardsSinceCreation',
            type: 'uint256'
          }
        ],
        internalType: 'struct PetroRewardManager.NodeEntity[]',
        name: '',
        type: 'tuple[]'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_nodeID',
        type: 'uint256'
      }
    ],
    name: 'getOwnerOfNode',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'uint256[]',
        name: '_Id',
        type: 'uint256[]'
      }
    ],
    name: 'getPriceLevelUp',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_plotID',
        type: 'uint256'
      }
    ],
    name: 'getPricePerSecondAndRewardPlot',
    outputs: [
      {
        internalType: 'uint256',
        name: 'rewardsClaimed',
        type: 'uint256'
      },
      {
        internalType: 'uint256',
        name: 'rewardsSentToRefinery',
        type: 'uint256'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_nodeID',
        type: 'uint256'
      }
    ],
    name: 'getPricePerSecondAndRewardPump',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256'
      },
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'uint256[]',
        name: '_Id',
        type: 'uint256[]'
      }
    ],
    name: 'getPriceRepair',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_ID',
        type: 'uint256'
      }
    ],
    name: 'getRewardByID',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_plotID',
        type: 'uint256'
      }
    ],
    name: 'getRewardOfPlot',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_user',
        type: 'address'
      }
    ],
    name: 'getRewardOfUser',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_ID',
        type: 'uint256'
      }
    ],
    name: 'getRewardPerBlockOfID',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_plotID',
        type: 'uint256'
      }
    ],
    name: 'getRewardPerBlockOfPlot',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_user',
        type: 'address'
      }
    ],
    name: 'getRewardPerBlockOfUser',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: 'role',
        type: 'bytes32'
      }
    ],
    name: 'getRoleAdmin',
    outputs: [
      {
        internalType: 'bytes32',
        name: '',
        type: 'bytes32'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_NodeID',
        type: 'uint256'
      }
    ],
    name: 'getTotalBoostOfNode',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_ID',
        type: 'uint256'
      }
    ],
    name: 'getblockUntilDecay',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: 'role',
        type: 'bytes32'
      },
      {
        internalType: 'address',
        name: 'account',
        type: 'address'
      }
    ],
    name: 'grantRole',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: 'role',
        type: 'bytes32'
      },
      {
        internalType: 'address',
        name: 'account',
        type: 'address'
      }
    ],
    name: 'hasRole',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'initialize',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_amount',
        type: 'uint256'
      }
    ],
    name: 'instantWrapIntoCrudeOil',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_currency',
        type: 'address'
      },
      {
        internalType: 'uint256[]',
        name: '_Id',
        type: 'uint256[]'
      }
    ],
    name: 'levelUpMultipleNodes',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_currency',
        type: 'address'
      },
      {
        internalType: 'uint256',
        name: '_id',
        type: 'uint256'
      }
    ],
    name: 'levelUpNode',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [],
    name: 'maxNodeLevel',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_id',
        type: 'uint256'
      },
      {
        internalType: 'uint256',
        name: '_level',
        type: 'uint256'
      },
      {
        internalType: 'address',
        name: '_currency',
        type: 'address'
      }
    ],
    name: 'multipleLevelUpNode',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'uint256[]',
        name: '_id',
        type: 'uint256[]'
      },
      {
        internalType: 'uint256[]',
        name: '_level',
        type: 'uint256[]'
      },
      {
        internalType: 'address',
        name: '_currency',
        type: 'address'
      }
    ],
    name: 'multipleLevelUpOfMultipleNodes',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [],
    name: 'pause',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [],
    name: 'paused',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: 'role',
        type: 'bytes32'
      },
      {
        internalType: 'address',
        name: 'callerConfirmation',
        type: 'address'
      }
    ],
    name: 'renounceRole',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_plotID',
        type: 'uint256'
      },
      {
        internalType: 'address',
        name: '_currency',
        type: 'address'
      }
    ],
    name: 'repairAll',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'uint256[]',
        name: '_id',
        type: 'uint256[]'
      },
      {
        internalType: 'address',
        name: '_currency',
        type: 'address'
      }
    ],
    name: 'repairMultiplePumps',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_id',
        type: 'uint256'
      },
      {
        internalType: 'address',
        name: '_currency',
        type: 'address'
      }
    ],
    name: 'repairPump',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: 'role',
        type: 'bytes32'
      },
      {
        internalType: 'address',
        name: 'account',
        type: 'address'
      }
    ],
    name: 'revokeRole',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [],
    name: 'router',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'sendToRefineryAllReward',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_nodeID',
        type: 'uint256'
      }
    ],
    name: 'sendToRefineryNode',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_plotID',
        type: 'uint256'
      }
    ],
    name: 'sendToRefineryPlot',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'address[]',
        name: '_toSet',
        type: 'address[]'
      }
    ],
    name: 'setAll',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_currency',
        type: 'address'
      },
      {
        internalType: 'bool',
        name: '_value',
        type: 'bool'
      }
    ],
    name: 'setCurrencyAuthorized',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_toSet',
        type: 'uint256'
      }
    ],
    name: 'setGemsMultiplier',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_level',
        type: 'uint256'
      }
    ],
    name: 'setMaxLevel',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_nodeType',
        type: 'uint256'
      },
      {
        internalType: 'uint256',
        name: '_reward',
        type: 'uint256'
      }
    ],
    name: 'setReward',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_nodeTypeID',
        type: 'uint256'
      },
      {
        internalType: 'uint256',
        name: '_rewardRateLevelUp',
        type: 'uint256'
      }
    ],
    name: 'setRewardRateLevelUp',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_toSet',
        type: 'address'
      }
    ],
    name: 'setRouter',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_toSet',
        type: 'address'
      }
    ],
    name: 'setTreasury',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'bytes4',
        name: 'interfaceId',
        type: 'bytes4'
      }
    ],
    name: 'supportsInterface',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'totalNodes',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'unpause',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [],
    name: 'wS',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  }
]
