import * as React from 'react';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import './Breadcrumb.css'



export default function BasicBreadcrumbs(z) {
  return (
   <div className='heading-chana'>
       <div className='breadcrumb' role="presentation" >
      <Breadcrumbs aria-label="breadcrumb">
        <Link underline="none" color={'white'} href="/">
          Home
        </Link>
        <Typography color={'white'}>Products</Typography>
        <Typography color={'white'}>Cereals and Pulses</Typography>
      </Breadcrumbs>
    </div>

    <div className='chana'>
    <h1>CHANA</h1>
    </div>
   </div>
  );
}
