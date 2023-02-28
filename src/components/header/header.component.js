import classes from "./header.module.css"
import {Link as NavLink} from "react-router-dom";
import {useAuthContext} from "../../Auth";

function HeaderComponent() {
    const {currentUser} = useAuthContext()

    return (
        <header className={classes.headerContainer}>
            <h1><NavLink to={"/"}>NONAME DIGITAL</NavLink></h1>
            <nav>
                <ul className={classes.navList}>
                    <li><NavLink to={"/cart"}>Cart</NavLink></li>

                    {
                        currentUser
                            ? <li><NavLink to={"/profile"}>Profile</NavLink></li>
                            :
                            <>
                                <li><NavLink to={"/sign-in"}>Sign In</NavLink></li>
                                <li><NavLink to={"/sign-up"}>Sign Up</NavLink></li>
                            </>
                    }
                </ul>
            </nav>
        </header>
    );
}

export default HeaderComponent;
