import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Profile from '../assets/images/profile.jpg';
import '../components/styles/Cards.css';
import { useGetDoctorsQuery } from '../services/medicine/medicineApi';
import { useSendEmailConfirmationMutation } from '../services/pharmacy/pharmacyApi';
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import {getToken} from '../services/localStorage'
import axios from 'axios';
import NavbarComponent from '../components/Navbar';

const Doctors = () => {
  const {username} = getToken();
  const { data: doctors, isLoading, isSuccess, isError, error } = useGetDoctorsQuery();
  
  const handleBookAppointment = async (email) => {
    try {
      const url = `http://localhost:8000/api/pharmacy/confirm/?user=${username}&doctor=${email}`;
      await axios.post(url);
      alert('Appointment booked successfully!');
    } catch (error) {
      alert('Failed to book appointment. Please try again.');
    }
  };


  const renderDoctorsData = () => {
    if (isLoading) {
      return <p>Loading...</p>;
    } else if (isSuccess) {
      return (
        <TableBody>
        {doctors.map((doctor) => (
          <TableRow
            key={doctor.id}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell component="th" scope="row">
            <Link to="">{doctor.first_name} {doctor.last_name}</Link>
            </TableCell>
            <TableCell align="right">{doctor.address}</TableCell>
            <TableCell align="right">{doctor.qualification}</TableCell>
            <TableCell align="right">{doctor.specialization}</TableCell>
            <TableCell align="right">{doctor.email}</TableCell>
            <TableCell align="right"><Button variant="contained" onClick={() => handleBookAppointment(doctor.email)}>Book</Button></TableCell>
          </TableRow>
        ))}
      </TableBody>
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
    <TableContainer component={Paper} sx={{maxWidth:1000, marginLeft:30, marginTop:10}} >
    <Table sx={{ minWidth: 650 }} aria-label="simple table" size="small" >
      <TableHead>
        <TableRow>
          <TableCell>Full Name</TableCell>
          <TableCell align="right">Address</TableCell>
          <TableCell align="right">Qualification</TableCell>
          <TableCell align="right">Specialization</TableCell>
          <TableCell align="right">Email</TableCell>
          <TableCell align="right"></TableCell>

        </TableRow>
      </TableHead>
        {renderDoctorsData()}
    </Table>
  </TableContainer>
  </>
  );
};

export default Doctors;
