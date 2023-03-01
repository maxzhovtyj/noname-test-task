import React from 'react';

import {Link} from "react-router-dom";

import ProductRating from "../rating";

import {Button, IconButton} from "@mui/material";
import ClearIcon from '@mui/icons-material/Clear';

import classes from "./productItem.module.css"

function ProductItem({product, handleBuy, remove, onRemove, order = false}) {
    const {id, title, thumbnail, price, rating} = product

    const handleRemoveProduct = () => {
        onRemove(product.id)
    }

    const RemoveIcon = () => {
        if (remove) {
            return (
                <IconButton onClick={handleRemoveProduct} className={classes.productRemoveFromCart}>
                    <ClearIcon/>
                </IconButton>
            );
        }
    }

    const ResolveButton = () => {
        if (!order) {
            return (
                <Button onClick={() => handleBuy(product)} className={classes.buyBtn}>Buy Now</Button>
            );
        }
    }

    return (
        <div className={classes.productItem}>
            <RemoveIcon/>
            <Link to={`/product/${id}`}>
                <img className={classes.productItemImg} src={thumbnail || ""} alt="img"/>
            </Link>
            <div className={classes.productInfo}>

                    <h3 className={classes.productTitle}>
                        <Link to={`/product/${id}`}>
                            {title}
                        </Link>
                    </h3>

                <div className={classes.productItemBottomInfo}>
                    <h6 className={classes.productPrice}>{price} $</h6>
                    <ProductRating value={rating}/>
                    <ResolveButton/>
                </div>
            </div>
        </div>
    );
}

export default ProductItem;
