import * as React from 'react';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import {Button} from "@mui/material";
import {NavLink} from "react-router-dom";

export default function SimpleSnackbar({handleClose, open, message, linkMessage, linkPath}) {
    const LinkButton = () => (
        <Button color={"primary"}><NavLink to={linkPath} style={{color: "inherit"}}>{linkMessage}</NavLink></Button>
    );

    const action = (
        <React.Fragment>
            {linkMessage ? <LinkButton/> : ""}
            <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={handleClose}
            >
                <CloseIcon fontSize="small"/>
            </IconButton>
        </React.Fragment>
    );

    return (
        <div>
            <Snackbar
                open={open}
                autoHideDuration={4000}
                onClose={handleClose}
                message={message}
                action={action}
            />
        </div>
    );
}
