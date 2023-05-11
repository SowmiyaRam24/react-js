import React from 'react';
import'./ChartBar.css';
const CartBar=(props)=>{
    let bars='0%';
    if(props.max>0){
        bars=Math.round((props.value/props.maxvalue)*100)+'%';
    }
 return(
    <div className='chart-bar'>
        <div className='chart-bar_inner'>
            <div className='chart-bar_fill' style={{height:barFillHeight}}>{}</div>
        </div>
        <div className='chart-bar_label'>{props.label}</div>
    </div>

 )
}
export default CartBar;