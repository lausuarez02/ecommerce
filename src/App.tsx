import {BrowserRouter,Routes, Route} from 'react-router-dom'
import { Provider } from 'react-redux';
import { store } from 'redux/store/store';
import { useEffect,useState } from 'react';
//views
import Cart from 'views/cart/Cart';
import Home from 'views/home/Home';
import Product from 'views/product/Product';
import MainHome from 'views/mainHome/MainHome';
import Login from 'views/login/login';
import Auth from 'views/auth/Auth';
import NotFound from 'components/notFound/notFound'
//utils
import ProtectedRoute from './utils/protectedRoutes';
import Checkout from 'views/checkout/checkout';

function App() {
  useEffect(() => {
    let domain;
    const host = window.location.host;

    const arr = host
    .split(".")
    .slice(0, host.includes("localhost") ? -1 : -2);
    if(arr.length > 0) domain = "shop"
  },[])

  return (
    <BrowserRouter>
    <Provider store={store}>
      <Routes>
        <Route path='/' element={<MainHome/>}/>
        <Route path='/:id' element={<Home />}/>
        <Route path='/cart' element={<Cart />}/>
        <Route path='/product/:id' element={<Product/>}/>
        {/* <Route path='/test' element={<Home/}/> */}
        <Route path='/user' element={
                <ProtectedRoute>
                  <Login/>
                  </ProtectedRoute>
                }/>
        <Route path='/authLogin' element={<Auth/>} />
        <Route path='/checkout' element={<Checkout/>}/>
        <Route path="*" element={<NotFound/>} /> 
      </Routes>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
