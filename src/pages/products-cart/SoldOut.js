import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import Header from "../../Header";
import QuantityButton from "./components/QuantityButton";
import LeftText from "./components/LeftText";


function SoldOut(){
    document.title ="8080 Mint - Sold Out";
   

    return(
        <> 
          <Header/>
          <section className="home-page comon-page float-start w-100">
              <div className="container">
                 
                 <div className="body-total-products col-lg-9 mx-auto d-table mb-5">
                      <div className="row row-cols-1 row-cols-lg-2">
                         <div className="col">
                            <h2> Gen 3 </h2> 
                            <p className="color-gray"> Whitelist Sale </p>
                            
                            <LeftText name="Sold out"/>
                            
                            <h5> Checkout the collection on <span className="color-green">  Opensea </span> </h5>
                         </div>
                         <div className="col">
                                <div className="td-heading d-flex align-items-center justify-content-between mt-3">
                                    <h5 className="suppy-hrad mt-0"> Total <span> 500 </span> </h5>
                                    <h5 className="renatin-hrad mt-0"> Remaining <span> 10 </span> </h5>
                                </div>
                                <div className="to-steps1 d-flex align-items-center justify-content-between">
                                    <div className="div-steps w-100">
                                        <div className="sp-9 w-100"></div>
                                    </div>
                                  
                                </div>
                                
                                
                         </div>
                      </div>
                     
                     
                 </div>
              </div>
          </section>
        </>
    )
};
export default SoldOut;