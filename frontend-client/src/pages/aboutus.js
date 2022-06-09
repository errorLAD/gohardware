import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Redirect } from "react-router-dom";



const Aboutus = () => {
  return( 
   <>
   <div>
   <div className="py-12 bg-white">
      <div className  = "max-w-7xl mx-auto px-4 lg:px-8">
        <div className="">
      
          <p className="mt-2 lg:text-center text-2xl leading-8 font-extrabold tracking-tight text-gray-900s m:text-3xl">
            About Gohardware.in
          </p>
          <p className="mt-6 max-w-5xl text-l text-gray-800 lg:mx-auto">
          Gohardware.in is a Construction Material And Building Material Platfrom that makes getting 
high quality Product from your local Shop.
<p class="py-2"></p>
The Gohardware.in connects customer  with a broad range of local Building material and Hardware Shop ,So you can order from the product list of your local Shop

          </p>

           <p class="py-4 ">
           <img src="https://imgur.com/lg7XDah.png"/>
           </p>
          
          <p class="px-24">
          <img class="h-12 w-auto sm:h-20 px-12" src="https://imgur.com/bemNBMy.png"  alt="Random Name"/>
        <p class="w3-opacity px-6 py-1 text-gray-600">Founder</p>
        <h4>Abhishek kumar Mishra</h4>
        <p class="px-4"><small>ab.mishra@yahoo</small></p>

          </p>
        </div>
      </div>
    </div>
   </div>
   </>
  )


}
export default Aboutus;