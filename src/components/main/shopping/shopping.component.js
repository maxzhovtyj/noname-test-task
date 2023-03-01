import {useEffect} from "react";
import {useParams} from "react-router-dom";

import {useDispatch, useSelector} from "react-redux";
import SidebarCategoriesList from "./categories/sidebarCategoriesList";
import {fetchAllCategories} from "../../../redux/categories/categoriesFetch";
import {fetchProducts} from "../../../redux/products/productsFetch";
import ProductsList from "./products/productsList";

import classes from "./shopping.module.css"

function ShoppingComponent() {
    const {category} = useParams()
    const dispatch = useDispatch()

    const categories = useSelector(state => state.categories.categories)
    const categoriesStatus = useSelector(state => state.categories.status)

    const products = useSelector(state => state.products.products)
    const productsStatus = useSelector(state => state.products.status)

    useEffect(() => {
        dispatch(fetchAllCategories())
        dispatch(fetchProducts({category}))
    }, [category, dispatch])

    return (
        <div className={classes.shoppingPageContainer}>
            <aside className={classes.sidebar}>
                <SidebarCategoriesList status={categoriesStatus} categories={categories}/>
            </aside>
            <div>
                <ProductsList products={products} status={productsStatus}/>
            </div>
        </div>
    );
}

export default ShoppingComponent;
