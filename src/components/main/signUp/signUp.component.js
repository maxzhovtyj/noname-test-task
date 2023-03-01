import React, {useState} from 'react';
import {useNavigate} from "react-router-dom"
import {Button, FormGroup, TextField} from "@mui/material";
import {signUp} from "../../../services/AuthService";

import classes from "./signUp.module.css";
import {useSnackbarContext} from "../../../context/SnackbarContext";

function SignUpComponent() {
    const {handleClick, setMessage} = useSnackbarContext()

    const navigate = useNavigate();

    const [signUpForm, setSignUpForm] = useState({
        email: "",
        password: "",
    })
    const [errors, setErrors] = useState({
        email: false,
        password: false,
    })

    const handleSignUpForm = (event) => {
        setSignUpForm({...signUpForm, [event.target.name]: event.target.value})
    }

    const validateSignUp = () => {
        let tmp = {
            email: !signUpForm.email,
            password: !signUpForm.password,
        }

        setErrors(tmp)

        return Object.values(tmp).every(item => item === false)
    }

    const handleSignUp = () => {
        if (!validateSignUp()) {
            setMessage("Sign Up validation failed")
            handleClick()
            return
        }

        signUp(signUpForm.email, signUpForm.password).then(res => {
            if (res.user && res.user.email) {
                navigate("/")
            } else {
                setMessage(res)
                handleClick()
            }
        })
    }

    return (
        <div className={classes.signUpContainer}>
            <h2>Sign up</h2>
            <FormGroup className={classes.signUpForm}>
                <TextField label={"Email"} name="email" placeholder="Email" value={signUpForm.email}
                           onChange={handleSignUpForm} fullWidth error={errors.email}/>

                <TextField label={"Password"} name="password" type="password" placeholder="Password"
                           value={signUpForm.password} fullWidth error={errors.password}
                           onChange={handleSignUpForm}/>

                <Button onClick={handleSignUp} variant={"outlined"}>Sign Up</Button>
            </FormGroup>
        </div>
    );
}

export default SignUpComponent;
