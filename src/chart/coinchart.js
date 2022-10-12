import React from "react";
import 'chart.js/auto';
import { Line } from 'react-chartjs-2';

export default function CoinChart({ sevenDaysPrice , currentPrice , timePeriod }){
    
    let lastFrom = timePeriod * -23
    let penultimateFrom = lastFrom * 2
    let penultimateTo = lastFrom + 1

    const lastChartData = [...sevenDaysPrice.slice(lastFrom,sevenDaysPrice.length),currentPrice]
    const penultimateChartData =sevenDaysPrice.slice(penultimateFrom,penultimateTo)

    let labelsData = [...lastChartData]
    labelsData.fill("")

    return(
        <Line  
            data={{
                labels: labelsData,
                datasets: [
                    {
                        label: 'Last',
                        data: lastChartData,
                        borderColor:"#FFD37A",
                        borderWidth:"1",
                        fill:false,
                        drawBorder:false
                    },
                    {
                        label: 'Penultimate',
                        data: penultimateChartData,
                        borderColor:"#008a91",
                        borderWidth:"1",
                        fill:false,
                        drawBorder:false
                    }
                ],
            }}
        />
    )
}