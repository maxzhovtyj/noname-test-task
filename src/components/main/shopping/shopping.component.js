import {useEffect} from "react";
import {useParams} from "react-router-dom";

import {useDispatch, useSelector} from "react-redux";
import SidebarCategoriesList from "./categories/sidebarCategoriesList";
import {fetchAllCategories} from "../../../redux/categories/categoriesFetch";
import {fetchAllProducts} from "../../../redux/products/productsFetch";
import ProductsList from "./products/productsList";

import classes from "./shopping.module.css"
import {addToCart} from "../../../redux/cart/cartSlice";
import {useAuthContext} from "../../../context/AuthContext";
import {useSnackbarContext} from "../../../context/SnackbarContext";

function ShoppingComponent() {
    const {currentUser} = useAuthContext();
    const {setMessage, handleClick, setLink} = useSnackbarContext()
    const {category} = useParams()
    const dispatch = useDispatch()

    const categories = useSelector(state => state.categories.categories)
    const categoriesStatus = useSelector(state => state.categories.status)

    const products = useSelector(state => state.products.products)
    const productsStatus = useSelector(state => state.products.status)

    useEffect(() => {
        dispatch(fetchAllCategories())
        dispatch(fetchAllProducts({category}))
    }, [category, dispatch])

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
            <aside className={classes.sidebar}>
                <SidebarCategoriesList status={categoriesStatus} categories={categories}/>
            </aside>
            <div>
                <ProductsList products={products} status={productsStatus} handleBuy={handleBuyProduct}/>
            </div>
        </div>
    );
}

export default ShoppingComponent;
