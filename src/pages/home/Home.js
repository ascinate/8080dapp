import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import AllShedule from "./components/getApi";

function Home(){
    document.title ="8080 Mint - Project Godjira"
    const[allDataShedule, setAllDataShedule ] = useState(AllShedule);
    console.log(AllShedule);
    return(
        <> 
          <section className="home-page comon-page float-start w-100">
              <div className="container">
                  <NavLink to="/" className="text-center d-table mx-auto">
                     <img src="images/logo.png" alt="logo"/>
                  </NavLink>
                 <div className="body-home1">
                     <div className="row row-cols-1 row-cols-lg-2 mt-4 mb-5">
                         <div className="col position-relative">
                             <h1 className="text-white"> Generation <br/> 4 
                             Mint</h1>
                             <h4> Connect wallet to continue. </h4>
                             <NavLink to="/" className="btn comon-btn w-25">
                                  Connect  <BsArrowRight/>
                             </NavLink>

                             <p className="verivay"> For more information, here is the 
                             <NavLink to="/"> verified contract. </NavLink> </p>
                         </div>
                         <div className="col ps-lg-5 mt-md-5 mt-lg-0">
                             <h4> Mint Pricing Schedule </h4>
                            
                             <div className="minright-div">

                             {
                                allDataShedule.map((curElem) =>{
                                    const { id, titel, link, price , userid } = curElem;
                                    return(
                                        <>
                                        <div className="inside-rt">
                                            <div className="comon-gen-div">
                                                <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-2">
                                                    <div className="col">
                                                        <h5> {titel} </h5>
                                                        <NavLink to={link} className="comon-gen-link">
                                                        <figure>
                                                            <img src="images/group1.png" alt="group1"/>
                                                            <figcaption className="ms-2"> +333 more tokens </figcaption>
                                                        </figure>
                                                        </NavLink>
                                                    </div>
                                                    <div className="col d-sm-flex justify-content-sm-end">
                                                    <h3> <span> {price} </span> {userid}  </h3>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        </>
                                    );
                                })
                            }
                            
                            </div>

                         </div>
                     </div>
                 </div>
              </div>
          </section>
        </>
    )
};
export default Home;