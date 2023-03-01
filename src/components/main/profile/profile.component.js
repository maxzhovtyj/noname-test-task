import {userSignOut} from "../../../services/AuthService";
import {Button, Divider} from "@mui/material";
import {getAppAuth} from "../../../context/AuthContext";
import EmailIcon from '@mui/icons-material/Email';

import classes from "./profile.module.css"

function ProfileComponent() {
    const auth = getAppAuth()

    return (
        <div>
            <h2>Profile</h2>
            <h4 className={classes.emailLabel}><EmailIcon/> Email:</h4>
            <p className={classes.emailValue}>{auth.currentUser?.email}</p>
            <Divider/>
            <Button onClick={userSignOut} className={classes.signOutBtn} variant={"outlined"}>Sign out</Button>
        </div>
    );
}

export default ProfileComponent;
