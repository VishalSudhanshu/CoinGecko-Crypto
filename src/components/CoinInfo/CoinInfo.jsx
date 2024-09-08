import React from 'react'
import Alert from '../Alert/Alert'
import Chart from 'chart.js/auto';
import { Line } from 'react-chartjs-2';
import {CategoryScale} from 'chart.js'; 

Chart.register(CategoryScale);

const CoinInfo = ({historicData, setDays, setDaysInterval, days, currency}) => {

  if(!historicData){
    <Alert type={'warning'} message={"No data available"}/>
  }
  return (
    <div
      className='flex flex-col w-full px-2 max-w-4xl'
    >
      <Line 
        data={{
          labels: historicData.prices.map(coinPrice => {
            let date = new Date(coinPrice[0])
            let time = date.getHours() > 12 ? `${date.getHours() - 12} : ${date.getMinutes()} PM` : `${date.getHours()}: ${date.getMinutes()} AM`
            return days === 1 ? time : date.toLocaleDateString()
          }),
          datasets: [
            {
              label: `Price (Past ${days} Days) in ${currency}`,
              data: historicData.prices.map(coinPrice => coinPrice[1])
            },
          ], 
        }}
      />
        
    </div>
  )
}

export default CoinInfo