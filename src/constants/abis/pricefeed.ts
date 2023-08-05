import { Interface } from '@ethersproject/abi'


const FEED_ABI = '[{"inputs":[{"internalType":"contract IWitnetPriceRouter","name":"_router","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"getDogePrice","outputs":[{"internalType":"int256","name":"_price","type":"int256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"router","outputs":[{"internalType":"contract IWitnetPriceRouter","name":"","type":"address"}],"stateMutability":"view","type":"function"}]'

const PRICEFEED_INTERFACE = new Interface(FEED_ABI)

export default PRICEFEED_INTERFACE
export { FEED_ABI }
