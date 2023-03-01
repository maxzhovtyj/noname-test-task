import React, {useEffect} from 'react';
import CategoriesList from "./category/categoriesList";
import {useDispatch, useSelector} from "react-redux";
import {fetchAllCategories} from "../../../redux/categories/categoriesFetch";

function HomePageComponent() {
    const dispatch = useDispatch()
    const categories = useSelector(state => state.categories.categories)
    const categoriesStatus = useSelector(state => state.categories.status)

    useEffect(() => {
        dispatch(fetchAllCategories())
    }, [dispatch])

    return (
        <div>
            <h2>Home page</h2>
            <CategoriesList status={categoriesStatus} categories={categories}/>
        </div>
    );
}

export default HomePageComponent;
