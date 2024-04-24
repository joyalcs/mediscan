import React, { useState } from 'react';
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  Grid,
  Typography,
  Container,
  ThemeProvider
} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { createTheme } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';

const theme = createTheme(); // Define your theme

const AddDoctors = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    address: '',
    id: '',
    qualification: '',
    specialization: ''
  });
  const handleChangeImage = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Process the file (e.g., upload it, store it in state, etc.)
      // You can set the file to your form state or perform any other actions as needed
      console.log('Selected image file:', file);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here, e.g., sending formData to a server
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '50px' }}>
          {/* <Avatar>
            <LockOutlinedIcon />
          </Avatar> */}
          <Typography variant="h5" style={{marginBottom :'30px'}}>Register Your Doctor</Typography>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="first_name"
                  label="First Name"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="last_name"
                  label="Last Name"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
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
                  value={formData.address}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="id"
                  label="ID"
                  name="id"
                  value={formData.id}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="qualification"
                  label="Qualification"
                  id="qualification"
                  value={formData.qualification}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="specialization"
                  label="Specialization"
                  id="specialization"
                  value={formData.specialization}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                variant="outlined"
                required
                fullWidth
                type="file" // Set type to "file" for image upload
                id="image"
                label="Upload Image"
                name="image"
                InputLabelProps={{
                shrink: true, // Keep label visible when the input is empty
                }}
                inputProps={{
                accept: 'image/*' // Restrict to image files
                }}
                onChange={handleChangeImage} // Handle file input change
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
        </div>
      </Container>
    </ThemeProvider>
  );
};

export default AddDoctors;
