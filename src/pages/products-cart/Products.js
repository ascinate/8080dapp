import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import Header from "../../Header";
import QuantityButton from "./components/QuantityButton";
import LeftText from "./components/LeftText";


function Products(){
    document.title ="8080 Mint - Total Supply";
   

    return(
        <> 
          <Header/>
          <section className="home-page comon-page float-start w-100">
              <div className="container">
                 
                 <div className="body-total-products col-lg-9 mx-auto d-table mb-5">
                      <div className="row row-cols-1 row-cols-lg-2">
                         <div className="col">
                            <h2> Gen 3 </h2> 
                            <p> Public Sale </p>
                            <h4 className="text-white"> Welcome to the </h4>
                            <LeftText name="Public Mint"/>
                            <h4> Anyone can mint upto 2 NFTs </h4>
                         </div>
                         <div className="col">
                                <div className="td-heading d-flex align-items-center justify-content-between mt-3">
                                    <h5 className="suppy-hrad mt-0"> Total <span> 500 </span> </h5>
                                    <h5 className="renatin-hrad mt-0"> Remaining <span> 10 </span> </h5>
                                </div>
                                <div className="to-steps1 d-flex align-items-center justify-content-between">
                                    <div className="div-steps w-100">
                                        <div className="sp-9"></div>
                                    </div>
                                  
                                </div>
                                
                                <div className="counting-ps-suppy">
                                     <div className="d-flex justify-content-between align-items-center">
                                        <h5 className="d-flex justify-content-between align-items-center w-100 m-0">
                                         <span>Price per mint  </span> 
                                          <span> 3 ETH </span>
                                        </h5>
                                        
                                     </div>
                                      <QuantityButton/>
                                      <h4 className="text-center"> Total 6 ETH </h4>
                                      <NavLink to="/" className="btn mint-btn"> Mint Now</NavLink>
     
                                </div>
                         </div>
                      </div>
                     
                     
                 </div>
              </div>
          </section>
        </>
    )
};
export default Products;