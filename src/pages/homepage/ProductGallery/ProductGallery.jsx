import React, {useState} from 'react'
import "./ProductGall.css";
import Menu from "./menu";

const ProductGallery = () => {

    const [items, setItems] = useState(Menu);
    
    const filterItem = (categItem) => {
        const updatedItems = Menu.filter((curElem) => {
            return curElem.category === categItem;
        });

        setItems(updatedItems);
    }

    return (
        <>
            <h2 className="m-5 text-center main-heading">PRODUCTS</h2>
            
            <div className="menu-tabs container">
                <div className="menu-tab d-flex justify-content-around">
                    <button className="btn btn-outline-success" onClick={() => setItems(Menu)}>All Products</button>
                    <button className="btn btn-outline-success" onClick={() => filterItem('Cereals and Pulses')}>Cereals and Pulses</button>
                    <button className="btn btn-outline-success" onClick={() => filterItem('Oil and Oil seeds')}>Oil and Oil seeds</button>
                    <button className="btn btn-outline-success" onClick={() => filterItem('Fibres')}>Fibres</button>
                    <button className="btn btn-outline-success" onClick={() => filterItem('Spices')}>Spices</button>
                </div>
            </div>

            {/* my main items section  */}
            <div className="menu-items container-fluid mt-1">
                <div className="row">
                    <div className="col-11 mx-auto">
                        <div className="row my-5">
                            
                            {
                                items.map((elem) => {
                                    const { id, name, image, description, price } = elem;

                                    return (
                                    
                                        <div key={id} className="item1 col-12 col-md-6 col-lg-6 col-xl-4 p-4">
                                            <div className="row Item-inside">
                                                {/* for images */}
                                                <div className="col-12 col-md-12 col-lg-4 img-div">
                                                    <img src={image} alt={name} className="img-fluid"/>
                                                </div>

                                                {/* menu items description */}
                                                <div className="col-12 col-md-12 col-lg-8">
                                                    <div className="main-title pt-4 pb-3">
                                                        <h1>{name}</h1>
                                                        <p>{description }</p>
                                                    </div>
                                                    
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                        }

                             
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductGallery;