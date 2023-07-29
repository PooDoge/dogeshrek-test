import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: 'https://www.dogeshrek.com/'
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    initialOpenState: true,
    items: [
      {
        label: 'Exchange',
        href: '/swap'
      },
      {
        label: 'Liquidity',
        href: '/pool'
      }
    ]
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: 'https://farms.dogeshrek.com/farms'
  },
  // {
  //   label: 'Lottery',
  //   icon: 'TicketIcon',
  //   href: 'https://www.goosedefi.com/lottery'
  // },
  {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'CoinGecko',
        href: 'https://www.coingecko.com/en/coins/dogeshrek',
      },
      {
        label: 'CoinMarketCap',
        href: 'https://coinmarketcap.com/currencies/dogeshrek/',
      },
      {
        label: 'GeckoTerminal',
        href: 'https://www.geckoterminal.com/dogechain/pools/0xd4f2e4107cc48296d25bc656bf9039fb3f406d79',
      },
    ]
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: "Github",
        href: "https://github.com/poodoge/",
      },
      {
        label: "Docs",
        href: "https://docs.dogeshrek.com",
      },
    ],
  },
]

export default config
