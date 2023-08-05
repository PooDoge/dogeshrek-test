import { useFeedContract } from '../hooks/useContract'
import { useSingleCallResult, NEVER_RELOAD } from '../state/multicall/hooks'
import { useMemo } from 'react'

// gets price of Doge in USD from witnet price oracle

export function useDogePrice() {
  const contract = useFeedContract()

  const dogePrice = useSingleCallResult(contract ? undefined : contract, 'getDogePrice', undefined, NEVER_RELOAD)

  console.log(dogePrice);

  return useMemo(() => {
    if (dogePrice.loading) return undefined
    if (dogePrice.result) {
        return dogePrice
    }
    return undefined
  }, [dogePrice.result])
}

export default useDogePrice