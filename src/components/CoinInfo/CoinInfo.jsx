import React from 'react'
import Alert from '../Alert/Alert'
import Chart from 'chart.js/auto';
import { Line } from 'react-chartjs-2';
import { CategoryScale } from 'chart.js';
import { chartDays } from '../../helper/constants';

Chart.register(CategoryScale);

const CoinInfo = ({ historicData, setDays, setDaysInterval, days, currency }) => {

  const handleDayChange = (event) => {
    const daysSelected = event.target.options[event.target.selectedIndex].value;
    if(daysSelected == 1){
      setDaysInterval('')
    }else{
      setDaysInterval('daily')
    }
    setDays(daysSelected)
  }

  if (!historicData) {
    return <Alert type='error' message='No data available' />
  }

  return (
    <div
      className='flex flex-col w-full px-2 max-w-4xl'
    >
     <div className='w-full md:min-h-[50vh] min-h-[40vh]'>
     <Line
        data={{
          labels: historicData.prices.map(coinPrice => {
            let date = new Date(coinPrice[0])
            let time = date.getHours() > 12 ? `${date.getHours() - 12} : ${date.getMinutes()} PM` : `${date.getHours()} : ${date.getMinutes()} AM`
            return days == 1 ? time : date.toLocaleDateString()
          }),
          datasets: [
            {
              label: `Price (Past ${days} ${days === 1 ? 'Day' : 'Days'}) in ${currency}`,
              data: historicData.prices.map(coinPrice => coinPrice[1])
            },
          ],
        }}
        options={{
          responsive: true,
          maintainAspectRatio: false,
          elements: {
            point: {
              radius: 0
            }
          }
        }}
      />
     </div>
      <div className='flex justify-center mt-5 w-full'>
      <select 
        className="select select-bordered w-full max-w-xs"
        onChange={handleDayChange}
      >
        {chartDays.map((day, index)=>{
          return (
            <option selected={days == day.value} key={index} value={day.value}>{day.label}</option>
          )
        })}
      </select>
      </div>
    </div>
  )
}

export default CoinInfo