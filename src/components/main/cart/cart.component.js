import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getCartProducts, removeFromCart} from "../../../redux/cart/cartSlice";
import CartList from "./cartList";

function CartComponent() {
    const dispatch = useDispatch()
    const cartProducts = useSelector(state => state.cart.products)

    useEffect(() => {
        dispatch(getCartProducts())
    }, [dispatch])

    const handleRemoveFromCart = (id) => {
        dispatch(removeFromCart(id))
    }

    return (
        <div>
            <h2>Cart</h2>
            <CartList products={cartProducts} removeFromCart={handleRemoveFromCart}/>
        </div>
    );
}

export default CartComponent;
