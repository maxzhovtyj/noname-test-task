import {useEffect, useState} from "react";
import {NavLink} from "react-router-dom";

import classes from "./shopping.module.css"

function ShoppingComponent() {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetch('https://dummyjson.com/products/categories')
            .then(res => res.json())
            .then(setCategories);
    }, [])

    return (
        <div className={classes.shoppingPageContainer}>
            <aside className={classes.sidebar}>
                <ul>
                    {categories.map(item => <li key={item}><NavLink to={`/shopping/${item}`}>{item}</NavLink></li>)}
                </ul>
            </aside>
            <div>
                <h2>Products</h2>
            </div>
        </div>
    );
}

export default ShoppingComponent;
