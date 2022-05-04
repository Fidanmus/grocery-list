import './App.css';
import top from './top.jpg'
import bottom from './bottom.jpg'
import { GroceryList } from './GroceryList';

function App() {
  return (
    <div className='app'>
      <div className='container'>
      <img src={ top } alt="shopping" width="280px"/>
      </div>
      <div className='container'><h1>Grocery List</h1></div>
      <GroceryList/>
      <div className='container'>
      <img src={ bottom } alt="cashier" width="200px"/>
      </div>
    </div>
  );
}

export default App;
