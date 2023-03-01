import {userSignOut} from "../../../services/AuthService";
import {Button, Divider} from "@mui/material";
import EmailIcon from '@mui/icons-material/Email';

import classes from "./profile.module.css"
import {useAuthContext} from "../../../context/AuthContext";

function ProfileComponent() {
    const {currentUser} = useAuthContext()

    return (
        <div>
            <h2>Profile</h2>
            <h4 className={classes.emailLabel}><EmailIcon/> Email:</h4>
            <p className={classes.emailValue}>{currentUser.email}</p>
            <Divider/>
            <Button onClick={userSignOut} className={classes.signOutBtn} variant={"outlined"}>Sign out</Button>
        </div>
    );
}

export default ProfileComponent;
