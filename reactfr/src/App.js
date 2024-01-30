import './App.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useEffect } from 'react';
import Cart from './Components/cart';
import Wishlist from './Components/wishlist';
import Orders from './Components/order';
import Products from './Components/products';
import Login from './Components/login/login';
import Signup from './Components/signup/signup';
import { Cookies, useCookies } from 'react-cookie';

function App() {
  const [token, setToken] = useCookies(['Token']);
  useEffect(() => {
    if (!token.Token) {
      setToken("");
    }
  }, [token]);
  return (
    <BrowserRouter>
      <div className="App">
        <div className='navitems'>
          <div className='maintitle'>
            <h1 className='hcol'>Pbgp's Products</h1>
          </div>
          <div className='navbutton'>
            <ul>
              {token !== "" ? (
                <>
                  <li><Link to="/" className='link-style'>products</Link></li>
                  <li><Link to="/wishlist" className='link-style'>wishlist</Link></li>
                  <li><Link to="/cart" className='link-style'>cart</Link></li>
                  <li><Link to="/orders" className='link-style'>orders</Link></li>
                </>
              ) : (
                <>
                  <li><Link to="/login" className='link-style'>login</Link></li>
                  <li><Link to="/signup" className='link-style'>signup</Link></li>
                </>
              )}
            </ul>
          </div>
        </div>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/wishlist" element={<Wishlist />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
