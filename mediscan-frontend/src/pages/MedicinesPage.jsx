import React, { useState } from 'react';
import { 
  Card, 
  CardContent, 
  Typography, 
  Button, 
  Grid, 
  Container, 
  TextField 
} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import NavbarComponent from '../components/Navbar';
import { useGetSerachPharmacyQuery } from '../services/pharmacy/pharmacyApi';
import './styles/medicinepage.css';

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

const MedicinesPage = () => {
  const [pincode, setPincode] = useState('');
  const [medicine, setMedicine] = useState('');
  const { data: pharmacies, isLoading, isSuccess, isError, error } = useGetSerachPharmacyQuery({ pincode, medicine });

  const handlePincodeChange = (event) => {
    setPincode(event.target.value);
  };

  const handleMedicineChange = (event) => {
    setMedicine(event.target.value);
  };

  const renderPharmaciesData = () => {
    if (isLoading) {
      return <p>Loading...</p>;
    } else if (isSuccess) {
      if (!pharmacies) {
        return <p>No pharmacies found.</p>;
      }
  
      return (
        <Grid container spacing={2} style={{ marginTop: 20 }}>
          {pharmacies.map((pharmacy) => (
            <Grid item xs={12} sm={4} key={pharmacy.id}>
              <Card style={{ padding: '16px', height: '100%' }}>
                <CardContent>
                  <Typography variant="h6" color="primary">
                    {pharmacy.pharmacy.name}
                  </Typography>
                  <Typography variant="body1" color="secondary">
                    {pharmacy.pharmacy.pincode}
                  </Typography>
                  <Typography variant="body1" color="secondary">
                    {pharmacy.pharmacy.address}
                  </Typography>
                  <Typography variant="body1" color="secondary">
                    📞 {pharmacy.pharmacy.email}
                  </Typography>
                  <Button
                    variant="contained"
                    color="primary"
                    style={{ marginTop: '10px', borderRadius: 10, height: 50, width: 170 }}
                  >
                    Location
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      );
    } else if (isError) {
      const errorMessage = error ? error.message : 'An error occurred.';
      return <p>Error: {errorMessage}</p>;
    }
  
    return null;
  };

  return (
    <>
      <NavbarComponent />
      <div className='one'>
        <div className="medicine">
          <div className="search-bar">
            <TextField
              type="text"
              placeholder="Pincode"
              value={pincode}
              onChange={handlePincodeChange}
              className="search-input"
              size="small"
              name="pincode"
            />
            <TextField
              type="text"
              placeholder="Medicine"
              value={medicine}
              onChange={handleMedicineChange}
              className="search-input"
              size="small"
              name="medicine"
            />
          </div>
        </div>
      </div>

      <ThemeProvider theme={theme}>
        <Container maxWidth="lg" style={{ marginTop: 80 }}>
          <Typography variant="h2" style={{ marginTop: 100, fontSize: 40 }}>
            Pharmacies
          </Typography>
          {renderPharmaciesData()}
        </Container>
      </ThemeProvider>
    </>
  );
};

export default MedicinesPage;
