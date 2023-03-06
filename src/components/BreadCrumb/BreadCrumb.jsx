import { Breadcrumbs, Typography } from '@mui/material';
import React from 'react';

function BreadCrumb() {
    return (
        <Breadcrumbs aria-label="breadcrumb">
            <Link underline="none" to="/">
                <Typography color={'white'}>Home</Typography>
            </Link>
            <Typography color={'white'}>Products</Typography>
            <Typography color={'white'}>{productCategory}</Typography>
        </Breadcrumbs>
    )
}

export default BreadCrumb;