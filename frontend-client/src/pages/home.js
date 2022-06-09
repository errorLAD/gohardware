import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

//material-ui
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

import HomeStart from "../components/HomeStart";
import SearchBar from "../components/SearchBar";
import Spinner from "../util/spinner/spinner";
import HardwareshopContent from "../components/HardwareshopContent";
import CategoriesItem from "../components/CategoriesItem";
import BrandItem  from "../components/BrandItem";
// import store from "../redux/store";
// import { fetchRestaurantsByAddress } from "../redux/actions/dataActions";

const useStyles = makeStyles(() => ({
  center: {
    textAlign: "center",
  },

}));

const Home = () => {
  const classes = useStyles();
  const { loading } = useSelector((state) => state.data);
  const {
    account: { role },
    authenticated,
  } = useSelector((state) => state.auth);
  const [locationStatus, setLocationStatus] = useState(
    localStorage.getItem("location") ? true : false
  );

  // let latlng = localStorage.getItem("latlng");

  // if (latlng) {
  //   const latlngArray = latlng.split(", ");
  //   dispatch(fetchRestaurantsByAddress(latlngArray[0], latlngArray[1]));
  // }

  let hardwareshopMarkup = loading ? <Spinner /> : <HardwareshopContent />;
  return (
    <> <div class="hidden md:block">
      {authenticated && role === "ROLE_SELLER" ? (
        <Redirect to="/seller/dashboard" />
      ) : (
        <>
          
          <HomeStart />

          <Grid container direction="column">
             
     
          <div class="py-1 px-38">
                <div class="columns is-mobile">
                <div class="column is-3 is-offset-3">
          <img class="h-7 " src="https://imgur.com/NbXYf2C.png"/>
                </div>
                </div>
                </div>


            <div class="px-1">
            <Grid item className={classes.SearchBar}>
          
            <span class= "py-1 px-2"> 
         
              <SearchBar page="home" action={setLocationStatus} />
            </span>
            </Grid>
            </div>
          
            <Grid item container>
              <Grid item xs={false} sm={1} />
              <Grid item xs={12} sm={10}>
                {locationStatus ? (
                  hardwareshopMarkup
                ) : (
                  <Typography variant="body1" className={classes.center} noWrap>
                    Enter your location to view nearby Hardware | Building Material shop
                  </Typography>
                )}
              </Grid>
              <Grid item xs={false} sm={1} />
            </Grid>
          
          </Grid>
      
         <CategoriesItem />
          <BrandItem />
       
        </>
      )}
 
    </div>
    
    <div class="lg:hidden lg:block">

    <>
      {authenticated && role === "ROLE_SELLER" ? (
        <Redirect to="/seller/dashboard" />
      ) : (
        <>
          <HomeStart />
                    
     
       



          <Grid container direction="column">
          
            <Grid item className={classes.SearchBar}>
                <span class="w3-hide-large">
                  <img class="h-9 w-auto sm:h-60 px-10" src="https://imgur.com/NbXYf2C.png"/> 
                  </span>

                <div class="py-2">
                <div class="columns is-mobile">
                <div class="column is-10 is-offset-1"> <SearchBar page="home"  action={setLocationStatus} /></div>
                </div>
                </div>
            </Grid>
         
            <Grid item container>
              <Grid item xs={false} sm={1} />
              <Grid item xs={12} sm={10}>

              <div class="py-2">
                <div class="columns is-mobile">
                <div class="column is-10 is-offset-1">

                {locationStatus ? (
                  hardwareshopMarkup
                ) : (
                  <Typography variant="body1" className={classes.center} noWrap>
                   <small>  Enter your location to view nearby Hardware | Building Material shop</small>
                  </Typography>
                )}

             </div>
                </div>
                </div>
              </Grid>
              <Grid item xs={false} sm={1} />
            </Grid>
         
          </Grid>
         <CategoriesItem />
          <BrandItem />
        </>
      )}
    </>
    </div>
    
       </>
  );
};

export default Home;
