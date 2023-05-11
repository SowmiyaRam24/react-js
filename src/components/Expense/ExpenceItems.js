import React,{useState}from'react';
import Card from '../UI/Card';
import'./ExpenceItems.css';
import ExpenseDate from './ExpenseDate';



function Expence(props){
     const [title,useStatew]=useState(props.title );

     function ClickedMe(){
       useStatew("update");
        console.log(title);
     }
     
    return(
        <Card>
             <div>
                {/* <div>{props.id}</div> */}
                <h1>{title
                }</h1>
            </div>
             <div>${props.amount}</div>
            <ExpenseDate date={props.date}></ExpenseDate>  
            <button onClick={ClickedMe}>clicked</button>
    
        </Card>
    );
}
export default Expence;
