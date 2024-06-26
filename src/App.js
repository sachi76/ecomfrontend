import './App.css';
import { BrowserRouter, Route, Link, Routes  } from "react-router-dom";
import ProductList from './components/ProductList';
import ProductForm from './components/ProductForm';
import Navbar from './components/Navbar';
import ProductDetails from './components/ProductDetails';

function App() {
  return (
    <div className="App">
      <h1>Sachi</h1>
      <BrowserRouter>
      <Navbar />
        <div>
        <Routes>
          <Route exact path='/' element={<ProductList />}/>
          <Route path='/create' element={<ProductForm />}/>
          <Route path='/product/:id' element={<ProductDetails />} /> 
          <Route path='/edit/:id' element={<ProductForm />} />
        </Routes>
        </div>
      </BrowserRouter>
  
    </div>
  );
}

export default App;



