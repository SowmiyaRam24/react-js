import React from 'react';
import Chart from '../chart/chart';
const ExpenceChart=(props)=>{
    const chartDataPoints=[
        {label:'jan',value:0},
        {label:'feb',value:0},
        {label:'mar',value:0},
        {label:'apr',value:0},
        {label:'may',value:0},
        {label:'jun',value:0},
        {label:'jul',value:0},
        {label:'aug',value:0},
        {label:'sep',value:0},
        {label:'oct',value:0},
        {label:'Nov',value:0},
        {label:'dec',value:0},
        
    ];
   return(
       <Chart/>
   )
};
export default ExpenceChart;