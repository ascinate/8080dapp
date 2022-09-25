import React from "react";
import { NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { BsXCircleFill, BsArrowRight } from "react-icons/bs";



function Header(){
    return(
        <>
        <nav className="navbar navbar-expand-lg navbar-light float-start w-100">
                <div className="container">
                   <NavLink  className="navbar-brand" to="/"> 
                        <img src="images/logo.png" alt="logo"/>
                   </NavLink>
                    

                    <div className="right-mnain-menu1">
                    
                            <button type="button" className="btn btn-aount1">
                                <span className="icon-name1">
                                    <img src="images/metamasklogo.png" alt="icon-r"/>
                                </span>
                                <span> 0x2ec….9bb6 </span>
                            </button>
                    </div>
                    

                    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#mobile-menu">
                        <FaBars/>
                    </button>
                </div>
        </nav>




        <div className="offcanvas offcanvas-start mobile-menu-div" tabindex="-1" id="mobile-menu" aria-labelledby="offcanvasExampleLabel">
            <div className="offcanvas-header">
                
                <button type="button" className="close-menu btn" data-bs-dismiss="offcanvas" aria-label="Close">
                   <BsXCircleFill/>
                </button>
            </div>
  
      
            <div className="offcanvas-body">
            
            <div className="head-contact">
                <a href="index.html" className="logo-side">
                   <img src="images/8080.png" alt="logo"/>
                </a>
                
                <div className="mobile-menu-sec mt-3">
                    <ul className="list-unstyled">
                        <li  data-bs-dismiss="offcanvas">
                           <NavLink className="nav-link" to="/"> Mint </NavLink>
                        </li>
                        <li data-bs-dismiss="offcanvas">
                            <NavLink className="nav-link" to="/"> Stake </NavLink>
                        </li>

                        <li data-bs-dismiss="offcanvas">
                            <NavLink className="nav-link" to="/"> Marketplace</NavLink>
                        </li>

                        <li data-bs-dismiss="offcanvas">
                            <NavLink to="/" className="btn connect-bnt">
                                Launched Mint <BsArrowRight/>
                            
                            </NavLink>
                        </li>
                    
                    
                    </ul>
                </div>
                
            </div>
            </div>
    
 
        </div>

        </>
    )
};
export default Header;