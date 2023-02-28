import {useSnackbarContext} from "../../../context/SnackbarContext";
import {Button} from "@mui/material";

function ShoppingComponent() {
    const {setMessage, handleClick} = useSnackbarContext()

    const handleSnackbar = () => {
        setMessage("Test")
        handleClick()
    }

    return (
        <div>
            <h2>Shopping page</h2>
            <Button onClick={handleSnackbar} variant={"outlined"}>Snackbar</Button>
        </div>
    );
}

export default ShoppingComponent;
