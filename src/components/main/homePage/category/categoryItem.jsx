import React from 'react';

import classes from "./categories.module.css"
import {useNavigate} from "react-router-dom";

function CategoryItem({category}) {
    const navigate = useNavigate()

    const handleNavigateToCategory = () => {
      navigate(`/shopping/${category}`)
    }

    return (
        <div className={classes.categoryItem} onClick={handleNavigateToCategory}>
            <p>{category}</p>
        </div>
    );
}

export default CategoryItem;
