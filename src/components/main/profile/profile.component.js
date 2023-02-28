import {userSignOut} from "../../../services/AuthService";
import {Button} from "@mui/material";
import {getAppAuth} from "../../../context/AuthContext";

function ProfileComponent() {
    const auth = getAppAuth()

    return (
        <div>
            <h2>Profile component</h2>
            <p>Email:</p>
            <p>{auth.currentUser.email}</p>
            <Button onClick={userSignOut} variant={"outlined"}>Sign out</Button>
        </div>
    );
}

export default ProfileComponent;
