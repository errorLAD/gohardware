import React from "react";

//material-ui
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";


import MobileHomeStart from "./MobileHomeStart";
import cover from "../images/food_upscaled.png";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
/*
const useStyles = makeStyles((theme) => ({
  presentation: {
    display: "flex",
    width: "90%",
    margin: "auto",
    minHeight: "80vh",
    alignItems: "center",
    // eslint-disable-next-line
    ["@media (max-width:1024px)"]: {
      flexDirection: "column",
    },
  },
  introduction: {
    flex: 1,
    paddingLeft: 60,
    height: "340px",
  },
  safeFood: {
    fontSize: 64,
    fontWeight: 400,
  },
  delivery: {
    color: "#157a21",
    fontSize: 64,
    fontWeight: "bold",
    marginTop: -30,
    marginBottom: 20,
  },
  paragraph: {
    width: 400,
    fontSize: 14.5,
  },
  cover: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    height: "72vh",
  },
  coverImg: {
    height: "100%",
  },
  ctaOrder: {
    fontSize: 18,
    backgroundColor: "#f7a692",
    marginTop: 30,
  },
}));
*/
const HomeStart = () => {
//  const classes = useStyles();
  const settings = {
    dots: true,
    autoplay: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1
  };
  return (
   <>
  <div class="hidden md:block">  
    <div class="p-2 px-  max-w-3xl mx-auto rounded-xl shadow-2xl flex items-center space-x-6">
       <p class="px-5">
           <img class="h-12 w-12  items-center" src="https://imgur.com/RieNrKf.png" alt="logo"/>
             <p class="text-slate-500 flex">
            
             <span class="tag is-success is-light">Building Material</span>

             </p>

       </p>
         <p class="px-1">
           <img class="h-12 w-12" src="https://imgur.com/V9ZuFLb.png" alt="logo"/>
             <p class="text-slate-500">
             <span class="tag is-success is-light">Architect</span>
           
             </p>
       </p>
          <p class="">
            <img class="h-12 w-12" src="https://imgur.com/yX6cykU.png" alt="logo"/>
             <p class="text-slate-500">
             <span class="tag is-success is-light">Contractor</span>
             </p>
       </p>
         <p class="">
            <img class="h-12 w-12" src="https://imgur.com/Tko7H8k.png" alt="logo"/>
             <p class="text-slate-500">

             <span class="tag is-success is-light">Worker</span>
            
             </p>
       </p>
         <p class="">
            <img class="h-12 w-12" src="https://imgur.com/wHZRMpU.png" alt="logo"/>
             <p class="text-slate-500">
          
             <span class="tag is-success is-light">Tool</span>
            
             </p>
       </p>
             <p class="">
            <img class="h-12 w-12" src="https://imgur.com/olR12jz.png" alt="logo"/>
             <p class="text-slate-500">
           
             <span class="tag is-success is-light">Plumber</span>
            
             </p>
       </p>
          <p class=" is-center">
            <img class="h-12 w-12 " src="https://imgur.com/dohQkfF.png" alt="logo"/>
            
            <span class="tag is-success is-light">Electrican</span>
      
       </p>
   </div>
  <div class="p-2  max-w-7xl mx-auto  items-center space-x-6">
   <Slider {...settings}>
        <div><img  class="h-140 w-120 rounded-xl shadow-xlg " src='https://imgur.com/YSRCfvM.png' alt=""/></div>
        <div><img  class="h-140 w-120 rounded-xl shadow-xlg " src='https://imgur.com/o2TsrSb.png' alt="Credit to Alisa Anton on Unsplash"/></div>
        <div><img  class="h-140 w-120 rounded-xl shadow-lg " src='https://imgur.com/zjXjqvh.png' alt="Credit to Igor Ovsyannykov on Unsplash"/></div>
        <div><img class="h-140 w-120 rounded-xl shadow-lg " src='https://imgur.com/oLXe3aR.png' alt="Credit to Pierre Châtel-Innocenti on Unsplash"/></div>
         <div><img class="h-140 w-120 rounded-xl shadow-lg " src='https://imgur.com/SxPArXS.png' alt="Credit to Cristina Gottardi on Unsplash"/></div>
        </Slider>
    </div>
    </div>
    <div class="lg:hidden lg:block">
    <MobileHomeStart />
    </div>
   </>
  );
};

export default React.memo(HomeStart);
