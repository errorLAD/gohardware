import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

//material-ui
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { FaFacebookF ,FaInstagram, FaTwitter ,FaLinkedinIn} from "react-icons/fa";
const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: "",
    marginTop: 40,
    height: "42vh",
    textAlign: "center",
  },
  innerCont: {
    margin: "74px 40px 40px 40px",
  },
  resources: {
    margin: "60px 40px 10px 40px",
  },
  buttonStyleOne: {
    color: "white",
    backgroundColor: theme.palette.secondary.main,
    "&:hover": {
      backgroundColor: "#5a5c5a",
    },
  },
  buttonStyleTwo: {
    color: "white",
    backgroundColor: theme.palette.secondary.main,
    marginLeft: 10,
    marginTop: 8,
    "&:hover": {
      backgroundColor: "#5a5c5a",
    },
  },
}));

export default function Footer() {
  const { authenticated } = useSelector((state) => state.auth);
  const classes = useStyles();
  return (
    <>
       <div class="hidden md:block">  
    <div class="bg-gray-900 max-w-7xl py-8">
     <div class=" max-w-6xl mx-auto">
       <div class="py-8">
     <div class="items-center  overflow-visible ">
     {authenticated ? (
          <Grid container direction="row">
            <Grid item xs={12} sm={6}>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="body1" component="p">
              </Typography>
            </Grid>
          </Grid>
        ) : (
          <>
            <Typography variant="h6" component="p">
             <p class="text-white"> <small>GOHARDWARE FOR BUSINESS</small> </p>
            </Typography>
         
            <br />
            <Link to="/addHardwareshop">
              <Button className={classes.buttonStyleOne}>Get Started</Button>
            </Link>
          </>
        )}

     </div>
     </div>
     <div class="py-8">
     <div class="grid grid-cols-4 gap-4 text-sm">
         <div>
           <p class="py-4">ABOUT</p>
            <p class="text-white"></p>
            <Link to="/aboutus">
            <p class="text-white">About Us & Contact Us</p>
            </Link>
            <p class="text-white">Careers</p>
       
         </div>


         <div>
           <p class="py-4">POLICY & HELP</p>
           <Link to="/terms">
           
            <p class="text-white">Terms of User</p></Link>
        
         </div> 


          <div>
           <p class="py-4">SOCIAL</p>
            <p class="text-white">Facebook</p>
            <p class="text-white">Twitter</p>
            <p class="text-white">Youtube</p>
            <p class="text-white">Instagram</p>
         </div>

         <div>
           <p class="py-4">Office Adress</p>
            <p class="text-white">
               goHardware HQ  </p>
               <p class="text-white">
                    Kathalbari,</p>
                    <p class="text-white">
                           Darbhanga </p>
                           <p class="text-white">
                               846004 </p>
                               <p class="text-white">
                                   Mail -</p>
                                   <p class="text-white" > Phone No-</p>
    
         </div>
</div>
</div>

   <div class="lg:text-center">

      <p class=" text-white lg:mx-auto py-4">
      ©2022 goHardware.in
      </p>
    </div>
    </div>
  </div>
  </div>


  <div class="lg:hidden lg:block">

  <div class="bg-gray-900 ">
     <div class=" max-w-3xl mx-auto">
       <div class="py-8 px-14">
     <div class="items-center  overflow-visible ">
     {authenticated ? (
          <Grid container direction="row">
            <Grid item xs={12} sm={6}>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="body1" component="p">
              </Typography>
            </Grid>
          </Grid>
        ) : (
          <><span class="">
            <Typography variant="h6" component="p">
             <p class="text-white px-4"> <small>GOHARDWARE FOR BUSINESS</small> </p>
            </Typography>
         
            <br />
            <div class="px-4">
            <Link to="/addHardwareshop">
              <Button  className={classes.buttonStyleOne}>Get Started</Button>
            </Link>
            </div>
            </span>
          </>
        )}

     </div>
     </div>
     <div class="py-12 px-4">
     <div class="grid grid-cols-3 gap-4 text-sm">
         <div>
           <p class="py-4">ABOUT</p>
        
            <Link to="/aboutus">
            <p class="text-white">About Us & Contact Us</p>
            </Link>
            <p class="text-white">Careers</p>
       
         </div>


         <div>
           <p class="py-4">POLICY & HELP</p>
           <Link to="/terms">
         Terms of User</Link>
           
         </div> 


     

         <div>
           <p class="py-4">Office Adress</p>
            <p class="text-white">
               goHardware HQ  </p>
               <p class="text-white">
                    Kathalbari,</p>
                    <p class="text-white">
                           Darbhanga </p>
                           <p class="text-white">
                               846004 </p>
                               <p class="text-white">
                                   Mail -</p>
                                   <p class="text-white" > Phone No-</p>
    
         </div>
</div>
</div>
<div class="text-center">
<p class="text-white py-4 flex">
         <span class="px-2 ">
            <FaFacebookF />
         </span>
         <span class="px-2 ">
           <FaInstagram/>
        </span>
        <span class="px-2 ">
           <FaTwitter />
       </span> 
       <span class="px-2 ">
           <FaLinkedinIn />
       </span> 
      </p>

    </div>
   <div class="text-center">


      <p class=" text-white lg:mx-auto py-4">
      ©2022 goHardware.in
      </p>
    </div>
    </div>
  </div>

  </div>
  </>
  );
}
