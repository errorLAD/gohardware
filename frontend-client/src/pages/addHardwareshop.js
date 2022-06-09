import React, { useState } from "react";
import { useHistory } from "react-router";
import { useDispatch, useSelector } from "react-redux";

//material-ui
import makeStyles from "@material-ui/core/styles/makeStyles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import CircularProgress from "@material-ui/core/CircularProgress";

//icon 
import { FaCheck } from "react-icons/fa";
import { FaBullhorn} from "react-icons/fa";

//custom-hook
import useForm from "../hooks/forms";

import { signupSeller } from "../redux/actions/authActions";

const useStyles = makeStyles((theme) => ({
  ...theme.spreadThis,
  root: {
    flexGrow: 1,
    marginTop: 40,
  },
  paper: {
    padding: theme.spacing(2),
  },
  address: {
    "& > *": {
      margin: theme.spacing(4),
      width: "25ch",
    },
  },
}));

export default function  Addhardwareshop() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const [images, setImages] = useState({});
  let imageError;

  const { loading, serverError, errorsSeller } = useSelector(
    (state) => state.UI
  );

  const { message, errors } = errorsSeller || {};

  if (message) {
    if (message.includes("Upload an image")) imageError = message;
  }

  const handleFileSelect = (event) => {
    setImages(event.target.files);
  };

  //error variables
  let emailError = null;
  let passwordError = null;
  let confirmPasswordError = null;
  let streetError = null;
  let aptError = null;
  let localityError = null;
  let zipError = null;
  let phoneNoError = null;
  let nameError = null;
  let tagsError = null;
  let costForOneError = null;
  let minOrderError = null;
  let paymentError = null;

  if (errors) {
    for (let error of errors) {
      if (error.msg.includes("valid email")) emailError = error.msg;
      if (error.msg.includes("Email address already")) emailError = error.msg;
      if (error.msg.includes("least 6 characters long"))
        passwordError = error.msg;
      if (error.msg.includes("Passwords have to"))
        confirmPasswordError = error.msg;
      if (error.msg.includes("10 digit phone")) phoneNoError = error.msg;
      if (error.msg.includes("Minimum Order")) minOrderError = error.msg;
      if (error.msg.includes("GSTIN cannot"))
        costForOneError = error.msg;
      if (error.msg.includes("Zipcode cannot")) zipError = error.msg;
      if (error.msg.includes("Locality cannot")) localityError = error.msg;
      if (error.msg.includes("Apartment name cannot")) aptError = error.msg;
      if (error.msg.includes("Street cannot")) streetError = error.msg;
      if (error.msg.includes("Tags cannot")) tagsError = error.msg;
      if (error.msg.includes("Payment cannot be")) paymentError = error.msg;
      if (error.msg.includes("Restaurant Name")) nameError = error.msg;
    }
  }

  const signupSellerHandle = (props) => {
    const formData = new FormData();
    for (let i = 0; i < images.length; i++) {
      formData.append("images", images[i]);
    }
    formData.append("name", inputs.name);
    formData.append("email", inputs.email);
    formData.append("tags", inputs.tags);
    formData.append("costForOne", inputs.costForOne);
    formData.append("minOrderAmount", inputs.minOrderAmount);
    formData.append("street", inputs.street);
    formData.append("aptName", inputs.aptName);
    formData.append("locality", inputs.locality);
    formData.append("zip", inputs.zip);
    formData.append("phoneNo", inputs.phoneNo);
    formData.append("password", inputs.password);
    formData.append("confirmPassword", inputs.confirmPassword);
    formData.append("payment", inputs.payment);
    formData.append("role", "ROLE_SELLER");
    dispatch(signupSeller(formData, history));
  };

  const { inputs, handleInputChange, handleSubmit } = useForm(
    {
      name: "",
      email: "",
      tags: "",
      costForOne: "",
      minOrderAmount: "",
      street: "",
      aptName: "",
      locality: "",
      zip: "",
      phoneNo: "",
      payment: "",
      password: "",
      confirmPassword: "",
    },
    signupSellerHandle
  );

  return (<>
    <div class="hidden md:block">
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={1} />
        <Grid item xs={7}>
          <Paper className={classes.paper} elevation={2}>
            <Grid container>
              <Grid item sm>
              <div class="lg:text-center">
                 <p class="mt-2 py-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                    Sell In-Demand On gohardware
                 </p>
                  <p class="max-w-2xl  text-gray-500 lg:mx-auto">
                    sell Your Products to crores of Customers across india 
                  </p>
                 </div>
                 <img class="block mx-auto h-10 w-40 rounded-full sm:mx-0 sm:shrink-0" src="https://imgur.com/ux9PKcU.png" alt="Woman's Face"/>
              
                  
                <p class="flex text-sm is-info is-light justify-center ">
                <span class="bg-red">
                  <FaCheck />
                </span>
                <span class="px-2 tx-sm">
                <small>1.Tell Us About Your Shop</small></span> 
              <span class="bg-red">
                  <FaCheck />
                </span>
              <span class="px-2">
            <small> 2. Verify your Email.</small></span>


              <span class="bg-red">
                  <FaCheck />
                </span>
              <span class="px-2">
               <small>3. Access Shop Dashboard and go live.</small></span>
               
              </p>
                 <span class="justify-start  text-indigo-800 flex text-lg">
                  <FaBullhorn /> <span class="py-4 px-2"></span> Get Started
                </span>
                 
                
      

                <form noValidate onSubmit={handleSubmit}>
                  <TextField
                    id="restName"
                    name="name"
                    label="Shop Name"
                    className={classes.textField}
                    placeholder="Your Shop name"
                    onChange={handleInputChange}
                    value={inputs.name}
                    helperText={nameError}
                    error={nameError ? true : false}
                    fullWidth
                    required
                    variant="outlined"
                  />
                  <TextField
                    id="email"
                    name="email"
                    label="Business Email"
                    placeholder="Your business Email"
                    className={classes.textField}
                    onChange={handleInputChange}
                    value={inputs.email}
                    helperText={emailError}
                    error={emailError ? true : false}
                    fullWidth
                    required
                    variant="outlined"
                  />
                  <TextField
                    id="tags"
                    name="tags"
                    label="Tags"
                    placeholder="Building Material, Hardware Shop, Other"
                    className={classes.textField}
                    onChange={handleInputChange}
                    value={inputs.tags}
                    helperText={tagsError}
                    error={tagsError ? true : false}
                    fullWidth
                    required
                    variant="outlined"
                  />
                  <TextField
                    id="costForOne"
                    name="costForOne"
                    label="GST Number"
                    placeholder="GSIT Number"
                    className={classes.textField}
                    onChange={handleInputChange}
                    value={inputs.costForOne}
                    helperText={costForOneError}
                    error={costForOneError ? true : false}
                    type="number"
                    fullWidth
                    required
                    variant="outlined"
                  />
                  <TextField
                    id="minOrderAmount"
                    name="minOrderAmount"
                    label="Min Order Amount"
                    placeholder="Minimum amount to place order"
                    className={classes.textField}
                    onChange={handleInputChange}
                    value={inputs.minOrderAmount}
                    helperText={minOrderError}
                    error={minOrderError ? true : false}
                    type="number"
                    fullWidth
                    required
                    variant="outlined"
                  />
                  <Typography
                    variant="body2"
                    component="p"
                    style={{ margin: "10px 10px 2px 10px" }}
                  >
                    Address:
                  </Typography>
                  <div className={classes.address}>
                    <TextField
                      id="aptName"
                      name="aptName"
                      label="Floor/Apartment Name"
                      className={classes.textField}
                      onChange={handleInputChange}
                      value={inputs.aptName}
                      helperText={aptError}
                      error={aptError ? true : false}
                      fullWidth
                      required
                      variant="outlined"
                    />
                    <TextField
                      id="locality"
                      name="locality"
                      label="Locality"
                      className={classes.textField}
                      onChange={handleInputChange}
                      value={inputs.locality}
                      helperText={localityError}
                      error={localityError ? true : false}
                      fullWidth
                      required
                      variant="outlined"
                    />
                    <TextField
                      id="street"
                      name="street"
                      label="Street"
                      className={classes.textField}
                      onChange={handleInputChange}
                      value={inputs.street}
                      helperText={streetError}
                      error={streetError ? true : false}
                      fullWidth
                      required
                      variant="outlined"
                    />
                    <TextField
                      id="zipCode"
                      name="zip"
                      label="Zip Code"
                      className={classes.textField}
                      onChange={handleInputChange}
                      value={inputs.zip}
                      helperText={zipError}
                      error={zipError ? true : false}
                      type="number"
                      fullWidth
                      required
                      variant="outlined"
                    />
                    <TextField
                      id="phoneNo"
                      name="phoneNo"
                      label="Contact Number"
                      className={classes.textField}
                      type="number"
                      onChange={handleInputChange}
                      value={inputs.phoneNo}
                      helperText={phoneNoError}
                      error={phoneNoError ? true : false}
                      fullWidth
                      required
                      variant="outlined"
                    />
                  </div>
                  <TextField
                    id="payment"
                    name="payment"
                    label="Payment Mode"
                    placeholder="Cash, UPI"
                    className={classes.textField}
                    onChange={handleInputChange}
                    value={inputs.payment}
                    helperText={paymentError}
                    error={paymentError ? true : false}
                    fullWidth
                    required
                    variant="outlined"
                  />
                  <Typography
                    variant="body2"
                    component="p"
                    style={{ margin: "10px 10px 2px 10px" }}
                  >
                    Upload Images:
                  </Typography>
                  <input
                    accept="image/*"
                    className={classes.uploadImages}
                    // style={{ display: "none" }}
                    id="raised-button-file"
                    multiple
                    type="file"
                    onChange={handleFileSelect}
                  />
                  {imageError && (
                    <Typography
                      variant="body2"
                      component="p"
                      style={{ margin: "4px 10px 2px 10px", color: "#f44336" }}
                    >
                      Upload an Image as well
                    </Typography>
                  )}
                  <TextField
                    id="password"
                    name="password"
                    type="password"
                    label="Password"
                    className={classes.textField}
                    onChange={handleInputChange}
                    value={inputs.password}
                    helperText={passwordError}
                    error={passwordError ? true : false}
                    fullWidth
                    required
                    variant="outlined"
                  />
                  <TextField
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    label="Confirm Password"
                    className={classes.textField}
                    onChange={handleInputChange}
                    value={inputs.confirmPassword}
                    helperText={
                      passwordError ? passwordError : confirmPasswordError
                    }
                    error={
                      passwordError ? true : confirmPasswordError ? true : false
                    }
                    fullWidth
                    required
                    variant="outlined"
                  />

                  {serverError && (
                    <Typography variant="body2" className={classes.customError}>
                      {"server error, please try again"}
                    </Typography>
                  )}

                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    className={classes.button}
                    fullWidth
                    disabled={loading}
                    fullWidth
                  >
                    Submit
                    {loading && (
                      <CircularProgress
                        size={30}
                        className={classes.progress}
                      />
                    )}
                  </Button>
                  <br />
                  <small
                    className={classes.small}
                    style={{ marginLeft: "260px" }}
                  >
                    Partner with goHardware and scale your business
                  </small>
                </form>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={3} style={{ marginLeft: "40px" }}>
          <Paper
            className={classes.paper}
            style={{ backgroundColor: "white" }}
            elevation={2}
          >
               <img class="h-50 py-8" src="https://imgur.com/Lu6cOTY.pngs" alt="ChitChat Logo"/>

                 <div class="lg:text-center">
                 <p class="mt-2 py-2 text-xl leading-8 font-bold tracking-tight text-gray-900 sm:text-xl">
                    WHY SELL ONLINE
                    <img class="block mx-auto h-5 w-40 rounded-full sm:mx-0 sm:shrink-0" src="https://imgur.com/ux9PKcU.png" alt="Woman's Face"/>
                 </p>
                 </div>
    <div class="rounded-xl shadow-lg">
                 <div class="px-2 py-2 max-w-sm mx-auto bg-white  flex ">
                <img class="block mx-auto h-12 rounded-full" src="https://imgur.com/ug6QNgu.png" alt="Woman's Face"/>
                <div class=" ">
              <div class="px-2">
               <p class=" text-gray-900 ">
               Growth in the online retail market
               </p>
               <p class=" text-gray-600"> <small>india's retail industry is projected to grow at a slower pace of 9% over 2019-2030</small></p>
                </div> </div>
</div>

<div class=" px-4 py-2 max-w-sm mx-auto bg-white  flex ">
                <img class="block mx-auto h-12 rounded-full" src="https://imgur.com/urPMCqR.png" alt="Woman's Face"/>
                <div class=" ">
              <div class="px-2">
               <p class=" text-gray-900 ">
               Earn Big
      </p>
      <p class=" text-gray-600"> <small>Our payments process is the fastest in the industry - get your payments in as little as 7 days of sales</small></p>
    </div> </div>
</div>

<div class="px-2 py-2  max-w-sm mx-auto bg-white  flex ">
                <img class="block mx-auto h-12 rounded-full" src="https://imgur.com/OJfgZoT.png" alt="Woman's Face"/>
                <div class=" ">
              <div class="px-2">
               <p class=" text-gray-900 ">
               Get orders across India
      </p>
      <p class=" text-gray-600"> <small> E-commerce has transformed the way business is done in India. </small></p>
    </div> </div>
</div>
</div>



<div class="py-4 lg:text-center">
                 <p class="mt-2 py-2 text-xl leading-8 font-bold tracking-tight text-gray-900 sm:text-xl">
                    WHY GOHARDWARE.IN
                    <img class="block mx-auto h-5 w-40 rounded-full sm:mx-0 sm:shrink-0" src="https://imgur.com/ux9PKcU.png" alt="Woman's Face"/>
                 </p>
                 </div>
    <div class="rounded-xl shadow-lg">
                 <div class="px-2 py-2 max-w-sm mx-auto bg-white  flex ">
                <img class="block mx-auto h-12 rounded-full" src="https://imgur.com/4wflIfx.png" alt="Woman's Face"/>
                <div class=" ">
              <div class="px-2">
               <p class=" text-gray-900 ">
               Growth 
               </p>
               <p class=" text-gray-600"> <small>
               wide range of customer base, With the increasing demand for online shopping, businesses are moving from a brick-and-mortar store to an electronic one.
                </small></p>
                </div> </div>
</div>

<div class=" px-4 py-2 max-w-sm mx-auto bg-white  flex ">
                <img class="block mx-auto h-12 rounded-full" src="https://imgur.com/pMEWbCL.png" alt="Woman's Face"/>
                <div class=" ">
              <div class="px-2">
               <p class=" text-gray-900 ">
               Ease
      </p>
      <p class=" text-gray-600"> <small>You Just need 1 product and 2 documents to start selling on gohardware</small></p>
    </div> </div>
</div>

<div class="px-2 py-2  max-w-sm mx-auto bg-white  flex ">
                <img class="block mx-auto h-12 rounded-full" src="https://imgur.com/Nub4QGy.png" alt="Woman's Face"/>
                <div class=" ">
              <div class="px-2">
               <p class=" text-gray-900 ">
                   Transparency
      </p>
      <p class=" text-gray-600"> <small> Equal Opportunities for all the sellers to grow </small></p>
    </div> </div>
</div>
</div>
          </Paper>
        </Grid>
        <Grid item xs={1} />
      </Grid>
    </div>
    </div>
    

    <div class="lg:hidden lg:block">
    <div class="px-8">
    <div class="text-center">
                 <p class="mt-2 py-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                    Sell In-Demand On gohardware
                 </p>
                  <p class="max-w-2xl  text-gray-500 lg:mx-auto">
                    sell Your Products to crores of Customers across india 
                  </p>
    </div>
                 <img class="block mx-auto h-10 w-40 rounded-full sm:mx-0 sm:shrink-0" src="https://imgur.com/ux9PKcU.png" alt="Woman's Face"/>
              
                 <p class="flex text-sm is-info is-light justify-center ">
                <span class="bg-red">
                  <FaCheck />
                </span>
                <span class="px-2 tx-sm">
                <small>1.Tell Us About Your Shop</small></span> 
              <span class="bg-red">
                  <FaCheck />
                </span>
              <span class="px-2">
            <small> 2. Verify your Email.</small></span>


              <span class="bg-red">
                  <FaCheck />
                </span>
              <span class="px-2">
               <small>3. Access Shop Dashboard and go live.</small></span>
               
              </p><br/>
                 <span class="justify-start  text-indigo-800 flex text-lg">
                  <FaBullhorn /> <span class="py-4 px-2"></span> Get Started
     B          </span>
                  <form noValidate onSubmit={handleSubmit}>
                  <TextField
                    id="restName"
                    name="name"
                    label="Shop Name"
                    className={classes.textField}
                    placeholder="Your Shop name"
                    onChange={handleInputChange}
                    value={inputs.name}
                    helperText={nameError}
                    error={nameError ? true : false}
                    fullWidth
                    required
                    variant="outlined"
                  />
                  <TextField
                    id="email"
                    name="email"
                    label="Business Email"
                    placeholder="Your business Email"
                    className={classes.textField}
                    onChange={handleInputChange}
                    value={inputs.email}
                    helperText={emailError}
                    error={emailError ? true : false}
                    fullWidth
                    required
                    variant="outlined"
                  />
                  <TextField
                    id="tags"
                    name="tags"
                    label="Tags"
                    placeholder="Building Material, Hardware Shop, Other"
                    className={classes.textField}
                    onChange={handleInputChange}
                    value={inputs.tags}
                    helperText={tagsError}
                    error={tagsError ? true : false}
                    fullWidth
                    required
                    variant="outlined"
                  />
                  <TextField
                    id="costForOne"
                    name="costForOne"
                    label="GST Number"
                    placeholder="GSIT Number"
                    className={classes.textField}
                    onChange={handleInputChange}
                    value={inputs.costForOne}
                    helperText={costForOneError}
                    error={costForOneError ? true : false}
                    type="number"
                    fullWidth
                    required
                    variant="outlined"
                  />
                  <TextField
                    id="minOrderAmount"
                    name="minOrderAmount"
                    label="Min Order Amount"
                    placeholder="Minimum amount to place order"
                    className={classes.textField}
                    onChange={handleInputChange}
                    value={inputs.minOrderAmount}
                    helperText={minOrderError}
                    error={minOrderError ? true : false}
                    type="number"
                    fullWidth
                    required
                    variant="outlined"
                  />
                  <Typography
                    variant="body2"
                    component="p"
                    style={{ margin: "10px 10px 2px 10px" }}
                  >
                    Address:
                  </Typography>
                  <div className={classes.address}>
                    <TextField
                      id="aptName"
                      name="aptName"
                      label="Floor/Apartment Name"
                      className={classes.textField}
                      onChange={handleInputChange}
                      value={inputs.aptName}
                      helperText={aptError}
                      error={aptError ? true : false}
                      fullWidth
                      required
                      variant="outlined"
                    />
                    <TextField
                      id="locality"
                      name="locality"
                      label="Locality"
                      className={classes.textField}
                      onChange={handleInputChange}
                      value={inputs.locality}
                      helperText={localityError}
                      error={localityError ? true : false}
                      fullWidth
                      required
                      variant="outlined"
                    />
                    <TextField
                      id="street"
                      name="street"
                      label="Street"
                      className={classes.textField}
                      onChange={handleInputChange}
                      value={inputs.street}
                      helperText={streetError}
                      error={streetError ? true : false}
                      fullWidth
                      required
                      variant="outlined"
                    />
                    <TextField
                      id="zipCode"
                      name="zip"
                      label="Zip Code"
                      className={classes.textField}
                      onChange={handleInputChange}
                      value={inputs.zip}
                      helperText={zipError}
                      error={zipError ? true : false}
                      type="number"
                      fullWidth
                      required
                      variant="outlined"
                    />
                    <TextField
                      id="phoneNo"
                      name="phoneNo"
                      label="Contact Number"
                      className={classes.textField}
                      type="number"
                      onChange={handleInputChange}
                      value={inputs.phoneNo}
                      helperText={phoneNoError}
                      error={phoneNoError ? true : false}
                      fullWidth
                      required
                      variant="outlined"
                    />
                  </div>
                  <TextField
                    id="payment"
                    name="payment"
                    label="Payment Mode"
                    placeholder="Cash, UPI"
                    className={classes.textField}
                    onChange={handleInputChange}
                    value={inputs.payment}
                    helperText={paymentError}
                    error={paymentError ? true : false}
                    fullWidth
                    required
                    variant="outlined"
                  />
                  <Typography
                    variant="body2"
                    component="p"
                    style={{ margin: "10px 10px 2px 10px" }}
                  >
                    Upload Images:
                  </Typography>
                  <input
                    accept="image/*"
                    className={classes.uploadImages}
                    // style={{ display: "none" }}
                    id="raised-button-file"
                    multiple
                    type="file"
                    onChange={handleFileSelect}
                  />
                  {imageError && (
                    <Typography
                      variant="body2"
                      component="p"
                      style={{ margin: "4px 10px 2px 10px", color: "#f44336" }}
                    >
                      Upload an Image as well
                    </Typography>
                  )}
                  <TextField
                    id="password"
                    name="password"
                    type="password"
                    label="Password"
                    className={classes.textField}
                    onChange={handleInputChange}
                    value={inputs.password}
                    helperText={passwordError}
                    error={passwordError ? true : false}
                    fullWidth
                    required
                    variant="outlined"
                  />
                  <TextField
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    label="Confirm Password"
                    className={classes.textField}
                    onChange={handleInputChange}
                    value={inputs.confirmPassword}
                    helperText={
                      passwordError ? passwordError : confirmPasswordError
                    }
                    error={
                      passwordError ? true : confirmPasswordError ? true : false
                    }
                    fullWidth
                    required
                    variant="outlined"
                  />

                  {serverError && (
                    <Typography variant="body2" className={classes.customError}>
                      {"server error, please try again"}
                    </Typography>
                  )}

                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    className={classes.button}
                    fullWidth
                    disabled={loading}
                    fullWidth
                  >
                    Submit
                    {loading && (
                      <CircularProgress
                        size={30}
                        className={classes.progress}
                      />
                    )}
                  </Button>
                  <br />
                  <small
                    className={classes.small}
                    style={{ marginLeft: "260px" }}
                  >
                    Partner with goHardware and scale your business
                  </small>
                </form>

<img class="h-50 py-8" src="https://imgur.com/Lu6cOTY.pngs" alt="ChitChat Logo"/>

                 <div class="lg:text-center">
                 <p class="mt-2 py-2 text-xl leading-8 font-bold tracking-tight text-gray-900 sm:text-xl">
                    WHY SELL ONLINE
                    <img class="block mx-auto h-5 w-40 rounded-full sm:mx-0 sm:shrink-0" src="https://imgur.com/ux9PKcU.png" alt="Woman's Face"/>
                 </p>
                 </div>
    <div class="rounded-xl shadow-lg">
                 <div class="px-2 py-2 max-w-sm mx-auto bg-white  flex ">
                <img class="block mx-auto h-12 rounded-full" src="https://imgur.com/ug6QNgu.png" alt="Woman's Face"/>
                <div class=" ">
              <div class="px-2">
               <p class=" text-gray-900 ">
               Growth in the online retail market
               </p>
               <p class=" text-gray-600"> <small>india's retail industry is projected to grow at a slower pace of 9% over 2019-2030</small></p>
                </div> </div>
</div>

<div class=" px-4 py-2 max-w-sm mx-auto bg-white  flex ">
                <img class="block mx-auto h-12 rounded-full" src="https://imgur.com/urPMCqR.png" alt="Woman's Face"/>
                <div class=" ">
              <div class="px-2">
               <p class=" text-gray-900 ">
               Earn Big
      </p>
      <p class=" text-gray-600"> <small>Our payments process is the fastest in the industry - get your payments in as little as 7 days of sales</small></p>
    </div> </div>
</div>

<div class="px-2 py-2  max-w-sm mx-auto bg-white  flex ">
                <img class="block mx-auto h-12 rounded-full" src="https://imgur.com/OJfgZoT.png" alt="Woman's Face"/>
                <div class=" ">
              <div class="px-2">
               <p class=" text-gray-900 ">
               Get orders across India
      </p>
      <p class=" text-gray-600"> <small> E-commerce has transformed the way business is done in India. </small></p>
    </div> </div>
</div>
</div>



<div class="py-4 lg:text-center">
                 <p class="mt-2 py-2 text-xl leading-8 font-bold tracking-tight text-gray-900 sm:text-xl">
                    WHY GOHARDWARE.IN
                    <img class="block mx-auto h-5 w-40 rounded-full sm:mx-0 sm:shrink-0" src="https://imgur.com/ux9PKcU.png" alt="Woman's Face"/>
                 </p>
                 </div>
    <div class="rounded-xl shadow-lg">
                 <div class="px-2 py-2 max-w-sm mx-auto bg-white  flex ">
                <img class="block mx-auto h-12 rounded-full" src="https://imgur.com/4wflIfx.png" alt="Woman's Face"/>
                <div class=" ">
              <div class="px-2">
               <p class=" text-gray-900 ">
               Growth 
               </p>
               <p class=" text-gray-600"> <small>
               wide range of customer base, With the increasing demand for online shopping, businesses are moving from a brick-and-mortar store to an electronic one.
                </small></p>
                </div> </div>
</div>

<div class=" px-4 py-2 max-w-sm mx-auto bg-white  flex ">
                <img class="block mx-auto h-12 rounded-full" src="https://imgur.com/pMEWbCL.png" alt="Woman's Face"/>
                <div class=" ">
              <div class="px-2">
               <p class=" text-gray-900 ">
               Ease
      </p>
      <p class=" text-gray-600"> <small>You Just need 1 product and 2 documents to start selling on gohardware</small></p>
    </div> </div>
</div>

<div class="px-2 py-2  max-w-sm mx-auto bg-white  flex ">
                <img class="block mx-auto h-12 rounded-full" src="https://imgur.com/Nub4QGy.png" alt="Woman's Face"/>
                <div class=" ">
              <div class="px-2">
               <p class=" text-gray-900 ">
                   Transparency
      </p>
      <p class=" text-gray-600"> <small> Equal Opportunities for all the sellers to grow </small></p>
    </div> </div>
</div>
</div>
   
        <Grid item xs={1} />

    </div>
  
  </div>
    </>
  );
}
