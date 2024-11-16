import React, { useState } from 'react';
import { Box, TextField, Button } from '@mui/material';

const Form = () => {
  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    contact: '',
    jobTitle: '',
    company: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const apiUrl = 'http://localhost:8080/contacts'

    const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    };
    try {
      const response = await fetch(apiUrl, options);
      const responseData = await response.json();
      console.log('Response:', responseData);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
    // console.log(formData)
    // console.log(JSON.stringify(formData))
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        maxWidth: 400,
        margin: 'auto',
        padding: 2,
        boxShadow: 3,
        borderRadius: 2,
      }}
    >
      <TextField
        label="First Name"
        name="firstName"
        value={formData.firstName}
        onChange={handleChange}
        fullWidth
        required
      />
      <TextField
        label="Last Name"
        name="lastName"
        value={formData.lastName}
        onChange={handleChange}
        fullWidth
        required
      />
      <TextField
        label="Email"
        name="email"
        type="email"
        value={formData.email}
        onChange={handleChange}
        fullWidth
        required
      />
      <TextField
        label="Contact"
        name="contact"
        value={formData.contact}
        onChange={handleChange}
        fullWidth
        required
      />
      <TextField
        label="Job Title"
        name="jobTitle"
        value={formData.jobTitle}
        onChange={handleChange}
        fullWidth
        required
      />
      <TextField
        label="Company"
        name="company"
        value={formData.company}
        onChange={handleChange}
        fullWidth
        required
      />
      <Button
        type="submit"
        variant="contained"
        color="primary"
        sx={{ alignSelf: 'center' }}
      >
        Submit
      </Button>
    </Box>
  );
};

export default Form;
