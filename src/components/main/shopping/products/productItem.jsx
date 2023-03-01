import React from 'react';

function ProductItem({product}) {
    const {title} = product

    return (
        <div>{title}</div>
    );
}

export default ProductItem;
