import { Breadcrumbs, Typography } from '@mui/material';
import { toLower } from 'lodash';
import React from 'react';
import { Link } from 'react-router-dom';
import Itext from './ItemDesc/Itext';
// import BreadCrumb from './ProHeader/Breadcrumb';
import './Product.css'

function Product(props) {
    const { productCategory, productName, productDescription } = props.product;
    console.log(productName)

    return (
        <>
            <div className='heading-chana'>
                <div className='breadcrumb' role="presentation" >
                    <Breadcrumbs aria-label="breadcrumb">
                        <Link underline="none" to="/">
                            <Typography color={'white'}>Home</Typography>
                        </Link>
                        <Typography color={'white'}>Products</Typography>
                        <Typography color={'white'}>{productCategory}</Typography>
                    </Breadcrumbs>
                </div>

                <div className='chana'>
                    <h1>CHANA</h1>
                </div>
            </div>
            <div className="chana-container">
                <div className="chanaWrapper">
                    <div className="chana-img" >
                        <img src={`./images/${toLower(productName)}.jpg`} alt="" />
                        <h4>{productName}</h4>
                    </div>
                    <div id="chana-text">
                        <p>
                            {productDescription}
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Product;