import React, { useState } from 'react'
import "./navbar.css";
import { FaFacebookSquare, FaInstagramSquare, FaYoutubeSquare } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";
import Foods from "./Foods";
import Drinks from "./Drinks";
import Cakes from "./Cakes";
import Home from "./Home";
import Search from "./Search";
const Navbar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
    return (
      <>
            <nav className="main-nav">
{/* 1st logo part*/}
          {/* <div className="logo">
            <h2>
              <span>F</span>ood
              <span>C</span>ourt
            </h2>
          </div> */}
          

          {/* 2nd menu part */}
         
 

      <Router>
      <div className= {showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"}>
              {/* <div className="App"> */}
                <ul>
                <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/Foods">Foods</Link>
                  </li>
                  <li>
                    <Link to="/Drinks">Drinks</Link>
                  </li>
                  <li>
                    <Link to="/Cakes">Cakes</Link>
                  </li>
                  <li>
                  {/* <form action="/" method="get">
                  <input
                      type="text"
                      id="header-search"
                      placeholder="Search item"
                      name="s" 
                  />
                  <button type="submit">Search</button>
    </form> */}
                <Link to="/Search">Search</Link>
                  </li>
                  {/*className="App-header"  */}
                </ul>
              <Routes>
                    <Route exact path='/' element={< Home />}></Route>
                    <Route exact path='/Foods' element={< Foods />}></Route>
                    <Route exact path='/Drinks' element={< Drinks />}></Route>
                    <Route exact path='/Cakes' element={< Cakes />}></Route>
                    <Route exact path='/Search' element={< Search />}></Route>
              </Routes>
              </div>
          </Router>

          

          {/* 3rd social-media links */}
          <div className="social-media">
              <ul className="social-media-desktop">
                <li>
                  <a href="http://bharatedu.co.in/contact-us/" 
                  target="_food">
                  <FaFacebookSquare className="facebook" />  
                  </a>
                </li>
                <li>
                  <a href="https://www.cowin.gov.in/" 
                  target="_food">
                  <FaInstagramSquare className="instagram" />  
                  </a>
                </li>
                <li>
                  <a href="https://www.youtube.com/" 
                  target="_food">
                  <FaYoutubeSquare className="youtube" />  
                  </a>
                </li>
              </ul>

              {/*hamburger menu start */}
              <div className="hamburger-menu">
                          <a href="#" onClick={() => setShowMediaIcons( !showMediaIcons)}>
                            <GiHamburgerMenu />
                          </a>
            </div>
          </div>
        </nav>

          
      </>
    );
};

export default Navbar;
