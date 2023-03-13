import logo from './logo.svg';
import './App.css';
import { Divider } from 'antd';
import SalesByCategory from './components/salesByCategory';
import SalesByProduct from './components/salesByProduct';
import SalesByClient from './components/salesByClient';
import Sales from './components/sales';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>PlagStore</h1>
        <div>
          <SalesByCategory></SalesByCategory>
          <Divider/>
          <SalesByProduct></SalesByProduct>
          <Divider/>
          <SalesByClient></SalesByClient>
          <Divider/>
          <Sales></Sales>
        </div>
      </header>
      
      
      
    </div>
  );
}

export default App;
