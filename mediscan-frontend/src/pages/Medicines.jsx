import React, { useState } from 'react';
import { Grid, Typography, AppBar, Toolbar, IconButton, Card, CardContent} from '@mui/material';
import { styled, alpha } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuIcon from '@mui/icons-material/Menu';
import { useGetmedicinesQuery } from '../services/medicine/medicineApi';
import { getToken } from '../services/localStorage';
import NavbarComponent from '../components/Navbar';
const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(),
    width: 'auto',
  },
}));

const StyledInputBase = styled('input')(({ theme }) => ({
  color: 'inherit',
  padding: theme.spacing(1, 1, 1, 0),
  paddingLeft: `calc(1em + ${theme.spacing(2)})`,
  transition: theme.transitions.create('width'),
  width: '100%',
  [theme.breakpoints.up('md')]: {
    width: '20ch',
  },
}));

const Medicines = () => {
  const { username } = getToken();
  const [searchTxt, setSearchTxt] = useState('');
  const { data: medicines, isLoading, isSuccess, isError, error } = useGetmedicinesQuery(username);

  const handleSearchChange = (e) => {
    setSearchTxt(e.target.value);
  };

  const renderMedicineData = () => {
    if (isLoading) {
      return <p>Loading...</p>;
    } else if (isSuccess) {
      return (
        <Grid container>
          {medicines.map((medicine) => (
            <Grid key={medicine.id} item xs={12} sm={4} md={2}>
              <Card sx={{ maxWidth: 200, height: 200 }}>
                <CardContent>
                  <Typography gutterBottom variant="h6">
                    Name: {medicine.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Company: {medicine.company}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Stock: {medicine.stock}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Mfd Date: {medicine.mfd_date}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Exp Date: {medicine.exp_date}
                  </Typography>
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
      <NavbarComponent/>
      <h2 style={{fontSize:40, marginLeft:20}}>Medicines</h2>
      <div style={{ paddingLeft:20 }}>
        {renderMedicineData()}
      </div>
    </>
  );
};

export default Medicines;
