import { ChainId, JSBI, Percent, Token, WETH } from '@pancakeswap-libs/sdk'
import { AbstractConnector } from '@web3-react/abstract-connector'

// import { bsc, fortmatic, injected, portis, walletconnect, walletlink } from '../connectors'
import { injected, bsc } from '../connectors'
// TODO
export const ROUTER_ADDRESS = '0xd1529ef462316b2f31336352def66ae21eb69241'

// a list of tokens by chain
type ChainTokenList = {
  readonly [chainId in ChainId]: Token[]
}

export const DOGECORN = new Token(ChainId.MAINNET, '0x8df9B21945ebaa75424730F85eCFf426C35F5EF8', 18, 'DOGECORN', 'Dogecorn Token')
export const DOGESHREK = new Token(ChainId.MAINNET, '0x2BE0096B24343549E34224aa9aa297E99961023D', 18, 'DOGESHREK', 'Binance USD')
export const DC = new Token(ChainId.MAINNET, '0x7B4328c127B85369D9f82ca0503B000D09CF9180', 18, 'DC', 'Dogechain Token')
export const KIBBY = new Token(ChainId.MAINNET, '0x72aB1BAbED0502B08225FA1eF777fa673d82Ee3e', 9, 'KIBBY', 'Kibby Token')
export const BABYGRIMACE = new Token(ChainId.MAINNET, '0x77BCD0c09B213dc940b97132cd0E969Ec483b623', 18, 'BabyGrimace', 'BabyGrimace')
export const DTOOLS = new Token(ChainId.MAINNET, '0xB9fcAa7590916578087842e017078D7797Fa18D0', 18, 'DTOOLS', 'DogeTools Token')

const WETH_ONLY: ChainTokenList = {
  [ChainId.MAINNET]: [WETH[ChainId.MAINNET]]
}

// used to construct intermediary pairs for trading
export const BASES_TO_CHECK_TRADES_AGAINST: ChainTokenList = {
  ...WETH_ONLY,
  [ChainId.MAINNET]: [...WETH_ONLY[ChainId.MAINNET], DOGECORN, DOGESHREK, DC, KIBBY, DTOOLS]
}

/**
 * Some tokens can only be swapped via certain pairs, so we override the list of bases that are considered for these
 * tokens.
 */
export const CUSTOM_BASES: { [chainId in ChainId]?: { [tokenAddress: string]: Token[] } } = {
  [ChainId.MAINNET]: {
    // [ETH.address]: [DAI, WETH[ChainId.MAINNET]]
  }
}

// used for display in the default list when adding liquidity
export const SUGGESTED_BASES: ChainTokenList = {
  ...WETH_ONLY,
  [ChainId.MAINNET]: [...WETH_ONLY[ChainId.MAINNET], DOGECORN, DC, DOGESHREK]
}

// used to construct the list of all pairs we consider by default in the frontend
export const BASES_TO_TRACK_LIQUIDITY_FOR: ChainTokenList = {
  ...WETH_ONLY,
  [ChainId.MAINNET]: [...WETH_ONLY[ChainId.MAINNET], DOGECORN, DC, DOGESHREK]
}

export const PINNED_PAIRS: { readonly [chainId in ChainId]?: [Token, Token][] } = {
  [ChainId.MAINNET]: [
    [
      // new Token(ChainId.MAINNET, '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82', 18, 'DOGECORN', 'Dogecorn Token'),
      new Token(ChainId.MAINNET, '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82', 18, 'DOGESHREK', 'Dogeshrek Token'),
      // new Token(ChainId.MAINNET, '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82', 18, 'DC', 'Dogechain Token'),
      new Token(ChainId.MAINNET, '0xb7ddc6414bf4f5515b52d8bdd69973ae205ff101', 18, 'WWDOGE', 'Wrapped Doge')
    ],
    [DC, DOGESHREK],
    [DOGESHREK, DOGECORN]
  ]
}

