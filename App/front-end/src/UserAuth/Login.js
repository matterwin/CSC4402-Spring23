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
// import AlertTitle from '@mui/material/AlertTitle';
// import Stack from '@mui/material/Stack';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import Ani from '../Core/Videos/success2.gif';
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
    }
  }
});

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

    setTimeout(() => {
      window.location = '/';
    }, 4000);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    let email =  data.get('email');
    let password = data.get('password');

    if ((email.trim().length !== 0) && (password.trim().length !== 0)) {

      console.log({
        email: data.get('email'),
        password: data.get('password'),
      });

      const url = `http://localhost:8000/api/userAuthControllerLogin?email=${email}&password=${password}`;

      fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then(response => {
        if (response.status === 404) {
          throw new Error("Access denied");
        }
        return response.json();
      })
      .then(data => {
        if(data) { 

          handleSuccess();

          console.log("success");
          console.log(data);
          
          createCookies(data);
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
              <div className="auth-title">Login</div>
            </Typography>
            { !renderInFail &&
                <div className="alert-div">         
                    <Alert 
                      variant="outlined" 
                      severity="error" 
                      sx={{
                        color: 'white', backgroundColor: 'rgb(105, 0, 0)', 
                        paddingTop: '15px', paddingBottom: '15px', paddingLeft: '30px', paddingRight: '40px',
                        width: '100%',
                        borderRadius: '7px',
                        borderWidth: '2px',
                        borderColor: 'primary', 
                        position: 'relative'                    
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
                      Email or password <strong>incorrect</strong>.
                    </Alert>   
                </div>
            }
            <Box component="form" ref={formRef} onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
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
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }} 
                className={buttonClass}
                color={inputColor}
              >
                Sign in
              </Button>
              { renderInSuccess ? <></> :
                <div className="alert-container">
                  {/* <Stack sx={{ width: '300px' }} spacing={2}>
                    <Alert severity="success">
                      <AlertTitle>Success</AlertTitle>
                      You have successfully <strong>signed in!</strong>
                      <img src={Ani} />
                    </Alert>
                  </Stack> */}
                  <img src={Ani} alt="success"/>
                </div>
              }
              <div className='link-div'>             
                <div>
                  <Link href="./Register" variant="body2" sx={{ color:"#218ffd", textShadow: "0 0 8px rgba(25, 118, 210, 0.6)" }}>
                    {"Don't have an account? Sign Up"}
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