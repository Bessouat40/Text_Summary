import AppBar from '@mui/material/AppBar';
import { Box, textAlign } from '@mui/system';
import React, { Component } from 'react';
import Avatar from '@mui/material/Avatar';
import avatar from '../logo.png'
import { Typography } from '@mui/material';
import Toolbar from '@mui/material/Toolbar';

export default class NavBar extends Component {
    render () {
        return (
            <Box sx={{ flexGrow: 2 }}>
      <AppBar position="static">
        <Toolbar>
      <Avatar alt="Logo" src={avatar} />
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} textAlign="center">
            Text Summary application
          </Typography>
          </Toolbar>
      </AppBar>
      </Box>
        )
    }
}