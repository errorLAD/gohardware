import React from "react";
import { useSelector } from "react-redux";

//M-UI
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

import HardwareshopCard from "./HardwareshopCard";

const  HardwareshopContent = () => {
  const { hardwareshops } = useSelector((state) => state.data);
  const hardwareshopArray = hardwareshops.hardwareshops;

  const getHardwareshopCard = (hardwareshopObj) => {
    return (
      <Grid item xs={12} sm={3} key={hardwareshopObj._id}>
        <HardwareshopCard {...hardwareshopObj} />
      </Grid>
    );
  };
  return (
    <>
    <div class="hidden md:block">
      <Typography
        gutterBottom
        variant="h6"
        color="textPrimary"
        component="p"
        noWrap
      >
      
      <span class="tag is-light is-medium ">
         Order from your favourite Shop </span>
         <img class="block mx-auto h-5 w-40 rounded-full sm:mx-0 sm:shrink-0" src="https://imgur.com/oyNiuFx.png" alt="Woman's Face"/>
     
      </Typography>
      <br />
      <Grid container spacing={2}>
        {hardwareshopArray ? (
          hardwareshopArray.length > 0 ? (
            hardwareshopArray.map((hardwareshop) => getHardwareshopCard(hardwareshop))
          ) : (
            <p class="px-12">
              <span class="tag tag is-link is-light is-medium">
              No shop currently available in your area, come back Later.
              </span>
            </p>
          )
        ) : (
          <p class="px-12 text-red"><small></small> </p>
        )
        
        
        
        
        }
      </Grid>
    </div>

   <div class="lg:hidden lg:block">
  

   <div class="text-center py-4">
      <h2 class="text-base text-gray-800 font-semibold tracking-wide uppercase ">
        Order from your favourite Shop-
      
      <img class="block mx-auto h-5 w-40 rounded-full sm:mx-0 sm:shrink-0" src="https://imgur.com/oyNiuFx.png" alt="Woman's Face"/>
      </h2>
    </div>
      <br />
      <Grid container spacing={2}>
        {hardwareshopArray ? (
          hardwareshopArray.length > 0 ? (
            hardwareshopArray.map((hardwareshop) => getHardwareshopCard(hardwareshop))
          ) : (
          
            <p class="py-2 px-6">
              No HardWare And Building Material currently available in your area, come back Later.
            </p>
     
          )
        ) : (
          <p class ="px-12"></p>
        )}
      </Grid>

  
   </div>
    </>
  );
};

export default  HardwareshopContent;
