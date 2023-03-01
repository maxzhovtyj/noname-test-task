import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";
import {signIn, signInGoogle} from "../../../services/AuthService";
import {Button, FormGroup, TextField} from "@mui/material";

import classes from "./signIn.module.css"
import GoogleButton from "react-google-button";
import {useSnackbarContext} from "../../../context/SnackbarContext";



function SignInComponent() {
    const {setMessage, handleClick} = useSnackbarContext()

    const navigate = useNavigate();
    const [signInForm, setSignInForm] = useState({
        email: "",
        password: "",
    })

    const [errors, setErrors] = useState({
        email: false,
        password: false,
    })

    const handleSignInForm = (event) => {
        setSignInForm({...signInForm, [event.target.name]: event.target.value})
    }

    const validateSignIn = () => {
        let tmp = {
            email: !signInForm.email,
            password: !signInForm.password,
        }

        setErrors(tmp)

        return Object.values(tmp).every(item => item === false)
    }

    const handleSignIn = (event) => {
        if (!validateSignIn()) {
            setMessage("Sign In validation failed")
            handleClick()
            return
        }

        event.preventDefault()
        signIn(signInForm.email, signInForm.password).then(res => {
            if (res.user && res.user.email) {
                navigate("/")
            } else {
                setMessage(res)
                handleClick()
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
                           onChange={handleSignInForm} fullWidth error={errors.email}/>

                <TextField label={"Password"} name="password" type="password" placeholder="Password"
                           value={signInForm.password} fullWidth error={errors.password}
                           onChange={handleSignInForm}/>

                <Button onClick={handleSignIn} variant={"outlined"}>Sign In</Button>
            </FormGroup>

            <span className={classes.signInOr}>or</span>

            <div className={classes.googleSignInBtn}>
                <GoogleButton onClick={handleSignInGoogle}/>
                <small>Does not work on production</small>
            </div>
        </div>
    );
}

export default SignInComponent;
