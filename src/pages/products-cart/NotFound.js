import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import Header from "../../Header";
import QuantityButton from "./components/QuantityButton";


function NotFound(){
    document.title ="8080 Mint - NotFound";
   

    return(
        <> 
          <Header/>
          <section className="home-page comon-page float-start w-100">
              <div className="container">
                 
                 <div className="body-total-products col-lg-9 mx-auto d-table mb-5">
                      <div className="row row-cols-1 row-cols-lg-2">
                         <div className="col">
                            
                            <h1> No sales found! </h1>
                            
                            <h5> Currently, there is no sale live!
                            Please check again later </h5>
                         </div>
                         
                      </div>
                     
                     
                 </div>
              </div>
          </section>
        </>
    )
};
export default NotFound;