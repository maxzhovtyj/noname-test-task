import {useState} from "react";
import {useAuthContext} from "../../context/AuthContext";
import {userSignOut} from "../../services/AuthService";

import {Link as NavLink, useNavigate} from "react-router-dom";
import {
    AppBar,
    Button,
    IconButton,
    ListItemIcon,
    ListItemText,
    Menu,
    MenuItem,
    Toolbar,
    Typography
} from "@mui/material";
import {AccountCircle} from "@mui/icons-material";
import LogoutIcon from '@mui/icons-material/Logout';
import PersonIcon from '@mui/icons-material/Person';

import classes from "./header.module.css"

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
                    <NavLink to={"/"}>NONAME DIGITAL</NavLink>
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
                            <MenuItem onClick={handleNavigateToProfile}>
                                <ListItemIcon>
                                    <PersonIcon fontSize="small"/>
                                </ListItemIcon>
                                <ListItemText>Profile</ListItemText>
                            </MenuItem>

                            <MenuItem onClick={handleSignOut}>
                                <ListItemIcon>
                                    <LogoutIcon fontSize="small"/>
                                </ListItemIcon>
                                <ListItemText>Sign Out</ListItemText>
                            </MenuItem>
                        </Menu>
                    </div>
                ) : <AuthButtons/>}
            </Toolbar>
        </AppBar>
    );
}

export default HeaderComponent;
