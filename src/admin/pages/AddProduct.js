import React, { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button, Card, CardActionArea, Select, InputLabel, FormControl, MenuItem } from '@mui/material';
import { addProduct } from '../../actions/products';
import { CLIENT_MSG } from '../../constants/actionTypes';

const productDetails = { name: '', symbol: '', category: '', description: '', image: '' };
const categories = [
  { id: 1, name: 'Cereals and Pulses' },
  { id: 2, name: 'Oil and Oil seeds' },
  { id: 3, name: 'Fibres' },
  { id: 4, name: 'Spices' },
];

const AddProduct = () => {
  const [details, setDetails] = useState(productDetails);
  const [file, setFile] = useState(null);
  const [error, setError] = useState('');
  const fileUploadRef = useRef();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setDetails({
      ...details,
      [e.target.name]: e.target.value,
    });
  };

  const submitDetails = (e) => {
    e.preventDefault();
    if (!details.name || !details.symbol || !details.description || !details.category||!details.image ) {
      dispatch({
        type: CLIENT_MSG,
        message: { info: "All Fields are required"},
      });
      return;
    }
    dispatch(addProduct(details));
    setDetails(productDetails);
    setFile(null);
  };

  // Function to convert file into base64 string
  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  // Function to handle file read
  const handleFileRead = async (event) => {
    const file = event.target.files[0];
    // Check file size
    if (file.size > 500000) {
      setError('Please choose a file smaller than 1mb');
      return;
    }
    if (file.type !== 'application/pdf' && file.type !== 'image/jpeg') {
      setError('File does not support. You must use .pdf or .jpg ');
      return;
    }
    const base64 = await convertBase64(file);
    setDetails({
      ...details,
      [event.target.name]: base64,
    });
    setFile(file);
    setError('');
  };

  return (
    <>
      <form autoComplete="off" noValidate onSubmit={submitDetails}>
        <Button color="primary" size="large" type="submit" variant="contained">
          Add New Products
        </Button>
        <Box
          component="form"
          sx={{
            '& > :not(style)': { m: 1, width: '25ch' },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            value={details.name}
            name="name"
            id="outlined-basic"
            label="Name"
            variant="outlined"
            required
            onChange={handleChange}
          />
          <TextField
            value={details.symbol}
            name="symbol"
            id="outlined-basic"
            label="Symbol"
            variant="outlined"
            required
            onChange={handleChange}
          />
          <FormControl fullWidth margin="normal">
            <InputLabel id="select-label">Select a Category</InputLabel>
            <Select
              labelId="select-label"
              onChange={handleChange}
              name="category"
              label="Select a Category"
              value={details.category}
            >
              {categories.map((category) => (
                <MenuItem key={category.id} value={category.name}>
                  {category.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <TextField
            value={details.description}
            name="description"
            id="outlined-textarea"
            label="Description"
            required
            multiline
            sx={{ m: 1, minWidth: '63%' }}
            onChange={handleChange}
          />

          <Card>
            <CardActionArea onClick={() => fileUploadRef.current.click()}>
              <input
                hidden
                ref={fileUploadRef}
                id="image"
                type="file"
                accept="image/*"
                required
                label="Document"
                name="image"
                onChange={(e) => handleFileRead(e)}
              />

              <img alt="placeholder-img" src={details?.image || ' /assets/PlaceholderImg.png'} />
            </CardActionArea>
            {file && <p>{file.name}</p>}
            {error && <p style={{ color: 'red' }}>{error}</p>}
          </Card>
        </Box>
      </form>
    </>
  );
};

export default AddProduct;
