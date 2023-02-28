import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";
import {signIn, signInGoogle} from "../../../services/AuthService";
import {Button, FormGroup, TextField} from "@mui/material";

import classes from "./signIn.module.css"
import GoogleButton from "react-google-button";

function SignInComponent() {
    const navigate = useNavigate();
    const [signInForm, setSignInForm] = useState({
        email: "",
        password: "",
    })

    const handleSignInForm = (event) => {
        setSignInForm({...signInForm, [event.target.name]: event.target.value})
    }

    const handleSignIn = (event) => {
        event.preventDefault()
        signIn(signInForm.email, signInForm.password).then(res => {
            if (res.user && res.user.email) {
                navigate("/")
            }
        })
    }

    const handleSignInGoogle = (event) => {
        event.preventDefault()
        signInGoogle().then(res => {
            if (res.user && res.user.email) {
                navigate("/")
            }
        })
    }

    return (
        <div className={classes.signInContainer}>
            <h2>Sign in</h2>
            <FormGroup className={classes.signInForm}>
                <TextField label={"Email"} name="email" placeholder="Email" value={signInForm.email}
                           onChange={handleSignInForm} fullWidth/>

                <TextField label={"Password"} name="password" type="password" placeholder="Password"
                           value={signInForm.password} fullWidth
                           onChange={handleSignInForm}/>

            <Button onClick={handleSignIn} variant={"outlined"}>Sign In</Button>
            </FormGroup>

            <span className={classes.signInOr}>or</span>

            <div className={classes.googleSignInBtn}>
                <GoogleButton onClick={handleSignInGoogle}/>
            </div>
        </div>
    );
}

export default SignInComponent;
