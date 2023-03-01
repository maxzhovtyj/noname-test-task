import React from 'react';

import classes from "./categories.module.css"
import {useNavigate} from "react-router-dom";

function CategoryItem({category}) {
    const navigate = useNavigate()

    const handleNavigateToCategory = () => {
      navigate(`/shopping/${category.title}`)
    }

    return (
        <div className={classes.categoryItem} onClick={handleNavigateToCategory}>
            <img src={category.thumbnail} alt="category-img"/>
            <p>{category.title}</p>
        </div>
    );
}

export default CategoryItem;
