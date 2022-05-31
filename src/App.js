import logo from './logo.svg';
import './App.css';
import ProductsData from './products.json';
import SearchProducts from './components/Search';

function App() {
  return (
    <div className="App">
      <SearchProducts placeholder="Enter the Product Category" data={ProductsData}></SearchProducts>
    </div>
  );
}

export default App;
