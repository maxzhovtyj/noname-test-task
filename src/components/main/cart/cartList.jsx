import React from 'react';
import {useNavigate} from "react-router-dom";

import ProductItem from "../../../UI/productItem/productItem";
import {Button} from "@mui/material";

import classes from "./cart.module.css"

function CartList({products, removeFromCart}) {
    const navigate = useNavigate()

    const navigateToHomePage = () => {
      navigate("/")
    }

    if (!products.length) {
        return (
            <div>
                <p className={classes.emptyCart}>Your cart is empty</p>
                <Button onClick={navigateToHomePage} variant={"outlined"}>To Shop</Button>
            </div>
        );
    }

    return (
        <div className={classes.cartList}>
            {products.map((item, index) => (
                <ProductItem key={index} product={item} order remove onRemove={removeFromCart}/>)
            )}
        </div>
    );
}

export default CartList;
