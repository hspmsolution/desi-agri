import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Box, Button, Container, TextField, Typography } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { signin } from '../../actions/auth';

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const message = useSelector((state) => state.auth.message?.info);
  const [disabled, setDisabled] = useState(false);
  const formik = useFormik({
    initialValues: {
      email: 'demo@devias.io',
      password: 'Password123',
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Must be a valid email').max(255).required('Email is required'),
      password: Yup.string().max(255).required('Password is required'),
    }),
    onSubmit: (data) => {
      setTimeout(() => {
        dispatch(signin(data, navigate));
      }, 500);

      setDisabled(true);
    },
  });

  useEffect(() => {
    if (message) setDisabled(false);
  }, [message]);

  return (
    <>
      <Helmet>
        <title> Login </title>
      </Helmet>
      <Box
        component="main"
        sx={{
          alignItems: 'center',
          display: 'flex',
          flexGrow: 1,
          minHeight: '100%',
        }}
      >
        <Container maxWidth="sm">
          <Link to="/">
            <Button component="a" startIcon={<ArrowBackIcon fontSize="small" />}>
              Dashboard
            </Button>
          </Link>
          <form onSubmit={formik.handleSubmit}>
            <Box
              sx={{
                pb: 1,
                pt: 3,
              }}
            >
              <Typography align="center" color="textSecondary" variant="body1">
                login with email address
              </Typography>
            </Box>
            <TextField
              error={Boolean(formik.touched.email && formik.errors.email)}
              fullWidth
              helperText={formik.touched.email && formik.errors.email}
              label="Email Address"
              margin="normal"
              name="email"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              type="email"
              value={formik.values.email}
              variant="outlined"
            />
            <TextField
              error={Boolean(formik.touched.password && formik.errors.password)}
              fullWidth
              helperText={formik.touched.password && formik.errors.password}
              label="Password"
              margin="normal"
              name="password"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              type="password"
              value={formik.values.password}
              variant="outlined"
            />
            <Box sx={{ py: 2 }}>
              <Button color="primary" disabled={disabled} fullWidth size="large" type="submit" variant="contained">
                Sign In Now
              </Button>
            </Box>
            <Typography color="textSecondary" variant="body2">
              Don&apos;t have an account?{' '}
              <Link to="/register">
                <Button component="a">SignUp</Button>
              </Link>
            </Typography>
          </form>
        </Container>
      </Box>
    </>
  );
};

export default Login;
