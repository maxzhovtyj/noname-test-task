import React, {useState} from 'react';
import {useNavigate} from "react-router-dom"
import {Button, FormGroup, TextField} from "@mui/material";
import {signUp} from "../../../services/AuthService";

import classes from "./signUp.module.css";

function SignUpComponent() {
    const navigate = useNavigate();

    const [signUpForm, setSignUpForm] = useState({
        email: "",
        password: "",
    })

    const handleSignUpForm = (event) => {
        setSignUpForm({...signUpForm, [event.target.name]: event.target.value})
    }

    const handleSignUp = () => {
        signUp(signUpForm.email, signUpForm.password).then(res => {
            if (res.user && res.user.email) {
                navigate("/")
            }
        })
    }

    return (
        <div className={classes.signUpContainer}>
            <h2>Sign up</h2>
            <FormGroup className={classes.signUpForm}>
                <TextField label={"Email"} name="email" placeholder="Email" value={signUpForm.email}
                           onChange={handleSignUpForm} fullWidth/>

                <TextField label={"Password"} name="password" type="password" placeholder="Password"
                           value={signUpForm.password} fullWidth
                           onChange={handleSignUpForm}/>

                <Button onClick={handleSignUp} variant={"outlined"}>Sign Up</Button>
            </FormGroup>
        </div>
    );
}

export default SignUpComponent;
