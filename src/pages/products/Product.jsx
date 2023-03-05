import { Breadcrumbs, Typography } from '@mui/material';
import { toLower } from 'lodash';
import React from 'react';
import { Link } from 'react-router-dom';
import Itext from './ItemDesc/Itext';
// import BreadCrumb from './ProHeader/Breadcrumb';
import './Product.css'

function Product(props) {
    const { id,category, image,name,symbol, description} = props.product;
    
    return (
        <>
            <div className='heading-chana'>
                <div className='breadcrumb' role="presentation" >
                    <Breadcrumbs aria-label="breadcrumb">
                        <Link underline="none" to="/">
                            <Typography color={'white'}>Home</Typography>
                        </Link>
                        <Typography color={'white'}>Products</Typography>
                        <Typography color={'white'}>{category}</Typography>
                    </Breadcrumbs>
                </div>

                <div className='chana'>
                    <h1>{name}</h1>
                </div>
            </div>
            <div className="chana-container">
                <div className="chanaWrapper">
                    <div className="chana-img" >
                        <img src={image} alt="" />
                        <h4>{name}</h4>
                    </div>
                    <div id="chana-text">
                        <p>
                            {description}
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Product;