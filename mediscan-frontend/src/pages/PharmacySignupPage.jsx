import React, { useState, useEffect } from 'react';
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  Grid,
  Typography,
  Container,
  Alert,
  AlertTitle
} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { createTheme, ThemeProvider } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import "./styles/signup.css";
import Left_side_sign from '../components/Left_side_sign';
import { useRegisterPharmacyMutation } from '../services/pharmacy/pharmacyApi';

const RegisterPage = () => {
  const theme = createTheme();
  const [pincodes, setPincodes] = useState([]);
  const [serverMsg, setServerMsg] = useState({});
  const [errorMsg, setErrorMsg] = useState('');
  const navigate = useNavigate();
  const [registerPharmacy, mutationState] = useRegisterPharmacyMutation();
  const { isLoading, isError, error, data } = mutationState;

  useEffect(() => {
    return () => {
      setErrorMsg(''); // Clear error message on component unmount
    };
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const actualData = {
      email: data.get('email'),
      name: data.get('pharamacy_name'),
      address: data.get('address'),
      pincode: data.get('pincode'),
      username: data.get('username'),
      password: data.get('password'),
      password2: data.get('password2')
    };

    try {
      const res = await registerPharmacy(actualData);

      if (res.error) {
        setErrorMsg(res.error.data.message);
        console.log(res.error.data.message); // Set the error message received from the server
      } else if (res.data) {
        setServerMsg(res.data);
        setErrorMsg(''); // Clear error message on successful submission
        navigate("/signin");
      }
    } catch (error) {
      setErrorMsg('An error occurred. Please try again.'); // Set a generic error message
    }

    document.querySelector('form').reset();
  };

  return (
    <div className="signup">
      <div className="left" style={{height:900}}>
        <Left_side_sign />
      </div>
      <div className="right">
        <ThemeProvider theme={theme}>
          <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                marginTop: '8px',
              }}
            >
              <Avatar>
                <LockOutlinedIcon />
              </Avatar>
              <Typography variant="h5">Register Your Pharmacy</Typography>
              <Alert severity="info">
                <AlertTitle>Info</AlertTitle>
                Use any of the special characters on the password. Password eg: Password@123
              </Alert>

              <div>
                {errorMsg && (
                  <Alert severity="error">
                    <AlertTitle>Error</AlertTitle>
                    {errorMsg}
                  </Alert>
                )}

                <form onSubmit={handleSubmit}>
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <TextField
                        variant="outlined"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        type='email'
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        variant="outlined"
                        required
                        fullWidth
                        id="pharmacy_name"
                        label="Pharmacy Name"
                        name="pharamacy_name"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        variant="outlined"
                        required
                        fullWidth
                        id="address"
                        label="Address"
                        name="address"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        variant="outlined"
                        required
                        fullWidth
                        id="pincode"
                        label="Pincode"
                        name="pincode"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        variant="outlined"
                        required
                        fullWidth
                        id="username"
                        label="Username"
                        name="username"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        variant="outlined"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        variant="outlined"
                        required
                        fullWidth
                        name="password2"
                        label="Confirm Password"
                        type="password"
                        id="password2"
                      />
                    </Grid>
                  </Grid>
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    style={{ margin: '16px 0' }}
                  >
                    Sign Up
                  </Button>
                  <Grid container justifyContent="flex-end">
                    <Grid item>
                      <Link className='bg-white text-dark ms-3 text-decoration-none' to="\login">
                        Already have an account? Sign in
                      </Link>
                    </Grid>
                  </Grid>
                </form>
              </div>
            </div>
          </Container>
        </ThemeProvider>
      </div>
    </div>
  );
};

export default RegisterPage;