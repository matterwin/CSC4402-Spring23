import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Divider from '@mui/material/Divider';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState, useRef } from "react"
import Alert from '@mui/material/Alert';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import createCookies from '../Hooks/createCookies';

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

const theme = createTheme({
  palette: {
    background: {
      default: "#2a3038"
    },
    success: {
      main: '#03fbab'
    },
  }
});

export default function SignIn() {

  const [buttonClass, setButtonClass] = useState("");
  const [inputColor, setInputColor] = useState("primary");
  const [renderInFail, setRenderInFail] = useState(true);
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

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
    }, 1000);

    setTimeout(() => {
      window.location = '/';
    }, 1000);
  }

  function handleInValidEmail() {
    const intervalId = setInterval(() => {
      setButtonClass("inputInvalid");
      setInputColor("error");
    }, 0);

    setTimeout(() => {
        clearInterval(intervalId);
        setButtonClass("");
        setInputColor("primary");
    }, 500);

    console.error('email is invalid')
  }

  function handleEmailChange(event) {
    const emailInput = event.target.value;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid = emailRegex.test(emailInput);

    setIsValidEmail(isValid);

    if(!isValid)
      setFormSubmitted(false);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    let username =  data.get('username');
    let email =  data.get('email');
    let password = data.get('password');

    if ((username.trim().length !== 0) && (email.trim().length !== 0) && (password.trim().length !== 0)) {

      if(!isValidEmail) {
        setFormSubmitted(true);
        handleInValidEmail();
        return;
      }
      else
        setFormSubmitted(false);

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
          createCookies(data);
        }
      })
      .catch(error => {
        console.error(error);
        handleFailure();
      });
      // formRef.current.reset();
    }
    else {
      console.error("Invalid Input");

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
            { !renderInFail &&
                <div className="alert-div">         
                    <Alert 
                      variant="outlined" 
                      severity="error" 
                      sx={{
                        color: 'white', backgroundColor: 'rgb(105, 0, 0)', 
                        paddingTop: '15px', paddingBottom: '15px', paddingLeft: '30px', paddingRight: '50px',
                        width: '100%',
                        borderRadius: '7px',
                        borderWidth: '2px',
                        borderColor: 'primary',
                        position: 'relative',                      
                      }}
                      action={
                        <IconButton
                          aria-label="close"
                          color="inherit"
                          size="small"
                          onClick={() => {
                            setRenderInFail(true);
                          }}
                          sx={{
                            padding: '10px',
                            '&:hover': {
                              backgroundColor: '#f4f4f542'
                            },
                            position: 'absolute',
                            right: '10px',
                            top: '50%',
                            transform: 'translateY(-50%)'
                          }}
                        >
                          <CloseIcon fontSize="inherit" />
                        </IconButton>
                    }
                    >
                      Username or email <strong>already taken</strong>!
                    </Alert>   
                </div>
            }
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
                sx={{
                  '& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline': {
                    borderColor: '#1976d2',
                    boxShadow: "0 0 8px rgba(25, 118, 210, 0.6)"
                  },
                  '& .MuiOutlinedInput-notchedOutline': {
                    borderColor: '#f4f4f5',
                  },
                }}
                InputLabelProps={{
                  style: { color: '#f4f4f5' }
                }}
                InputProps={{
                  style: { color: '#f4f4f5' }
                }}      
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                onChange={handleEmailChange}
                sx={{
                  '& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline': {
                    borderColor: '#1976d2',
                    boxShadow: "0 0 8px rgba(25, 118, 210, 0.6)"
                  },
                  '& .MuiOutlinedInput-notchedOutline': {
                    borderColor: '#f4f4f5',
                  },
                }}
                InputLabelProps={{
                  style: { color: '#f4f4f5' }
                }}
                InputProps={{
                  style: { color: '#f4f4f5' }
                }}      
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
                sx={{
                  '& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline': {
                    borderColor: '#1976d2',
                    boxShadow: "0 0 8px rgba(25, 118, 210, 0.6)"
                  },
                  '& .MuiOutlinedInput-notchedOutline': {
                    borderColor: '#f4f4f5',
                  },
                }}
                InputLabelProps={{
                  style: { color: '#f4f4f5' }
                }}
                InputProps={{
                  style: { color: '#f4f4f5' }
                }}      
              />
              {formSubmitted && <p className="invalid-email-msg">Please enter a valid email address.</p>}
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
              <div className='link-div'>             
                <div>
                  <Link href="./Login" variant="body2" sx={{ color:"#218ffd", textShadow: "0 0 8px rgba(25, 118, 210, 0.6)" }}>
                    {"Already have an account? Log In"}
                  </Link>
                </div>
                <div>
                  <Divider orientation="vertical" sx={{ my: 0.5, backgroundColor: '#blue' }} />
                </div>
                <div className="divider-div">
                  <Divider orientation="vertical" style={{ backgroundColor: '#1976d2', height: '25px', width:'1px' }} />
                </div>
                <div className='link'>
                  <Home sx={{ mt: 4, mb: 4, color: '#dbdbdb' }} />
                </div>
              </div>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    </div>
  );
}
