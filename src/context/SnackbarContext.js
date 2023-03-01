import {createContext, useContext, useState} from "react";
import SimpleSnackbar from "../UI/snackbar";

function noop() {
}

export const SnackbarContext = createContext({
    setMessage: noop(),
    handleClick: noop(),
    setLink: noop(),
})

export const useSnackbarContext = () => {
    return useContext(SnackbarContext)
}

export const SnackbarProvider = ({children}) => {
    const [open, setOpen] = useState(false);
    const [message, setMessage] = useState("")
    const [link, setLink] = useState({
        message: "",
        path: "",
    })

    const handleClick = () => {
        setOpen(true);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    return (
        <SnackbarContext.Provider
            value={{
                setMessage: setMessage,
                handleClick: handleClick,
                setLink: setLink,
            }}
        >
            {children}
            <SimpleSnackbar open={open} message={message} handleClose={handleClose} linkMessage={link.message}
                            linkPath={link.path}/>
        </SnackbarContext.Provider>
    );
}
