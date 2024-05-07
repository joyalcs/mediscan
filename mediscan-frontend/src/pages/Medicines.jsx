import React, { useState } from 'react';
import { Grid, Typography, AppBar, Toolbar, IconButton, Card, CardContent} from '@mui/material';
import { styled, alpha } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuIcon from '@mui/icons-material/Menu';
import { useGetmedicinesQuery } from '../services/medicine/medicineApi';
import { getToken } from '../services/localStorage';
import NavbarComponent from '../components/Navbar';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import axios from 'axios';

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

  const handleDelete = async (id) => {
    try {
      const url = `http://localhost:8000/api/pharmacy/medicine/delete/?medicine=${id}`;
      await axios.post(url);
      alert('Medicine Deleted successfully!');
      window.location.reload(); // Reload the page after deletion
    } catch (error) {
      alert('There are problems with the delete operation.');
    }
  };

  const renderMedicineData = () => {
    if (isLoading) {
      return <p>Loading...</p>;
    } else if (isSuccess) {
      // if (!medicines || !medicines.medicines || medicines.medicines.length === 0) {
      //   return (
      //     <TableBody>
      //       <TableRow>
      //         <TableCell colSpan={6} align="center">
      //           <Typography variant="body1">No medicines present in this pharmacy.</Typography>
      //         </TableCell>
      //       </TableRow>
      //     </TableBody>
      //   );
      // }else{
      return (
        <TableBody>
          {medicines.map((medicine) => (
            <TableRow
              key={medicine.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                <Link to="">{medicine.name}</Link>
              </TableCell>
              <TableCell align="right">{medicine.mfd_date}</TableCell>
              <TableCell align="right">{medicine.exp_date}</TableCell>
              <TableCell align="right">{medicine.stock}</TableCell>
              <TableCell align="right">{medicine.company}</TableCell>
              <TableCell align="right">
                <Button
                  variant="contained"
                  onClick={() => handleDelete(medicine.id)}
                >
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      );
    // }
    } else if (isError) {
      const errorMessage = error ? error.message : 'An error occurred.';
      return <p>Error: {errorMessage}</p>;
    }
    return null;
  };

  return (
    <>
      <NavbarComponent />
      <h2 style={{ fontSize: 40, marginLeft: 20 }}>Medicines</h2>
      <TableContainer component={Paper} sx={{ maxWidth: 1000, marginLeft: 30, marginTop: 10 }}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table" size="small">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="right">Manufactured Date</TableCell>
              <TableCell align="right">Expired Date</TableCell>
              <TableCell align="right">Stock</TableCell>
              <TableCell align="right">Company</TableCell>
              <TableCell align="right"></TableCell>
            </TableRow>
          </TableHead>
          {renderMedicineData()}
        </Table>
      </TableContainer>
    </>
  );
};

export default Medicines;
