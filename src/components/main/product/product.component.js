import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {fetchProduct} from "../../../redux/products/productsFetch";
import CircularIndeterminate from "../../../UI/circularProgress";

function ProductComponent() {
    const {id} = useParams()

    const dispatch = useDispatch()
    const product = useSelector(state => state.products.product)
    const productStatus = useSelector(state => state.products.status)

    useEffect(() => {
        dispatch(fetchProduct({id}))
    }, [dispatch, id])

    if (productStatus === "pending") {
        return <CircularIndeterminate/>
    }

    return (
        <div>
            {product.title}
        </div>
    );
}

export default ProductComponent;
