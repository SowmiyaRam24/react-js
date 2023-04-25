
import './App.css';
import Expence from'./components/ExpenceItems';

function App() {
  const expenses=[
    {title:'car Insurance',amount:299,date:new Date()},
    {title:'bus',amount:700,date:new Date()},
    {title:'egg',amount:898,date:new Date()}
  ];
  return (
    <div className="App">
      <Expence 
      title={expenses[0].title}
      amount={expenses[0].amount}
      date={expenses[0].date}>

      </Expence>
      <Expence
       title={expenses[1].title}
       amount={expenses[1].amount}
       date={expenses[1].date}>
      </Expence>
      <Expence  title={expenses[2].title}
      amount={expenses[2].amount}
      date={expenses[2].date}
      ></Expence>
    </div>
  );
}

export default App;
