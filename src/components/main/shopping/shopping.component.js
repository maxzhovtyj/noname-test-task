import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";

import {useDispatch, useSelector} from "react-redux";
import Sidebar from "./sidebar/sidebar";
import {fetchAllCategories} from "../../../redux/categories/categoriesFetch";
import {fetchAllProducts} from "../../../redux/products/productsFetch";
import ProductsList from "./products/productsList";

import classes from "./shopping.module.css"
import {addToCart} from "../../../redux/cart/cartSlice";
import {useAuthContext} from "../../../context/AuthContext";
import {useSnackbarContext} from "../../../context/SnackbarContext";
import {FormControl, InputLabel, MenuItem, Select} from "@mui/material";

import {popularASC, popularDESC, priceASC, priceDESC, sortProducts} from "../../../redux/products/productsSlice";

function ShoppingComponent() {
    const {category} = useParams()
    const [sortOption, setSortOption] = useState("")

    const {currentUser} = useAuthContext();
    const {setMessage, handleClick, setLink} = useSnackbarContext()

    const dispatch = useDispatch()

    const categories = useSelector(state => state.categories.categories)
    const categoriesStatus = useSelector(state => state.categories.status)

    const products = useSelector(state => state.products.products)
    const productsStatus = useSelector(state => state.products.status)

    useEffect(() => {
        dispatch(fetchAllCategories())
        dispatch(fetchAllProducts({category}))
    }, [category, dispatch])

    const handleChangeSortOption = (event) => {
        setSortOption(event.target.value);
        dispatch(sortProducts(event.target.value))
    };

    const handleBuyProduct = (item) => {
        if (!currentUser) {
            setMessage("Sign in to buy product")
            setLink({path: "/sign-in", message: "Sign In"})
            handleClick()
            return
        }

        dispatch(addToCart(item))

        setMessage("Product added to cart")
        setLink({path: "/cart", message: "Cart"})
        handleClick()
    }

    return (
        <div className={classes.shoppingPageContainer}>
            <Sidebar status={categoriesStatus} categories={categories} currentCategory={category}/>
            <div className={classes.products}>
                <FormControl fullWidth>
                    <InputLabel id="sort-label">Sort</InputLabel>
                    <Select
                        labelId="sort-label"
                        id="select-sort-option"
                        label="Sort"
                        value={sortOption}
                        defaultValue={""}
                        onChange={handleChangeSortOption}
                    >
                        <MenuItem value={""}>None</MenuItem>
                        <MenuItem value={priceDESC}>Expensive - cheap</MenuItem>
                        <MenuItem value={priceASC}>Cheap - expensive</MenuItem>
                        <MenuItem value={popularASC}>Popular - unpopular</MenuItem>
                        <MenuItem value={popularDESC}>Unpopular - popular</MenuItem>
                    </Select>
                </FormControl>
                <ProductsList products={products} status={productsStatus} handleBuy={handleBuyProduct}/>
            </div>
        </div>
    );
}

export default ShoppingComponent;
