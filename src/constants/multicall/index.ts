import { ChainId } from '@pancakeswap-libs/sdk'
import MULTICALL_ABI from './abi.json'

const MULTICALL_NETWORKS: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: '0x8856C24Ba82F737CFb99Ec4785CEe4d48A842F33'
}

export { MULTICALL_ABI, MULTICALL_NETWORKS }
