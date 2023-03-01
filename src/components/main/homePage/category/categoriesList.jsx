import React from 'react';

import CategoryItem from "./categoryItem";
import CircularIndeterminate from "../../../../UI/circularProgress";

import classes from "./categories.module.css"

function CategoriesList({categories, status}) {
    if (status === "pending") {
        return <CircularIndeterminate/>
    }

    if (!categories || categories?.length === 0) {
        return ""
    }

    return (
        <div className={classes.categoriesList}>
            {categories.map(item => <CategoryItem key={item.title} category={item}/>)}
        </div>
    );
}

export default CategoriesList;
