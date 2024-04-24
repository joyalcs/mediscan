import React , { useState }from 'react';
import { Card, CardContent, Typography, Button, Grid, Container } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { useTheme } from '@mui/material/styles';
import NavbarComponent from '../components/Navbar'
import MedicineSearch from '../components/MedicineSearch';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import Doctor from '../assets/images/Doctors.png'
import './styles/medicines.css'

const theme = createTheme({
  palette: {
    primary: {
      main: '#007bff', // Material Blue
    },
    secondary: {
      main: '#6c757d', // Material Gray
    },
  },
});

const MedicinesPage = (props) => {
  const [pincode, setPincode] = useState('');
  const [searchTxt, setSearchTxt] = useState('');

  const handleChange = (event) => {
      setPincode(event.target.value);
  };
    const theme = useTheme();
    return (
      <>
      <div><NavbarComponent/></div>
            <ThemeProvider theme={theme}>
      <Container maxWidth="lg">
        <Grid container spacing={2} alignItems="center" style={{ margin: '20px 0', background: '#f5f5f5', borderRadius: '8px', padding: '16px' }}>
          <Grid item xs={12} sm={2}>
            {/* Assuming that 'image.png' is in the 'public' directory */}
            <img src="image.png" alt="Storefront" style={{ width: '100%', borderRadius: '8px' }} />
          </Grid>
          <Grid item xs={12} sm={8}>
            <Typography variant="body1" color="secondary">
              680699
            </Typography>
            <Typography variant="h6" color="primary">
              Neethi Medical Store No.594
            </Typography>
            {/* <Typography variant="body2" sx={{ display: 'flex', alignItems: 'center' }}>
              <StarBorderIcon color="secondary" />
              4.5 (584 reviews)
            </Typography> */}
            <Typography variant="body1" color="secondary">
              Town Hall Rd, Irinjalakuda, Thrissur, Irinjalakuda, Kerala 680121
            </Typography>
            <Typography variant="body1" color="secondary">
              📞   0480 2828378
            </Typography>
          </Grid>
          <Grid item xs={12} sm={2} style={{ textAlign: 'center'}}>
            <Button variant="contained" color="primary" style={{borderRadius: 10, height:50, width:170, marginRight:100}}>
              Get Directions
            </Button>
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
    </>
    );
};

export default MedicinesPage;
