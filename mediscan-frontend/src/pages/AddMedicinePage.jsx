import * as React from 'react';
import { useState } from 'react';
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
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateField } from '@mui/x-date-pickers/DateField';

const AddMedicinePage = () => {
    const theme = createTheme(); // Define your theme

    const [formData, setFormData] = useState({
      medicineName: '',
      mfdDate: null,
      expDate: null,
      quantity: '',
      company: '',
      img: '',
    });

    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };

    const handleChangeDate = (name, date) => {
      setFormData({ ...formData, [name]: date });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Add form submission logic here, e.g., sending formData to a server
    };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '50px' }}>
            <Typography variant="h5" style={{marginBottom :'30px'}}>Add your medicine</Typography>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="medicine_name"
                    label="Medicine Name"
                    name="medicineName"
                    value={formData.medicineName}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <DateField
                    label="Manufactured Date"
                    value={formData.mfdDate}
                    onChange={(date) => handleChangeDate('mfdDate', date)}
                    style={{width: '100%'}}

                  />
                </Grid>
                <Grid item xs={12}>
                  <DateField
                    label="Expired Date"
                    value={formData.expDate}
                    onChange={(date) => handleChangeDate('expDate', date)}
                    style={{width: '100%'}}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="qty"
                    label="Quantity"
                    name="quantity"
                    value={formData.quantity}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    name="company"
                    label="Company"
                    id="company"
                    value={formData.company}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    type="file"
                    id="image"
                    label="Medicine Image"
                    name="img"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    inputProps={{
                      accept: 'image/*',
                    }}
                    onChange={handleChange}
                    value={formData.img}
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
    </LocalizationProvider>
  );
}

export default AddMedicinePage;
