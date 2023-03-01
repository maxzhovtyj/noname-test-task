import React from 'react';
import CartItem from "./cartItem/cartItem";

function CartList({products}) {
    if (!products.length) {
        return ""
    }

    return (
        <div>
            {products.map((item, index) => <CartItem key={index} product={item}/>)}
        </div>
    );
}

export default CartList;
