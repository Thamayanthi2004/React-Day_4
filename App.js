import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { TextField, Button, Box, Radio, RadioGroup, FormControlLabel, Checkbox, FormLabel } from '@mui/material';

function App() {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      mobile: '',
      gender: '',
      terms: false,
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Name is required'),
      email: Yup.string().email('Invalid email').required('Email is required'),
      mobile: Yup.string()
        .matches(/^[0-9]{10}$/, 'Enter a valid 10 digit mobile number')
        .required('Mobile is required'),
      gender: Yup.string().required('Gender is required'),
      terms: Yup.boolean().oneOf([true], 'You must accept the terms'),
    }),
    onSubmit: (values) => {
      alert('Successfully Verified!');
    },
  });

  return (
    <Box 
      sx={{ 
        maxWidth: '400px', 
        margin: '0 auto', 
        padding: '20px', 
        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)' 
      }}>
      <h1 style={{ textAlign: 'center' }}>Registration Form</h1>
      <form onSubmit={formik.handleSubmit}>
        <Box mb={2}>
          <TextField
            fullWidth
            id="name"
            name="name"
            label="Name"
            value={formik.values.name}
            onChange={formik.handleChange}
            error={formik.touched.name && Boolean(formik.errors.name)}
            helperText={formik.touched.name && formik.errors.name}
          />
        </Box>

        <Box mb={2}>
          <TextField
            fullWidth
            id="email"
            name="email"
            label="Email"
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
        </Box>

        <Box mb={2}>
          <TextField
            fullWidth
            id="mobile"
            name="mobile"
            label="Mobile"
            value={formik.values.mobile}
            onChange={formik.handleChange}
            error={formik.touched.mobile && Boolean(formik.errors.mobile)}
            helperText={formik.touched.mobile && formik.errors.mobile}
          />
        </Box>

        <Box mb={2}>
          <FormLabel>Gender</FormLabel>
          <RadioGroup
            name="gender"
            value={formik.values.gender}
            onChange={formik.handleChange}
            row
          >
            <FormControlLabel value="male" control={<Radio />} label="Male" />
            <FormControlLabel value="female" control={<Radio />} label="Female" />
          </RadioGroup>
          {formik.touched.gender && formik.errors.gender && (
            <div style={{ color: 'red', fontSize: '12px' }}>{formik.errors.gender}</div>
          )}
        </Box>

        <Box mb={2}>
          <FormControlLabel
            control={
              <Checkbox
                name="terms"
                checked={formik.values.terms}
                onChange={formik.handleChange}
              />
            }
            label="I accept the terms and conditions"
          />
          {formik.touched.terms && formik.errors.terms && (
            <div style={{ color: 'red', fontSize: '12px' }}>{formik.errors.terms}</div>
          )}
        </Box>

        <Button color="primary" variant="contained" fullWidth type="submit">
          Submit
        </Button>
      </form>
    </Box>
  );
}

export default App;
