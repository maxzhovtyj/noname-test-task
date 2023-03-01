import React from 'react';
import CircularIndeterminate from "../../../../UI/circularProgress";
import ProductItem from "./productItem";

import classes from "./products.module.css"

function ProductsList({status, products, handleBuy}) {
    if (status === "pending") {
        return <CircularIndeterminate/>
    }

    return (
        <div className={classes.productsList}>
            {products.map(item => <ProductItem key={item.id} product={item} handleBuy={handleBuy}/>)}
        </div>
    );
}

export default ProductsList;
