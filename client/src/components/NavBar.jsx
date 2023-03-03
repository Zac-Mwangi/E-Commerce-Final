import React from "react";
import { Typography, AppBar, Button, CssBaseline, Toolbar, Stack } from '@mui/material'
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import IconButton from "@mui/material/IconButton";
import { NavLink } from 'react-router-dom'

export default function NavBar() {

    return (
        <div>
            <CssBaseline />
            <AppBar position='static'>
                <Toolbar style={{ margin: "5px" }}>
                    <IconButton size='large' edge='start' color='inherit' aria-label='logo'>
                        
                        <NavLink to='/'><LaptopMacIcon /></NavLink>
                    </IconButton>
                    <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
                    </Typography>
                    <Stack direction='row' spacing={2}>
                        <Button color='inherit'>
                            <NavLink to='/'>Home</NavLink>
                        </Button>
                        <Button color='inherit'>
                            <NavLink to='/add'>Add Product</NavLink>
                        </Button>
                    </Stack>
                </Toolbar>
            </AppBar>
        </div>
    )
}
