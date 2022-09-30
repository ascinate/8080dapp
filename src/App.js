import react from "react";
import ReactDOM, { render } from 'react-dom';
import {BrowserRouter as Router , Routes, Route, Outlet,Switch, useLocation} from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js";
import './App.css';
import Home from "./pages/home/Home";
import TotalSupply from "./pages/total-supply/TotalSupply";
import Products from "./pages/products-cart/Products";
import Congrats from "./pages/products-cart/Congrats";
import SoldOut from "./pages/products-cart/SoldOut";
import NotWishList from "./pages/products-cart/NotWishList";
import NotFound from "./pages/products-cart/NotFound";
import PreLogin from "./pages/register/PreLogin";

function App() {
  return (
    <div className="App">
        <Router>
             <Routes>
                  <Route excaexact="true" path="/" element={<Home/>}/>
                  <Route excaexact="true" path="/totalsupply" element={<TotalSupply/>}/>
                  <Route excaexact="true" path="/products" element={<Products/>}/>
                  <Route excaexact="true" path="/congrats" element={<Congrats/>}/>
                  <Route excaexact="true" path="/soldout" element={<SoldOut/>}/>
                  <Route excaexact="true" path="/notwishlist" element={<NotWishList/>}/>
                  <Route excaexact="true" path="/notfound" element={<NotFound/>}/>
                  <Route excaexact="true" path="/prelogin" element={<PreLogin/>}/>
                  
                  
                  
                  
             </Routes>
             
        </Router>
    </div>
  );
}

export default App;
