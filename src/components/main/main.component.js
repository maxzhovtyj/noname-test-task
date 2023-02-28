import classes from './main.module.css'
import {Route, Routes} from "react-router-dom";
import PrivateRoute from "../../utils/PrivateRoute";
import HomePageComponent from "./homePage/homePage.component";
import SignInComponent from "./signIn/signIn.component";
import SignUpComponent from "./signUp/signUp.component";
import ProfileComponent from "./profile/profile.component";
import CartComponent from "./cart/cart.component";
import ProductComponent from "./product/product.component";
import ShoppingComponent from "./shopping/shopping.component";

function MainComponent() {
    return (
        <div className={classes.main}>
            <Routes>
                <Route path={"/"} element={<HomePageComponent/>}/>
                <Route path={"/sign-in"} element={<SignInComponent/>}/>
                <Route path={"/sign-up"} element={<SignUpComponent/>}/>
                <Route path={"/product/:id"} element={<ProductComponent/>}/>
                <Route path={"/shopping/:category"} element={<ShoppingComponent/>}/>

                <Route element={<PrivateRoute/>}>
                    <Route path={"/profile"} element={<ProfileComponent/>}/>
                    <Route path={"/cart"} element={<CartComponent/>}/>
                </Route>
            </Routes>
        </div>
    );
}

export default MainComponent;
