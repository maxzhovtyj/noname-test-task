import React from 'react';

function CartItem({product}) {
    const {title} = product

    return (
        <div>
            <h3>{title}</h3>
        </div>
    );
}

export default CartItem;
