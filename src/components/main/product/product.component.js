import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {fetchProduct} from "../../../redux/products/productsFetch";
import CircularIndeterminate from "../../../UI/circularProgress";

import classes from "./product.module.css"
import ProductRating from "../../../UI/rating";
import {addToCart} from "../../../redux/cart/cartSlice";
import {useSnackbarContext} from "../../../context/SnackbarContext";
import {useAuthContext} from "../../../context/AuthContext";
import {Button} from "@mui/material";

function ProductComponent() {
    const {id} = useParams()

    const {currentUser} = useAuthContext()
    const {setMessage, setLink, handleClick} = useSnackbarContext()

    const dispatch = useDispatch()
    const product = useSelector(state => state.products.product)
    const productStatus = useSelector(state => state.products.status)

    useEffect(() => {
        dispatch(fetchProduct({id}))
    }, [dispatch, id])

    if (productStatus === "pending") {
        return <CircularIndeterminate/>
    }

    const handleBuyProduct = () => {
        if (!currentUser) {
            setMessage("Sign in to buy product")
            setLink({path: "/sign-in", message: "Sign In"})
            handleClick()
            return
        }

        dispatch(addToCart(product))

        setMessage("Product added to cart")
        setLink({path: "/cart", message: "Cart"})
        handleClick()
    }

    return (
        <div>
            <div className={classes.productContainer}>
                <img src={product.thumbnail} alt="product" className={classes.productImg}/>
                <div className={classes.productInfo}>
                    <h2 className={classes.productTitle}>{product.title}</h2>
                    <p>Brand - <strong>{product.brand}</strong></p>
                    <p>Category - <strong>{product.category}</strong></p>
                    <p><strong>{product.price} $</strong></p>
                    <ProductRating value={product.rating}/>
                    <Button onClick={handleBuyProduct} variant={"outlined"}>Buy now</Button>
                </div>
            </div>
            <h4>Description:</h4>
            <p>{product.description}</p>
        </div>
    );
}

export default ProductComponent;
