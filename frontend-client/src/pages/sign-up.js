import React from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

//material-ui
import makeStyles from "@material-ui/core/styles/makeStyles";
//import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";

//custom-hook
import useForm from "../hooks/forms";

import { signupUser } from "../redux/actions/authActions";

const useStyles = makeStyles((theme) => ({
  ...theme.spreadThis,
  title: {
    margin: "48px 0px 10px 0px",
  },
}));

export default function Register() {
  const classes = useStyles();

  const { loading, serverError, errors } = useSelector((state) => state.UI);
  const dispatch = useDispatch();
  const history = useHistory();

  const signupHandle = (props) => {
    const newUserData = {
      email: inputs.email,
      firstName: inputs.firstName,
      lastName: inputs.lastName,
      role: "ROLE_USER",
      password: inputs.password,
      confirmPassword: inputs.confirmPassword,
    };
    dispatch(signupUser(newUserData, history));
  };

  const { inputs, handleInputChange, handleSubmit } = useForm(
    {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    signupHandle
  );

  // console.log(errors);
  let emailError = null;
  let passwordError = null;
  let confirmPasswordError = null;
  let firstNameEmptyError = null;
  let lastNameEmptyError = null;

  if (errors) {
    if (typeof errors !== "string") {
      for (let i = 0; i < errors.length; i++) {
        if (errors[i].msg.includes("First Name"))
          firstNameEmptyError = errors[i].msg;
        if (errors[i].msg.includes("Last Name"))
          lastNameEmptyError = errors[i].msg;
        if (errors[i].msg.includes("valid email")) emailError = errors[i].msg;
        if (errors[i].msg.includes("Email address already"))
          emailError = errors[i].msg;
        if (errors[i].msg.includes("least 6 characters long"))
          passwordError = errors[i].msg;
        if (errors[i].msg.includes("Passwords have to"))
          confirmPasswordError = errors[i].msg;
      }
    }
  }

  return (
    <>
     

     <div class="hidden md:block">
     <div class="py-2 ">
     <div class="max-w-md mx-auto  rounded-xl shadow-md overflow-hidden md:max-w-4xl py-8 px-16 bg-indigo-60 ">
     <div class="flex flex-row">
            <div class="grid grid-cols-2 gap-4">
            <div class="...">
            <img class="h-48 w-full object-cover md:h-full md:w-60" src="https://imgur.com/s1aLDs6.png" alt="Man looking at item at a store"/>
            </div>
            <div class="...">
            <div class="px-4 py-5 sm:px-6">
          <h3 class="text-lg leading-6 font-medium text-gray-900">
             Sign-Up To Gohardware
          </h3>
           <p class="mt-1 max-w-2xl text-sm text-gray-500">
           Already have an account ? Login <Link to="/login"     style={{
             
                  color:"blue"
              }} ><b> Here </b></Link>
          </p>

          <div class="mb-4 py-2">
         
          <form noValidate onSubmit={handleSubmit}>
          <TextField
            id="firstName"
            name="firstName"
            label="FirstName"
            variant="outlined"
            onChange={handleInputChange}
            value={inputs.firstName}
            className={classes.textField}
            helperText={firstNameEmptyError}
            error={firstNameEmptyError ? true : false}
            fullWidth
            required
          />
          <TextField
            id="lastName"
            name="lastName"
            label="LastName"
            variant="outlined"
            onChange={handleInputChange}
            value={inputs.lastName}
            className={classes.textField}
            helperText={lastNameEmptyError}
            error={lastNameEmptyError ? true : false}
            fullWidth
            required
          />
          <TextField
            id="email"
            name="email"
            label="Email"
            variant="outlined"
            onChange={handleInputChange}
            value={inputs.email}
            className={classes.textField}
            fullWidth
            helperText={emailError}
            error={emailError ? true : false}
            required
          />
          <TextField
            id="password"
            name="password"
            type="password"
            label="Password"
            variant="outlined"
            onChange={handleInputChange}
            value={inputs.password}
            className={classes.textField}
            helperText={passwordError}
            error={passwordError ? true : false}
            fullWidth
            required
          />
          <TextField
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            label="Confirm Password"
            variant="outlined"
            onChange={handleInputChange}
            value={inputs.confirmPassword}
            className={classes.textField}
            helperText={passwordError ? passwordError : confirmPasswordError}
            error={passwordError ? true : confirmPasswordError ? true : false}
            fullWidth
            required
          />

          {serverError && (
            <Typography variant="body2" className={classes.customError}>
              {"server error, please try again"}
            </Typography>
          )}

          <Button 
            style={{
              backgroundColor: "#000000",
              color:"#FFFFFF"
          }}
            type="submit"
            variant="contained"
            className={classes.button}
            disabled={loading}  
            fullWidth

          >
            Sign-up
            {loading && (
              <CircularProgress size={30} className={classes.progress} />
            )}
          </Button>
   
      </form>
       </div>
       </div>
      </div>
      </div> 
     </div>
     </div>
     </div>
    </div>
 
    <div class="lg:hidden lg:block">
     <div class="py-2 ">
     <div class="max-w-md mx-auto  rounded-xl shadow-md overflow-hidden md:max-w-4xl py-8 px-4 bg-indigo-60 ">
     <div class="px-4 py-5 sm:px-6">
          <h3 class="text-lg leading-6 font-medium text-gray-900">
             Sign-Up To Gohardware
          </h3>
           <p class="mt-1 max-w-2xl text-sm text-gray-500">
           Already have an account ? Login <Link to="/login"     style={{
             
                  color:"blue"
              }} ><b> Here </b></Link>
          </p>

          <div class="mb-4 py-2">
         
          <form noValidate onSubmit={handleSubmit}>
          <TextField
            id="firstName"
            name="firstName"
            label="FirstName"
            variant="outlined"
            onChange={handleInputChange}
            value={inputs.firstName}
            className={classes.textField}
            helperText={firstNameEmptyError}
            error={firstNameEmptyError ? true : false}
            fullWidth
            required
          />
          <TextField
            id="lastName"
            name="lastName"
            label="LastName"
            variant="outlined"
            onChange={handleInputChange}
            value={inputs.lastName}
            className={classes.textField}
            helperText={lastNameEmptyError}
            error={lastNameEmptyError ? true : false}
            fullWidth
            required
          />
          <TextField
            id="email"
            name="email"
            label="Email"
            variant="outlined"
            onChange={handleInputChange}
            value={inputs.email}
            className={classes.textField}
            fullWidth
            helperText={emailError}
            error={emailError ? true : false}
            required
          />
          <TextField
            id="password"
            name="password"
            type="password"
            label="Password"
            variant="outlined"
            onChange={handleInputChange}
            value={inputs.password}
            className={classes.textField}
            helperText={passwordError}
            error={passwordError ? true : false}
            fullWidth
            required
          />
          <TextField
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            label="Confirm Password"
            variant="outlined"
            onChange={handleInputChange}
            value={inputs.confirmPassword}
            className={classes.textField}
            helperText={passwordError ? passwordError : confirmPasswordError}
            error={passwordError ? true : confirmPasswordError ? true : false}
            fullWidth
            required
          />

          {serverError && (
            <Typography variant="body2" className={classes.customError}>
              {"server error, please try again"}
            </Typography>
          )}

          <Button 
            style={{
              backgroundColor: "#000000",
              color:"#FFFFFF"
          }}
            type="submit"
            variant="contained"
            className={classes.button}
            disabled={loading}  
            fullWidth

          >
            Sign-up
            {loading && (
              <CircularProgress size={30} className={classes.progress} />
            )}
          </Button>
   
      </form>
       </div>
       </div>
     </div>
     </div>
    </div>
    </>
  );
}
