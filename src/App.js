import react from "react";
import ReactDOM, { render } from 'react-dom';
import {BrowserRouter as Router , Routes, Route, Outlet,Switch, useLocation} from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js";
import './App.css';
import Home from "./pages/home/Home";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
        <Router>
             <Routes>
                  <Route excaexact="true" path="/" element={<Home/>}/>
             </Routes>
             <Footer/>
        </Router>
    </div>
  );
}

export default App;
