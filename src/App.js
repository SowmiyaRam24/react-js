import logo from './logo.svg';
import './App.css';
import Expence from'./components/ExpenceItems';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
      </header>
      <Expence/>
    </div>
  );
}

export default App;
