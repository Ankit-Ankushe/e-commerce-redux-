import './App.css';
import {Routes,Route} from 'react-router-dom'
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import Navbar from './components/Navbar';
import Grocery from './components/Grocery';
import Pharmacy from './components/Pharmacy';
import ProductDetail from './components/ProductDetail';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/signup' element={<Signup/>}></Route>
        <Route path='/grocery' element={<Grocery/>}></Route>
        <Route path='/pharmacy' element={<Pharmacy/>}></Route>
        <Route path='/:id' element={<ProductDetail/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
