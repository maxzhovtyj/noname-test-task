import React from 'react';
import {NavLink} from "react-router-dom";
import CircularIndeterminate from "../../../../UI/circularProgress";

import classes from "./sidebar.module.css"

function Sidebar({status, categories, currentCategory}) {
    if (status === "pending") {
        return <CircularIndeterminate/>
    }

    if (status === "rejected") {
        return <p>Something went wrong...</p>
    }

    return (
        <aside className={classes.sidebar}>
            <ul className={classes.sidebarCategoriesList}>
                {categories.map((item, index) =>
                    <li key={index} className={classes.sidebarCategoryItem}>
                        <NavLink
                            to={`/shopping/${item.title}`}
                            className={(currentCategory === item.title) ? classes.activeCategory : ""}
                        >{item.title}</NavLink>
                    </li>
                )}
            </ul>
        </aside>
    );
}

export default Sidebar;
