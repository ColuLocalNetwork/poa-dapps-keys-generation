let constants = {}
constants.organization = 'ColuLocalNetwork'
constants.repoName = 'poa-chain-spec'
constants.addressesSourceFile = 'contracts.json'
constants.ABIsSources = {
  KeysManager: 'KeysManager.abi.json'
}
constants.userDeniedTransactionPattern = 'User denied transaction'

constants.NETWORKS = {
  '121': {
    NAME: 'FuseNetwork',
    BRANCH: 'FuseNetwork',
    TESTNET: false
  }
}

module.exports = {
  constants
}
