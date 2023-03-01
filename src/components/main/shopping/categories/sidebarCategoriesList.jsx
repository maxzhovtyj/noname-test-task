import React from 'react';
import {NavLink} from "react-router-dom";
import CircularIndeterminate from "../../../../UI/circularProgress";

function SidebarCategoriesList({status, categories}) {
    if (status === "pending") {
        return <CircularIndeterminate/>
    }

    if (status === "rejected") {
        return <p>Something went wrong...</p>
    }

    return (
        <ul>
            {categories.map(item => <li key={item}><NavLink to={`/shopping/${item}`}>{item}</NavLink></li>)}
        </ul>
    );
}

export default SidebarCategoriesList;
