import {BrowserRouter,Routes, Route} from 'react-router-dom'
import { Provider } from 'react-redux';
import { store } from 'redux/store/store';
//views
import Cart from 'views/Cart';
import Home from 'views/Home';
import Product from 'views/Product';

function App() {
  return (
    <BrowserRouter>
    <Provider store={store}>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/cart' element={<Cart />}/>
        <Route path='/product/:id' element={<Product/>}/>
      </Routes>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
