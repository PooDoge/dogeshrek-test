import { useEffect, useState } from 'react'
import BigNumber from 'bignumber.js'
import { useMulticallContract, useFeedContract } from './useContract'
import ERC20_INTERFACE from '../constants/abis/erc20'
import priceContracts from '../constants/eggPriceContracts'

type ApiResponse = {
  prices: {
    [key: string]: string
  }
  update_at: string
}

/**
 * Due to Cors the api was forked and a proxy was created
 * @see https://github.com/pancakeswap/gatsby-pancake-api/commit/e811b67a43ccc41edd4a0fa1ee704b2f510aa0ba
 */
const api = 'https://api.pancakeswap.com/api/v1/price'

const useGetPriceData = () => {
  const [data, setData] = useState<number>(0)

  const multicallContract = useMulticallContract();
  const dogeOracle = useFeedContract();

  useEffect(() => {
    const fetchData = async () => {
      try {
        if(multicallContract && dogeOracle){
          const {cakeAddress, wwdogeAddress, lpAddress} = priceContracts;
          const calls = [
            [cakeAddress, ERC20_INTERFACE.encodeFunctionData("balanceOf", [lpAddress])],
            [wwdogeAddress, ERC20_INTERFACE.encodeFunctionData("balanceOf", [lpAddress])]
          ];
          
          const [resultsBlockNumber, result] = await multicallContract.aggregate(calls);
          const [cakeAmount, busdAmount] = result.map(r=>ERC20_INTERFACE.decodeFunctionResult("balanceOf", r));

          const dogeUSD = await dogeOracle.getDogePrice();
          const dogesPrice = dogeUSD.toNumber() * 0.000001;

          console.log(dogesPrice);

          const cake = new BigNumber(cakeAmount);
          const busd = new BigNumber(busdAmount);
          const cakePrice = busd.div(cake).toNumber();
          const cakeUSDPrice = cakePrice * dogesPrice;
          console.log("Price Data:");
          console.log(cakeUSDPrice);
          setData(cakeUSDPrice)
        }
      } catch (error) {
        console.error('Unable to fetch price data:', error)
      }
    }

    fetchData()
  }, [multicallContract, dogeOracle])

  return data
}

export default useGetPriceData
