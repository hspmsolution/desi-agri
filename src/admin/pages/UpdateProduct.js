import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Helmet } from 'react-helmet-async';
import { TextField, Button, InputLabel, Select, MenuItem, FormControl } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import { CLIENT_MSG } from '../../constants/actionTypes';
import { updateProduct } from '../../actions/products';

const useStyles = makeStyles((theme) => ({
  inputs: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

const initialData = { productId: '', price: '', date: dayjs(new Date()).$d, location: '' };

const UpdateProduct = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.productsDetail);
  const [productData, setProductData] = useState(initialData);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!productData.productId || !productData.price || !productData.date || !productData.location) {
      dispatch({
        type: CLIENT_MSG,
        message: { info: 'All Fields are required' },
      });
      return;
    }
    if (productData.date > new Date()) {
      dispatch({
        type: CLIENT_MSG,
        message: { info: 'Price date cannot be in future' },
      });
      return;
    }
    dispatch(updateProduct(productData));
    setProductData(initialData);
    console.log();
  };

  const handleChange = (e) => {
    setProductData({
      ...productData,
      [e.target.name]: e.target.value,
    });
  };

  const handleChangeDate = (e) => {
    setProductData({ ...productData, date: e.$d });
  };

  return (
    <>
      <Helmet>
        <title> Dashboard: Update Products | Desi-agri</title>
      </Helmet>
      <form className={classes.inputs} noValidate autoComplete="off">
        <FormControl fullWidth margin="normal">
          <InputLabel id="select-label">Select a Category</InputLabel>
          <Select
            labelId="select-label"
            onChange={handleChange}
            name="productId"
            label="Select a Category"
            value={productData.productId}
          >
            {products.map((product) => (
              <MenuItem key={product.id} value={product.id}>
                {product.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DateTimePicker
            label="Date&Time picker"
            value={productData.date}
            onChange={handleChangeDate}
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider>
        <TextField id="standard-basic" label="Price" name="price" value={productData.price} type={'number'} onChange={handleChange} />
        <TextField id="standard-basic" label="Location" name="location" value={productData.location} onChange={handleChange} />
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          update product info
        </Button>
      </form>
    </>
  );
};

export default UpdateProduct;
