import {BrowserRouter,Routes, Route} from 'react-router-dom'
import { Provider } from 'react-redux';
import { store } from 'redux/store/store';
import { useEffect } from 'react';
//views
import Cart from 'views/cart/Cart';
import Home from 'views/home/Home';
import Product from 'views/product/Product';
import MainHome from 'views/mainHome/MainHome';

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
      </Routes>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
