import React,{useState} from "react";
import ExpenceFrom from './Froms2';
function Froms(props){
    const[isEditior,setIsEditing]=useState(false);
    const saveExpense=(enteredExpesce)=>{
        const expensess={
            ...enteredExpesce,
            id:Math.random().toString()
        };
        props.onAddExpense(expensess);
        setIsEditing(false);
    };
    const stateEditingHandler=()=>{
        setIsEditing(true);
    };
    const stopEditingHandeler=()=>{
        setIsEditing(false);
    };
    
    return(
        
           < div className='new-expence'>
            {!isEditior&&<button onClick={stateEditingHandler}>Add New button</button>}
            {isEditior&&(<ExpenceFrom onSaveForm={saveExpense} onCancel={stopEditingHandeler} />)}
           </div>
        
    );
};
export default Froms;