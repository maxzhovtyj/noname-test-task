import React from 'react';
import CircularIndeterminate from "../../../../UI/circularProgress";
import ProductItem from "./productItem";

function ProductsList({status, products}) {
    if (status === "pending") {
        return <CircularIndeterminate/>
    }

    return (
        <div>
            {products.map(item => <ProductItem key={item.id} product={item}/>)}
        </div>
    );
}

export default ProductsList;
