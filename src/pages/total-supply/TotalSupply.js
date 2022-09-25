import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import Header from "../../Header";
import AllSupply from "./components/SupplyApi";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


function TotalSupply(){
    document.title ="8080 Mint - Total Supply";
    const [ supplyData , setSupplyData] =useState(AllSupply);
    console.log(supplyData);


    const settings = {
        dots: false,
        infinite: true,
        margin:30,
        speed: 500,
        slidesToShow:3,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
              dots: false
            }
          },
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
              dots: false
            }
          },
          {
            breakpoint: 668,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2,
              infinite: true,
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2,
              infinite: true,
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
            }
          }
        ]
      };
    return(
        <> 
          <Header/>
          <section className="home-page comon-page float-start w-100">
              <div className="container">
                 
                 <div className="body-total-suppy">
                      <div className="to-steps1 d-flex align-items-center justify-content-between">
                          <div className="div-steps">
                             <div className="sp-1"></div>
                          </div>
                          <h5 className="m-0"> 10% sold </h5>
                      </div>
                      <div className="td-heading d-flex align-items-center justify-content-between mt-3">
                         <h5 className="suppy-hrad mt-0"> Total Supply <span> 5000 </span> </h5>
                         <h5 className="renatin-hrad mt-0"> Remaining <span> 4500 </span> </h5>
                      </div>
                      <div className="body-div2-slide-suppy">

                        <Slider {...settings}>

                          
                             

                             {
                                supplyData.map((curElem) =>{
                                    const { id, titel, categoriy, perwallet, permint, Lounchdate } = curElem;
                                    return(
                                        <>
                                       
                                        <NavLink to="/" className="comon-items1">
                                                <h3 className="m-0"> {titel} </h3>
                                                <h5 className="my-2"> {categoriy} </h5>
                                                <ul className="list-unstyled mt-3">
                                                    <li> <span> Limit per wallet</span> 
                                                    <span> {perwallet} </span>
                                                    </li>
                                                    <li> <span> Price per mint </span> 
                                                    <span> {permint} </span>
                                                    </li>
                                                    <li> <span> Launched on </span> 
                                                    <span> {Lounchdate} </span>
                                                    </li>
                                                </ul> 
                                                <div className="btn goto-btn mt-4">
                                                    <span> Go to Sale </span>
                                                    <BsArrowRight/>
                                                </div>
                                        </NavLink>
                                        </>
                                    );
                                })
                            }
                        

                        </Slider>

                      </div>
                 </div>
              </div>
          </section>
        </>
    )
};
export default TotalSupply;