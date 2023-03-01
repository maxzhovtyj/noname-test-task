import * as React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';

import {useNavigate} from "react-router-dom";
import {IconButton} from "@mui/material";

export default function CategoriesBurgerMenu({categories}) {
    const navigate = useNavigate()
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleNavigate = (category) => {
        navigate(`/shopping/${category}`)
        handleClose()
    }

    return (
        <div>
            <IconButton
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >
                <MenuIcon/>
            </IconButton>
            <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                {categories.map(item =>
                    <MenuItem onClick={() => handleNavigate(item.title)}
                              key={item.title}
                              style={{textTransform: "uppercase"}}
                    >
                        {item.title}
                    </MenuItem>
                )}
            </Menu>
        </div>
    );
}
