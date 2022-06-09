import React from "react";
//redux
import { useSelector } from "react-redux";

//material-ui
import makeStyles from "@material-ui/core/styles/makeStyles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

import Spinner from "../util/spinner/spinner";
import SwipeableImages from "./SwipeableImages";


import { FaRupeeSign } from "react-icons/fa";
import { FaTags } from "react-icons/fa";
import { FaMarkdown } from "react-icons/fa";
import { FaEllipsisH } from "react-icons/fa";
import { FaAddressCard} from "react-icons/fa";
import { FaPhoneVolume } from "react-icons/fa";
//import { FaRupeeSign } from "react-icons/fa";
//import { FaRupeeSign } from "react-icons/fa";
const useStyles = makeStyles({
  borderBottom: {
    borderBottom: "2px solid #000",
    position: "absolute",
    top: "25.5%",
    left: "6.5%",
    bottom: 0,
    height: "40%",
    width: "44%",
  },
  borderLeft: {
    borderLeft: "2px solid #000",
    position: "absolute",
    top: "25.5%",
    left: "6.5%",
    bottom: 0,
    height: "40%",
  },
  para: {
    fontSize: "x-large",
    marginLeft: "32%",
  },
});

function Hardwareshop(props) {
  const classes = useStyles();
  const { loading } = useSelector((state) => state.data);
  const {
    name,
    imageUrl,
    tags,
    costForOne,
    minOrderAmount,
    payment,
    address,
  } = props;
  let paymentString;
  let phoneNo;
  let addressString;

  if (address) {
    phoneNo = address.phoneNo;
    addressString = `${address.aptName}, ${address.locality}, ${address.street}`;
  }

  if (payment ? payment.length === 1 : null)
    paymentString = `Accepts ${payment[0].toLowerCase()} payment`;

  if (payment ? payment.length === 2 : null)
    paymentString = `Accepts ${payment[0].toLowerCase()} & ${payment[1].toLowerCase()} payments`;

  return (
    <>
      <div class="hidden md:block">
    <div class="hidden md:block">
      {loading ? (
        <Spinner />
      ) : (
           <>
              <div class="text-gray-100">
              <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-5xl bg-gray-900">
              <div class="grid grid-cols-2 gap-4">
  <div class="...">
  <div class="py-4 px-6">
  <p class="mt-2 text-xl leading-8 font-bold tracking-tight  sm:text-4xl  text-gray-100">
  {name}
      </p>
      <div class="p-4">
      <p class="text-sm flex ">
       <FaTags/> <span class="px-2">{tags}</span>
      </p>
      <p class="text-sm flex ">
      <FaEllipsisH/> <span class="px-2">Costs =  Rs. <span class="font-bold">{costForOne}</span> for one</span>
      </p>
      <p class="text-sm flex">
     <FaMarkdown/> <span class ="px-2">minimum order Rs.{minOrderAmount}</span>
      </p>
      <p class="text-sm flex">
      <FaRupeeSign/> <span class="px-2">{paymentString}</span>
      </p>
      <p class="text-sm flex">
         <FaAddressCard/><span class="px-2">  Address:  {addressString}</span>
      </p>
      <p class="text-sm flex">
      <FaPhoneVolume/> <span class="px-2">Call: +91 {phoneNo}</span>
      </p>
      </div>
    </div>
  </div>
  <div class="py-4">
  <div class="...">

              {imageUrl ? (
                <SwipeableImages images={imageUrl} type="hardwareshop" />
              ) : null}

  </div>
</div>
</div> 
             </div> 
             </div>
           </>
      )}
      </div>

 <div class="lg:hidden lg:block">
      {loading ? (
        <Spinner />
      ) : (
           <>
              <div class="text-gray-100">
              <div class="max-w-md mx-auto  rounded-xl shadow-md overflow-hidden md:max-w-5xl bg-gray-900">
    
  <p class="px-4 mt-2 text-xl leading-8 font-bold tracking-tight  sm:text-4xl text-gray-100 ">
  {name}
      </p>
      <div class="px-4 py-2">
      <p class="text-sm flex ">
       <FaTags/> <span class="px-2">{tags}</span>
      </p>
      <p class="text-sm flex ">
      <FaEllipsisH/> <span class="px-2">Costs =  Rs. <span class="font-bold">{costForOne}</span> for one</span>
      </p>
      <p class="text-sm flex">
     <FaMarkdown/> <span class ="px-2">minimum order Rs.{minOrderAmount}</span>
      </p>
      <p class="text-sm flex">
      <FaRupeeSign/> <span class="px-2">{paymentString}</span>
      </p>
      <p class="text-sm flex">
         <FaAddressCard/><span class="px-2">  Address:  {addressString}</span>
      </p>
      <p class="text-sm flex">
      <FaPhoneVolume/> <span class="px-2">Call: +91 {phoneNo}</span>
      </p>
    </div>
             </div> 
             </div>
           </>
      )}
      </div>
      </div>

     {/* mobile screen */}
     <div class="lg:hidden lg:block">
 
      {loading ? (
        <Spinner />
      ) : (
           <>    
              <div class="text-gray-100 px-4">
              <div class="px-2 max-w-md mx-auto  rounded-xl shadow-md overflow-hidden md:max-w-5xl bg-gray-900">
   <p class="px-2 mt-2 py-2 ">
   {imageUrl ? (
                <SwipeableImages images={imageUrl} type="restaurant" />
              ) : null}
   </p>
  <p class="px-4 mt-2 text-xl leading-8 font-bold tracking-tight  sm:text-4xl text-gray-100 ">
  {name}
      </p>
      <div class="px-4 py-2">
      <p class="text-sm flex ">
       <FaTags/> <span class="px-2">{tags}</span>
      </p>
      <p class="text-sm flex ">
      <FaEllipsisH/> <span class="px-2">Costs =  Rs. <span class="font-bold">{costForOne}</span> for one</span>
      </p>
      <p class="text-sm flex">
     <FaMarkdown/> <span class ="px-2">minimum order Rs.{minOrderAmount}</span>
      </p>
      <p class="text-sm flex">
      <FaRupeeSign/> <span class="px-2">{paymentString}</span>
      </p>
      <p class="text-sm flex">
         <FaAddressCard/><span class="px-2">  Address:  {addressString}</span>
      </p>
      <p class="text-sm flex">
      <FaPhoneVolume/> <span class="px-2">Call: +91 {phoneNo}</span>
      </p>
    </div></div>
             </div> 
            
           </>
          
      )}
      </div>
      
    </>
  );
}

export default React.memo(Hardwareshop);