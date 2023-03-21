import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import ProductList from './pages/ProductList';
import Register from './pages/Register';
import Cart from './pages/Cart';
import Login from './pages/Login';
import Product from './pages/Product';
import { Router } from '@material-ui/icons';

import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import ForgotPwd from './components/ForgotPwd';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
function App() {
  return (
    <BrowserRouter>
   <Routes><Route path='/login' element={<Login/>}/>
   <Route path='/' element={<Home/>}/>
   <Route path='/register' element={<Register/>}/>
   <Route path='/cart' element={<Cart/>}/>
   <Route path='/product' element={<Product/>}/>
   </Routes>
    

    </BrowserRouter>
    
  );
}

export default App;
