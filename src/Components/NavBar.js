import React from 'react';
import { AppBar, Button, Typography, Toolbar, IconButton } from '@material-ui/core';

function NavBar(props) {
    return (
        <AppBar position="static" color="primary">
            <Toolbar>
                <IconButton edge="start" color="inherit" aria-label="menu">
                </IconButton>
                <Typography variant="h6">
                    HomeCook
                        </Typography>
                <Button color="inherit">Order {props.numItems}</Button>
            </Toolbar>
        </AppBar>
    )
}

export default NavBar;