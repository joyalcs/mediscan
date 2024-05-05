import React, { useState } from 'react';
import { Avatar, Button, CssBaseline, TextField, Grid, Typography, Container, Alert, AlertTitle } from '@mui/material';
import { useDispatch } from 'react-redux';
import { setUserToken } from '../features/user/authSlice';
import { getToken, storeToken } from '../services/localStorage';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { createTheme, ThemeProvider } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import "./styles/signup.css";
import Left_side_sign from '../components/Left_side_sign';
import { useLoginUserMutation } from '../services/user/userAuthApi';

const LoginPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [serverMsg, setServerMsg] = useState('');
  const [loginUser, { isLoading }] = useLoginUserMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const actualData = {
      username: data.get('username'),
      password: data.get('password'),
    };

    try {
      const res = await loginUser(actualData);
      if (res.error) {
        setServerMsg(res.error.data.message);
      }
      if (res.data) {
        console.log(res.data.data.accesstoken);
        const { accesstoken, refreshtoken, user_type, username } = res.data.data;
        localStorage.setItem('accessToken', accesstoken);
        localStorage.setItem('refreshToken', refreshtoken);
        localStorage.setItem('user_type', user_type);
        localStorage.setItem('username', username )
        dispatch(setUserToken({ access_token: accesstoken }));
        if (user_type === "pharmacy") {
          navigate('/add-medicine');
        } else {
          navigate('/');
        }
      }
    } catch (error) {
      console.error('An error occurred during login:', error);
    }

    document.querySelector('form').reset();
  };

  return (
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
        <Typography variant="h5">Login Pharmacy/Customer</Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
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
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            style={{ margin: '16px 0' }}
          >
            Sign In
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link to="/customer-signup">Don't have an Customer account? Sign up</Link><br/>
              <Link to="/pharmacy-signup">Don't have an Pharmacy account? Sign up</Link>
            </Grid>
          </Grid>
        </form>
        {serverMsg && (
          <Alert severity="error">
            <AlertTitle>Error</AlertTitle>
            {serverMsg}
          </Alert>
        )}
      </div>
    </Container>
  );
};

export default LoginPage;