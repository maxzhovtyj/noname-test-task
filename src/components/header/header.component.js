import classes from "./header.module.css"
import {Link as NavLink} from "react-router-dom";
import {useAuthContext} from "../../context/AuthContext";

function HeaderComponent() {
    const {currentUser} = useAuthContext()

    return (
        <header>
            <div className={classes.headerContainer}>
                <h2><NavLink to={"/"}>NONAME DIGITAL</NavLink></h2>
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
            </div>
        </header>
    );
}

export default HeaderComponent;
