import React, { useState } from "react";
import "../Navbar.css";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaYoutubeSquare,
  FaBorderAll,
  FaCartPlus,
  FaBackspace,
  AiOutlineApi,
  FaParachuteBox,
  FaRocket,
  FaHeartBroken,FaHandshakeSlash
} from "react-icons/fa";


import { GiHamburgerMenu } from "react-icons/gi";

import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
//

//material-ui
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import { logoutAction } from "../redux/actions/authActions";

const useStyles = makeStyles(() => ({
  
}));
const MobileMenuNav = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();

  const {
    account: { role },
    authenticated,
    firstName,
    lastName,
    address,
  } = useSelector((state) => state.auth);

  const handleLogout = () => {
    dispatch(logoutAction(history));
  };


  
  return (
    <>
   <nav className="main-nav">
        {/* 1st logo part  */}
        <div className="logo">
          <h2> <Link to="/" >
          <img class="h-6 " src="https://imgur.com/aBt1lN6.png"/>
              </Link>
          </h2>
        </div>

        {/* 2nd menu part  */}
        <div
          className={
            showMediaIcons  ? "menu-link mobile-menu-link" : "menu-link"
          }>
          <a  onClick={() => setShowMediaIcons(!showMediaIcons)}>
          <ul>
       
           
       
          {authenticated ? (
          role === "ROLE_SELLER" ? (
            <div className={classes.buttons}>
            
                Seller Dashboard
              <div class="py-2">
              <Link to="/seller/orders">
                <Button className={classes.buttonStyles}
                 variant="outlined"
                >
              <span class="py-2"><FaBorderAll/> </span>
              <span class = "px-2"></span>
                  Orders</Button>
              </Link>
              </div>
              <Button
                onClick={handleLogout}
                className={classes.buttonStyles}
                variant="outlined"
              >
                Logout
              </Button>
            </div>
          ) : (
            <div>
              <div class="py-2">
                Hello, {firstName} {lastName}
              </div>

              <div class="">
              <Link to="/orders" class="flex">
              <span class="py-2"><FaBorderAll />  </span>
                 <Button className="">Orders</Button> 
              </Link>
              </div>

              <div>
              <Link to={{ pathname: "/cart", state: { address: address } }} class="flex">
                <span class="py-1"><FaCartPlus/></span><Button className=''>Cart</Button>
              </Link>
              </div>
              <div>
              <div class="flex">
              <span class="py-2">  <FaBackspace /> </span>
              <Button
                onClick={handleLogout}
                className={classes.buttonStyles}
              > 
        
            
                Logout
              </Button>

              </div>

              <img class="block mx-auto h-10 w-40 rounded-full sm:mx-0 sm:shrink-0" src="https://imgur.com/ux9PKcU.png" alt="Woman's Face"/>
            
              </div>
            </div>
          )
        ) : (
          <div className={classes.buttons}>
          <Link to="/login">
         
            <Button className={classes.buttonStyles} variant="outlined">  <span class="py-2"> <FaParachuteBox /></span>            <span class = "px-2">Login</span></Button>
     
          </Link>
          <div class="py-2"></div>



          <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
          <Link to="/register">
            <Button className={classes.buttonStyles} variant="outlined">
            <span class="py-2"><FaRocket/> </span>
              <span class = "px-2"></span>Register
            </Button>
          </Link>
          </a>
        </div>
        )}
  

          </ul>
          </a>
      
        </div>

        {/* 3rd social media links */}
        <div className="social-media">
          {/* hamburget menu start  */}
          <div className="hamburger-menu">
            <a onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <GiHamburgerMenu />
            </a>
          </div>
        </div>
    
      </nav>

    </>
  );
};

export default MobileMenuNav;
