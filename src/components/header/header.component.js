import classes from "./header.module.css"
import {Link as NavLink, useNavigate} from "react-router-dom";
import {useAuthContext} from "../../context/AuthContext";
import {useState} from "react";
import {AppBar, Button, IconButton, Menu, MenuItem, Toolbar, Typography} from "@mui/material";
import {AccountCircle} from "@mui/icons-material";
import {userSignOut} from "../../services/AuthService";

function HeaderComponent() {
    const {currentUser} = useAuthContext()
    const [anchorEl, setAnchorEl] = useState(null);

    const navigate = useNavigate()

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    }

    const handleNavigateToProfile = () => {
        navigate("/profile")
        setAnchorEl(null);
    };

    const handleSignOut = () => {
        userSignOut().then()
        setAnchorEl(null);
    };

    const AuthButtons = () => {
        return (
            <>
                <Button color="inherit" href={"/sign-in"}>Sign In</Button>
                <Button color="inherit" href={"/sign-up"}>Sign Up</Button>
            </>
        );
    }

    return (
        <AppBar position="static">
            <Toolbar className={classes.headerContainer}>
                <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                    <h2><NavLink to={"/"}>NONAME DIGITAL</NavLink></h2>
                </Typography>
                {currentUser ? (
                    <div>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleMenu}
                            color="inherit"
                        >
                            <AccountCircle/>
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorEl}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                        >
                            <MenuItem onClick={handleNavigateToProfile}>Profile</MenuItem>
                            <MenuItem onClick={handleSignOut}>Sign Out</MenuItem>
                        </Menu>
                    </div>
                ) : <AuthButtons/>}
            </Toolbar>
        </AppBar>
    );
}

export default HeaderComponent;
