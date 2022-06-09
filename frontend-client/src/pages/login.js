import React from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

//material-ui
import makeStyles from "@material-ui/core/styles/makeStyles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";

import hamBurgerIcon from "../images/hamburger.jpg";

//custom-hook
import useForm from "../hooks/forms";
import { loginAction } from "../redux/actions/authActions";

const useStyles = makeStyles((theme) => ({
  ...theme.spreadThis,
  title: {
    margin: "10px 0px 10px 0px",
  },
  hamBurger: {
    height: 200,
    width: 240,
  },
}));

export default function Login() {
  const classes = useStyles();

  const { loading, serverError, errors, signUpSuccess } = useSelector(
    (state) => state.UI
  );
  const dispatch = useDispatch();
  const history = useHistory();

  const loginHandle = (props) => {
    const userData = {
      email: inputs.email,
      password: inputs.password,
    };
    dispatch(loginAction(userData, history));
  };

  const { inputs, handleInputChange, handleSubmit } = useForm(
    {
      email: "",
      password: "",
    },
    loginHandle
  );

  let incorrectCredentialsError = null;
  let verifyEmailError = null;
  if (errors) {
    if (errors.includes("Invalid email/password"))
      incorrectCredentialsError = errors;
    if (errors.includes("Verify your email")) verifyEmailError = errors;
  }

  return (
    <>
    <div class="hidden md:block">
    <div class="py-2">
     <div class="max-w-md mx-auto  rounded-xl shadow-md overflow-hidden md:max-w-4xl py-8 px-16 bg-indigo-60 ">
     <div class="flex flex-row">
            <div class="grid grid-cols-2 gap-4">
            <div class="...">
            <img class="h-48 w-full object-cover md:h-full md:w-60" src="https://imgur.com/i4LggpS.png" alt="Man looking at item at a store"/>
            </div>
            <div class="...">
            <div class="px-4 py-5 sm:px-6">
          <h3 class="text-xlg leading-6 font-medium text-gray-900">
          <span class="box-decoration-slice bg-gradient-to-r from-indigo-600 to-pink-500 text-white px-4 ...">
  Welcome
</span>   It's good to have you back!
          </h3><br/>
           <p class="mt-1 max-w-2xl text-sm text-gray-500">
             Enter your email an and password
          </p>
          <form noValidate onSubmit={handleSubmit}>
          {signUpSuccess && (
            <Typography variant="body2" className={classes.customSuccess}>
              Account registered successfully, please verify your Email before
              logging-in
            </Typography>
          )}
          <TextField
            id="email"
            name="email"
            label="Email"
            variant="outlined"
            className={classes.textField}
            onChange={handleInputChange}
            value={inputs.email}
            fullWidth
          />
          <TextField
            id="password"
            name="password"
            type="password"
            label="Password"
            variant="outlined"
            className={classes.textField}
            onChange={handleInputChange}
            value={inputs.password}
            fullWidth
          />
             <Button
             style={{
              backgroundColor: "#000000",
              color:"#FFFFFF"
          }}
            type="submit"
            variant="contained"
            color="primary"
            className={classes.button}
            disabled={loading}
            
          >
            Login  
            {loading && (
              <CircularProgress size={30} className={classes.progress} />
            )}
          </Button>
          {serverError && (
            <Typography variant="body2" className={classes.customError}>
              {"server error, please try again"}
            </Typography>
          )}

          {verifyEmailError && (
            <Typography variant="body2" className={classes.customError}>
              {verifyEmailError}
            </Typography>
          )}

          {incorrectCredentialsError && (
            <Typography variant="body2" className={classes.customError}>
              {incorrectCredentialsError}
            </Typography>
          )}


          <br />
          <small className={classes.small}>
            don't have an account ? sign up <Link to="/register">here</Link>
          </small>
        </form>
       </div>
      </div>
      </div> 
     </div>
     </div>
     </div>
    </div>
    
    <div class="lg:hidden lg:block">
    <div class="py-2">
     <div class="max-w-md mx-auto  rounded-xl shadow-md overflow-hidden md:max-w-4xl py-8 px-4 bg-indigo-60 ">
     <div class="...">
     <div class="...">
            <div class="px-4 py-6 sm:px-6">
          <h3 class="text-xlg leading-6 font-medium text-gray-900">
          <span class="box-decoration-slice bg-gradient-to-r from-indigo-600 to-pink-500 text-white px-2 ...">
  Welcome
</span> It's good to have you back!
          </h3>
           <p class="mt-1 max-w-2xl text-sm text-gray-500">
             Enter your email an and password
          </p>
          <form noValidate onSubmit={handleSubmit}>
          {signUpSuccess && (
            <Typography variant="body2" className={classes.customSuccess}>
              Account registered successfully, please verify your Email before
              logging-in
            </Typography>
          )}
          <TextField
            id="email"
            name="email"
            label="Email"
            variant="outlined"
            className={classes.textField}
            onChange={handleInputChange}
            value={inputs.email}
            fullWidth
          />
          <TextField
            id="password"
            name="password"
            type="password"
            label="Password"
            variant="outlined"
            className={classes.textField}
            onChange={handleInputChange}
            value={inputs.password}
            fullWidth
          />
          <Button
             style={{
              backgroundColor: "#000000",
              color:"#FFFFFF"
          }} 
            type="submit"
            variant="contained"
            color="primary"
            className={classes.button}
            disabled={loading}
          
          >
            Login  
            {loading && (
              <CircularProgress size={30} className={classes.progress} />
            )}
          </Button>
          {serverError && (
            <Typography variant="body2" className={classes.customError}>
              {"server error, please try again"}
            </Typography>
          )}

          {verifyEmailError && (
            <Typography variant="body2" className={classes.customError}>
              {verifyEmailError}
            </Typography>
          )}

          {incorrectCredentialsError && (
            <Typography variant="body2" className={classes.customError}>
              {incorrectCredentialsError}
            </Typography>
          )}


          <br />
          <small className={classes.small}>
            don't have an account ? sign up <Link to="/register">here</Link>
          </small>
        </form>
       </div>
      </div>
     </div>
     </div>
    </div>
  </div>
    </>
  );
}
