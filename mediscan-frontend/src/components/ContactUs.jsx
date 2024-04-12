import React, { useState } from 'react';
import { Box, Button, FormControl, TextField, Typography } from '@mui/material';

const ContactUs = () => {
    // State to handle form inputs
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    // Handle form input change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        // Add form submission logic here (e.g., sending data to an API or email)
        console.log('Form submitted:', formData);
        // Reset form fields
        setFormData({
            name: '',
            email: '',
            message: ''
        });
    };

    return (
        <Box sx={{ maxWidth: 500, mx: 'auto', mt: 5, p: 3, boxShadow: 3 }}>
            <Typography variant="h4" sx={{ mb: 3, textAlign: 'center' }}>
                Contact Us
            </Typography>
            <form onSubmit={handleSubmit}>
                <FormControl fullWidth sx={{ mb: 2 }}>
                    <TextField
                        label="Name"
                        variant="outlined"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </FormControl>
                <FormControl fullWidth sx={{ mb: 2 }}>
                    <TextField
                        label="Email"
                        variant="outlined"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </FormControl>
                <FormControl fullWidth sx={{ mb: 2 }}>
                    <TextField
                        label="Message"
                        variant="outlined"
                        name="message"
                        multiline
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        required
                    />
                </FormControl>
                <Button variant="contained" color="primary" type="submit" fullWidth>
                    Submit
                </Button>
            </form>
        </Box>
    );
};

export default ContactUs;
