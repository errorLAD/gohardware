import React from "react";

//material-ui
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import cover from "../images/food_upscaled.png";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const MobileHomeStart = () => {
//  const classes = useStyles();
const settings = {
  dots: false,
  autoplay: false,
  infinite: true,
  slidesToShow: 5,
  slidesToScroll: 1
};
const setting = {
  dots:false,
  autoplay: true,
  infinite: true,
  slidesToShow: 2,
  slidesToScroll: 1
};

    return (
     <> 
     <div class="px-8 py-2">
     <div class="">
     <Slider {...settings}>
        <div>
        <img class="h-18 w-18 " src="https://imgur.com/7be4NIj.png" alt="logo"/>
        <p><span class="tag is-white px-4 is-normal">Home</span></p> 
        </div>
        <div>
        <img class="h-18 w-18" src="https://imgur.com/NfwEbYK.png" alt="logo"/>
        <p><span class="tag is-white px-2 is-normal">Architect</span></p> 
        </div>
        <div>
        <img class="h-18 w-18" src="https://imgur.com/SxdcdNA.png" alt="logo"/>
        <p><span class="tag is-white px-1 is-normal">Contractor</span></p> 
        </div>
        <div>
        <img class="h-18 w-18" src="https://imgur.com/zMHRrQv.png" alt="logo"/>
        <p><span class="tag is-white px-4 is-normal">Worker</span></p> 
        </div>
     
         <div> 
         <img class="h-18 w-18" src="https://imgur.com/fV4FyPl.png" alt="logo"/>
         <p><span class="tag is-white px-4 is-normal">Tool</span></p> 
         </div>
         <div>
        <img class="h-18 w-18" src="https://imgur.com/vc8iwR3.png" alt="logo"/>
        <p><span class="tag is-white px-2 is-normal">Plumber </span></p> 
         </div>
         <div>   
             <img class="h-15 w-15" src="https://imgur.com/yWntN6k.png" alt="logo"/>
             <p><span class="tag is-white px-1 is-normal">Electrician</span></p> 
         </div>
       </Slider>
       </div>
       <div class="py-2">
       <Slider {...setting}>
        <div><img  class="h-140 w-120 rounded-xl shadow-xlg " src='https://imgur.com/YSRCfvM.png' alt=""/></div>
        <div><img  class="h-140 w-120 rounded-xl shadow-xlg " src='https://imgur.com/o2TsrSb.png' alt="Credit to Alisa Anton on Unsplash"/></div>
        <div><img  class="h-140 w-120 rounded-xl shadow-lg " src='https://imgur.com/zjXjqvh.png' alt="Credit to Igor Ovsyannykov on Unsplash"/></div>
        <div><img class="h-140 w-120 rounded-xl shadow-lg " src='https://imgur.com/oLXe3aR.png' alt="Credit to Pierre Châtel-Innocenti on Unsplash"/></div>
         <div><img class="h-140 w-120 rounded-xl shadow-lg " src='https://imgur.com/SxPArXS.png' alt="Credit to Cristina Gottardi on Unsplash"/></div>
        </Slider>
        </div>
     </div>
     </>
    );
  }


export default React.memo(MobileHomeStart);
