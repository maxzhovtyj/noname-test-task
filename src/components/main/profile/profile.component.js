import {userSignOut} from "../../../AuthService";
import {Button} from "@mui/material";

function ProfileComponent() {
    return (
        <div>
            <h2>Profile component</h2>
            <Button onClick={userSignOut} variant={"outlined"}>Sign out</Button>
        </div>
    );
}

export default ProfileComponent;