export interface WalletInfo {
  connector?: AbstractConnector
  name: string
  iconName: string
  description: string
  href: string | null
  color: string
  primary?: true
  mobile?: true
  mobileOnly?: true
}

export const SUPPORTED_WALLETS: { [key: string]: WalletInfo } = {
  METAMASK: {
    connector: injected,
    name: 'MetaMask',
    iconName: 'metamask.png',
    description: 'Easy-to-use browser extension.',
    href: null,
    color: '#E8831D'
  },
  INJECTED: {
    connector: injected,
    name: 'Injected',
    iconName: 'arrow-right.svg',
    description: 'Injected web3 provider.',
    href: null,
    color: '#010101',
    primary: true
  }
 /* WALLET_CONNECT: {
  connector: walletconnect,
  name: 'WalletConnect',
  iconName: 'walletConnectIcon.svg',
  description: 'Connect to Trust Wallet, Rainbow Wallet and more...',
  href: null,
  color: '#4196FC',
  mobile: true
  } */
  // WALLET_LINK: {
  //   connector: walletlink,
  //   name: 'Coinbase Wallet',
  //   iconName: 'coinbaseWalletIcon.svg',
  //   description: 'Use Coinbase Wallet app on mobile device',
  //   href: null,
  //   color: '#315CF5'
  // },
  // COINBASE_LINK: {
  //   name: 'Open in Coinbase Wallet',
  //   iconName: 'coinbaseWalletIcon.svg',
  //   description: 'Open in Coinbase Wallet app.',
  //   href: 'https://go.cb-w.com/mtUDhEZPy1',
  //   color: '#315CF5',
  //   mobile: true,
  //   mobileOnly: true
  // },
  // FORTMATIC: {
  //   connector: fortmatic,
  //   name: 'Fortmatic',
  //   iconName: 'fortmaticIcon.png',
  //   description: 'Login using Fortmatic hosted wallet',
  //   href: null,
  //   color: '#6748FF',
  //   mobile: true
  // },
  // Portis: {
  //   connector: portis,
  //   name: 'Portis',
  //   iconName: 'portisIcon.png',
  //   description: 'Login using Portis hosted wallet',
  //   href: null,
  //   color: '#4A6C9B',
  //   mobile: true
  // }
}

export const NetworkContextName = 'NETWORK'

// default allowed slippage, in bips
export const INITIAL_ALLOWED_SLIPPAGE = 80
// 20 minutes, denominated in seconds
export const DEFAULT_DEADLINE_FROM_NOW = 60 * 20

// one basis point
export const ONE_BIPS = new Percent(JSBI.BigInt(1), JSBI.BigInt(10000))
export const BIPS_BASE = JSBI.BigInt(10000)
// used for warning states
export const ALLOWED_PRICE_IMPACT_LOW: Percent = new Percent(JSBI.BigInt(100), BIPS_BASE) // 1%
export const ALLOWED_PRICE_IMPACT_MEDIUM: Percent = new Percent(JSBI.BigInt(400), BIPS_BASE) // 4%
export const ALLOWED_PRICE_IMPACT_HIGH: Percent = new Percent(JSBI.BigInt(1000), BIPS_BASE) // 10%
// if the price slippage exceeds this number, force the user to type 'confirm' to execute
export const PRICE_IMPACT_WITHOUT_FEE_CONFIRM_MIN: Percent = new Percent(JSBI.BigInt(2000), BIPS_BASE) // 20%
// for non expert mode disable swaps above this
export const BLOCKED_PRICE_IMPACT_NON_EXPERT: Percent = new Percent(JSBI.BigInt(3000), BIPS_BASE) // 30%

// used to ensure the user doesn't send so much ETH so they end up with <.01
export const MIN_ETH: JSBI = JSBI.exponentiate(JSBI.BigInt(10), JSBI.BigInt(16)) // .01 ETH
export const BETTER_TRADE_LINK_THRESHOLD = new Percent(JSBI.BigInt(75), JSBI.BigInt(10000))
