import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getCartProducts} from "../../../redux/cart/cartSlice";
import CartList from "./cartList";

function CartComponent() {
    const dispatch = useDispatch()
    const cartProducts = useSelector(state => state.cart.products)

    useEffect(() => {
        dispatch(getCartProducts())
    }, [dispatch])

    return (
        <div>
            <h2>Cart</h2>
            <CartList products={cartProducts}/>
        </div>
    );
}

export default CartComponent;
