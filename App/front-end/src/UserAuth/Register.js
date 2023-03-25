import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState, useRef } from "react"

import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Stack from '@mui/material/Stack';

import "./auth.css"

function Home(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {/* {'Go back '} */}
      <Link color="inherit" href="/">
        Home
      </Link>{' '}
    </Typography>
  );
}



const theme = createTheme();

export default function SignIn() {

  const [buttonClass, setButtonClass] = useState("");
  const [inputColor, setInputColor] = useState("primary");

  const [renderInSuccess, setRenderInSuccess] = useState(true);
  const [renderInFail, setRenderInFail] = useState(true);

  const formRef = useRef(null);

  function handleFailure() {

    const intervalId = setInterval(() => {
      setButtonClass("inputInvalid");
      setInputColor("error");
    }, 0);

    setTimeout(() => {
        clearInterval(intervalId);
        setButtonClass("");
        setInputColor("primary");
    }, 500);

    setRenderInFail(false);
  
    setTimeout(() => { 
      setRenderInFail(true);
    }, 4000);
  }

  function handleSuccess() {

    const intervalId = setInterval(() => {
      setButtonClass("inputSuccess");
      setInputColor("success");
    }, 0);

    setTimeout(() => {
      clearInterval(intervalId);
      setButtonClass("");
      setInputColor("primary");
    }, 4000);

    setRenderInSuccess(false);

    setTimeout(() => { 
      setRenderInSuccess(true);
    }, 4000); 
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    let username =  data.get('username');
    let email =  data.get('email');
    let password = data.get('password');

    if ((username.trim().length !== 0) && (email.trim().length !== 0) && (password.trim().length !== 0)) {

      console.log({
        username: data.get('username'),
        email: data.get('email'),
        password: data.get('password'),
      });

      fetch('http://localhost:8000/api/userAuthController', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: username,
          email: email,
          password: password,
        }),
      })
      .then(response => {
        if (response.status === 403) {
          throw new Error("Access denied");
        }
        return response.json();
      })
      .then(data => {
        if(data) { 

          handleSuccess();

          console.log("success");
          console.log(data);
        }
      })
      .catch(error => {

        handleFailure();
        
        console.log("Error: " + error.message);
      });

      formRef.current.reset();
    }
    else {
      console.log("Invalid Input");

      const intervalId = setInterval(() => {
        setButtonClass("inputInvalid");
        setInputColor("error");
      }, 0);

      setTimeout(() => {
          clearInterval(intervalId);
          setButtonClass("");
          setInputColor("primary");
      }, 500);
    }
  };

  return (
    <div className="center-auth">
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
              <LockOutlinedIcon style={{ color: 'white' }} />
            </Avatar>
            <Typography component="h1" variant="h5">
              <div className="auth-title">Register</div>
            </Typography>
            <Box component="form" ref={formRef} onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="username"
                label="Username"
                name="username"
                autoComplete="username"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }} 
                className={buttonClass}
                color={inputColor}
                // href={isInputValid}
              >
                Sign up
              </Button>
              { renderInSuccess ? <></> :
                <div className="alert-container">
                  <Stack sx={{ width: '300px' }} spacing={2}>
                    <Alert severity="success">
                      <AlertTitle>Success</AlertTitle>
                      You have successfully <strong>registered!</strong>
                    </Alert>
                  </Stack>
                </div>
              }
              { renderInFail ? <></> :
                <div className="alert-container">
                  <Stack sx={{ width: '300px' }} spacing={2}>
                    <Alert severity="error">
                      <AlertTitle>Failed</AlertTitle>
                      Username or email <strong>already taken!</strong>
                    </Alert>
                  </Stack>
                </div>
              }
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="./Login" variant="body2">
                    {"Already have an account? Log In"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
          <Home sx={{ mt: 4, mb: 4 }} />
        </Container>
      </ThemeProvider>
    </div>
  );
}