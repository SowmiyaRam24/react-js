import React,{useState} from 'react';
import './App.css';
import Froms from './components/Froms/Froms';
import Expence from'./components/Expense/ExpenceItems';
const DUMMY_DATE=[
  {id:'e4',title:'car Insurance',amount:29,date:new Date()},
  {id:'e3',title:'bus',amount:700,date:new Date()},
  {id:'e6',title:'egg',amount:0,date:new Date()}
];
function App() {
  const [expenses,setExpenses]=useState(DUMMY_DATE)
  const addExpenseHandler=expense=>{
    setExpenses((PreExpense)=>{
      return[expense,...PreExpense];
    });
    
  };
  
  return (
    <div className="App">
      <Froms onAddExpense={addExpenseHandler}/>
      {expenses.map((expense)=><Expence 
      key={expense.id}
      title={expense.title}
      amount={expense.amount}
      date={expense.date}/>
      )}
         
    </div>
  );
}
export default App;
