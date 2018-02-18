var config = {
  apiUrl: "//165.227.189.226:1984/",
  mainnetExplorerUrl: "https://explorer.myntpulse.org/",
  testnetExplorerUrl: "https://testnet.myntpulse.com/",
  testnet: false,
  coinUnitPlaces: 12,
  txMinConfirms: 10,         // corresponds to CRYPTONOTE_DEFAULT_TX_SPENDABLE_AGE in Monero
  txCoinbaseMinConfirms: 50, // corresponds to CRYPTONOTE_MINED_MONEY_UNLOCK_WINDOW in Monero
  coinSymbol: 'XSM',
  openAliasPrefix: "xsm",
  coinName: 'Mynt',
  coinUriPrefix: 'mynt:',
  addressPrefix: 1078,
  integratedAddressPrefix: 19,
  subAddressPrefix: 42,
  addressPrefixTestnet: 53,
  integratedAddressPrefixTestnet: 54,
  subAddressPrefixTestnet: 63,
  feePerKB: new JSBigInt('10000000000'),//20^10 - for testnet its not used, as fee is dynamic.
  dustThreshold: new JSBigInt('2000000000'),//10^10 used for choosing outputs/change - we decompose all the way down if the receiver wants now regardless of threshold
  txChargeRatio: 0.5,
  defaultMixin: 3, // minimum mixin for hardfork v5
  txChargeAddress: 'XSwiLJUPxqv4hbFsvvV5BgVFqWiWmfzyXKWFQb9ZWuUJhKFhSYJUGSB6cmRn2qo2J5Vwsi1bfg8AYfyx9JKc2GdY2CiE1RrG8',
  idleTimeout: 30,
  idleWarningDuration: 20,
  maxBlockNumber: 500000000,
  avgBlockTime: 60,
  debugMode: false
};
