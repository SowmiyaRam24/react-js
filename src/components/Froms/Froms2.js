import React, { useState } from'react';
import'./Froms.css';
const ExpenceFrom=(props)=>{
    const[enteredTitle,setTitle]=useState('');
    const[enterAmount,setAmount]=useState('');
    const[enterDate,setDate]=useState('')

    const titleChange=(event)=>{
        setTitle(event.target.value);
    }
    const amountChange=(event)=>{
        setAmount(event.target.value);
    }
    const setDates=(event)=>{
        setDate(event.target.value);
     }
    const submitHandler=(event) => {
        event.preventDefault();
        const expensess={
            title:enteredTitle,
            amount:+enterAmount,
            date:new Date(enterDate)
        };
        props.onSaveForm(expensess);
        setTitle('');
        setDate('');
        setDate('');
        
        
    };
    return(
        <form onSubmit={submitHandler}>
            <div className='new-expence'>
                <div className='new-expence2'>
                    <label>Title</label>
                    <input type='text' 
                    value={enteredTitle} 
                    onChange={titleChange}></input >
                </div>
                <div className='new-expence2'>
                    <label>amount</label>
                    <input type='number'
                    min="0.01" 
                    step="0.01" 
                    value={enterAmount}  
                    onChange={amountChange}></input>
                </div>
                <div className="new-expense2" >
                    <label>Date</label>
                    <input 
                    type='date'
                    min='2019-01-01'
                    max='2022-12-31' 
                    value={enterDate}
                     onChange={setDates}></input>
                </div>
            </div>
            <div id="new-dash">
                <button type='button'onClick={props.onCancel}>Cancel</button>
                <button 
                type="submit"
                >Add Expence
                </button>
            </div>
        </form>
    )
}
export default ExpenceFrom;