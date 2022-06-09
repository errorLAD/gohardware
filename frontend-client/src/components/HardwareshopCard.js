import React from "react";
import { Link } from "react-router-dom";

//M-UI
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
//icon
import { FaStore } from "react-icons/fa";
import { FaTags } from "react-icons/fa";
import { FaRupeeSign } from "react-icons/fa";
import { FaLongArrowAltDown } from "react-icons/fa";
import { FaWallet  } from "react-icons/fa";


import SwipeableImages from "./SwipeableImages";

const useStyles = makeStyles({
  cardContent: {
    marginTop: "-40px",
  },
});

export default function HardwareshopCard(props) {
  const {
    name,
    tags,
    costForOne,
    minOrderAmount,
    payment,
    imageUrl,
    _id,
  } = props;

  let restUrl = name.split(" ");
  restUrl = restUrl.join("-").toLowerCase();
  const classes = useStyles();
  let paymentString;

  if (payment.length === 1)
    paymentString = `Accepts ${payment[0].toLowerCase()} payment`;

  if (payment.length === 2)
    paymentString = `Accepts ${payment[0].toLowerCase()} & ${payment[1].toLowerCase()} payments`;

  return (
  <>
  <div class="hidden md:block">
  <div class="max-w-sm rounded overflow-hidden shadow-xl">
  <SwipeableImages images={imageUrl} type="home" />
  <div class="px-8 bg-indigo-0 rounded-lg py-4 ">
  <p class="flex text-lg font-semibold text-slate-900 pb-4">
   <FaStore/> <span class="px-2 ">{name} </span>
      </p>
   
      <div class="">
    <p class="flex"><FaTags/>
      <span class="tag is-primary is-light">  
      <span class="py-2">{tags}</span></span></p>


     <p class="flex"> <FaRupeeSign/><span class="tag is-info is-light">Minimum order Rs.{minOrderAmount}</span></p>
     <p class="flex"><FaWallet /><span class="tag is-success is-light">   {paymentString}</span></p>


      </div>
      <CardActions>
        <Link
          to={{
            pathname: `order/${restUrl}`,
            state: {
              restId: _id,
            },
          }}
        >
          <span class="py-2">
        <button class="w-full h-8 px-6 text-indigo-100 transition-colors duration-150 bg-black rounded-lg text-sm focus:shadow-outline hover:bg-indigo-800">Order Now</button>
      
        
        </span>
        </Link>
      </CardActions>
  </div>
  <div class="px-6 pt-4 pb-2">
   
  </div>
</div>
</div>


<div class="lg:hidden lg:block">
<div class="px-8 ">
<div class="max-w-sm rounded-lg overflow-hidden  shadow-indigo-500/50 shadow-xl">
  <SwipeableImages images={imageUrl} type="home" />
  <div class="px-8 bg-indigo-0 rounded-lg py-4 ">
  <p class="flex text-lg font-semibold text-slate-900 pb-4">
   <FaStore/> <span class="px-2 ">{name} </span>
      </p>
   
      <div class="">
    <p class="flex"><FaTags/>
      <span class="tag is-primary is-light">  
      <span class="py-2">{tags}</span></span></p>

     <p class="flex"> <FaRupeeSign/><span class="tag is-info is-light">Minimum order Rs.{minOrderAmount}</span></p>
     <p class="flex"><FaWallet /><span class="tag is-success is-light">   {paymentString}</span></p>


      </div>
    
</div>
<CardActions>
        <Link
          to={{
            pathname: `order/${restUrl}`,
            state: {
              restId: _id,
            },
          }}
        >
          <span class="py-4 px-16">
        <button class="w-full h-10 text-indigo-100 transition-colors duration-150 bg-black rounded-lg text-sm focus:shadow-outline hover:bg-indigo-800">Order Now</button>
        </span>
        </Link>
      </CardActions>
<div class="px-6 pt-4 pb-2">
</div>
</div>
</div>
</div>
  </>
  );
}
