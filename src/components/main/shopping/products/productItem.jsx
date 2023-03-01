import React from 'react';

import {Button} from "@mui/material";
import classes from "./products.module.css"
import {useNavigate} from "react-router-dom";

function ProductItem({product, handleBuy}) {
    const navigate = useNavigate()
    const {id, title, thumbnail, price} = product

    const toProductPage = () => {
        navigate(`/product/${id}`)
    }

    return (
        <div className={classes.productItem} onClick={toProductPage}>
            <img className={classes.productItemImg} src={thumbnail || ""} alt="img"/>
            <div className={classes.productInfo}>
                <h3 className={classes.productTitle}>{title}</h3>
                <h6 className={classes.productPrice}>{price} $</h6>
                <Button onClick={() => handleBuy(product)} className={classes.buyBtn}>Buy Now</Button>
            </div>
        </div>
    );
}

export default ProductItem;
