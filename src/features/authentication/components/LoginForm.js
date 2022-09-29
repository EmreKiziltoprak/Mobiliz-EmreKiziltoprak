import React, { useEffect, useRef, useState } from "react";
import {
  Grid,
  Paper,
  Avatar,
  TextField,
  Button,
  Typography,
  Link,
  styled,
} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import LoginHook from "../hooks/LoginHook";
import { Navigate } from "react-router-dom";

const avatarStyle = { backgroundColor: "#1bbd7e" };
const btnstyle = { margin: "8px 0" };

const LoginForm = (props) => {

  const [loginUser, { data, isError, error }] = props.login();

  const LoginPaper = styled(Paper)(({ theme }) => ({
    padding: "2rem",
    minHeight: "250px",
    minWidth: "250px",

    [theme.breakpoints.between(
      theme.breakpoints.values.min,
      theme.breakpoints.values.mobile
    )]: {
      minWidth: "100%",
    },

    [theme.breakpoints.between(
      theme.breakpoints.values.mobile,
      theme.breakpoints.values.desktop
    )]: {
      minWidth: "200px",
      maxWidth: "400px",
    },

    margin: "20px auto",
  }));

  const user = {
    email: "",
    password: ""
  }

  const emailRef = useRef(""); //creating a refernce for TextField Component
  const passwordRef = useRef(""); //creating a refernce for TextField Component

  useEffect(() => {
    
    console.log(passwordRef.current.value);
    
  }, [])
  
  useEffect(() => {
      console.log(error);

      console.log(isError);

  }, [data, error])
  
  return (
    <Grid>
      <LoginPaper elevation={10}>
        <Grid align="center">
          <Avatar style={avatarStyle}>
            <LockOutlinedIcon />
          </Avatar>
          <h2>Sign In</h2>
        </Grid>

        {error?.status == 500 && (
          <Typography variant="p">Check your email or password</Typography>
        )}

        {(emailRef.current.value !== undefined ||
          passwordRef.current.value !== undefined) &&
          isError == false &&
          (emailRef.current.value !== "" ||
            passwordRef.current.value !== "") && <Navigate to="/home" />}

        <TextField
          label="Email"
          placeholder="Enter email"
          fullWidth
          required
          inputRef={emailRef}
        />
        <TextField
          label="Password"
          placeholder="Enter password"
          type="password"
          fullWidth
          required
          inputRef={passwordRef}
        />
        <Button
          type="submit"
          color="primary"
          variant="contained"
          style={btnstyle}
          fullWidth
          onClick={() => {
          

            loginUser(user);

            if(error?.status != 500){
              user.email = emailRef.current.value;
              user.password = passwordRef.current.value;
            }
          }}
        >
          Sign in
        </Button>
      </LoginPaper>
    </Grid>
  );
};

export default LoginForm;
