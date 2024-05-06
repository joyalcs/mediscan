import React, { useState, useEffect } from 'react';
import { Button, CssBaseline, Grid, TextField, Typography, Container, ThemeProvider } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { createTheme } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs'; // Import dayjs for date formatting
import { useRegisterMedicineMutation } from '../services/medicine/medicineApi';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { DateField } from '@mui/x-date-pickers/DateField';
import {getToken} from '../services/localStorage'
import NavbarComponent from '../components/Navbar';

const AddMedicinePage = () => {
  const theme = createTheme(); // Define your theme
  const [serverMsg, setServerMsg] = useState('');
  const [formData, setFormData] = useState({
    medicineName: '',
    mfdDate: null,
    expDate: null,
    quantity: '',
    company: '',
    image: null,
  });
  const navigate = useNavigate();
  const [registerMedicine, mutationState] = useRegisterMedicineMutation();
  const { isLoading, isError, error, data } = mutationState;
  const { username } = getToken();

  useEffect(() => {
    return () => {
      setServerMsg(''); // Clear server message on component unmount
    };
  }, []);


  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData({ ...formData, image: file });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const data = new FormData(e.currentTarget);
    const actualData = {
      name: data.get('medicineName'),
      mfd_date: data.get('mfdDate'),
      exp_date: data.get('expDate'),
      company: data.get('company'),
      image: data.get('image'),
      stock: data.get('quantity'),
      pharmacy: username
    };
    try {
      const res = await registerMedicine(actualData);

      if (res.error) {
        setServerMsg(res.error.message); // Set the error message received from the server
      } else if (res.data) {
        setServerMsg('Medicine registered successfully');
        console.log("success");
        setFormData({
          medicineName: '',
          mfdDate: null,
          expDate: null,
          quantity: '',
          company: '',
          image: null,
        });
        navigate('/medicines');
      }
    } catch (error) {
      setServerMsg('An error occurred. Please try again.'); // Set a generic error message
    }
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <NavbarComponent/>
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '5px' }}>
            <Typography variant="h5" style={{ marginBottom: '30px' }}>
              Add your medicine
            </Typography>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="medicineName"
                    label="Medicine Name"
                    name="medicineName"
                  />
                </Grid>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                {/* <DemoContainer components={['DateField', 'DateField']}> */}
                <Grid item xs={12}>
                <DateField
                  variant="outlined"
                required
                fullWidth
                  label="Manufactured Date"
                  defaultValue={dayjs('2022-04-17')}
                  format="MM-DD-YYYY"
                  id="mfdDate"
                  name="mfdDate"

                />
                </Grid>

                  {/* </DemoContainer> */}
                </LocalizationProvider>
        
                <Grid item xs={12}>
                <DateField
                  variant="outlined"
                required
                fullWidth
                  label="Expiry Date"
                  defaultValue={dayjs('2022-04-17')}
                  format="MM-DD-YYYY"
                  id="expDate"
                  name='expDate'

                />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="quantity"
                    label="Quantity"
                    name="quantity"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="company"
                    label="Company"
                    name="company"
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
                Register
              </Button>
            </form>
            {serverMsg && (
              <Typography variant="body2" color={isError ? 'error' : 'primary'}>
                {serverMsg}
              </Typography>
            )}
          </div>
        </Container>
      </ThemeProvider>
    </LocalizationProvider>
  );
};

export default AddMedicinePage;
