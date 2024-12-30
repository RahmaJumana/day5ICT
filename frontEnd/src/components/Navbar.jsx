import React from 'react'
import Toolbar from '@mui/material/Toolbar';
import AppBar from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
          <AppBar color='inherit'>
              <Toolbar>
                  <IconButton
                      size="large"
                      edge="start"
                      color="inherit"
                      aria-label="menu"
                      sx={{ mr: 2 }}
                  >
                  </IconButton>
                  <Typography variant="h4" color="success" align='left' component="div" sx={{ flexGrow: 1 }}>
                     <b>Employee</b> 
                  </Typography>
                  <Link to='/add'>
                      <Button variant="contained" color="success">Add</Button>
                  </Link>&nbsp;&nbsp;&nbsp;
                  <Link to='/view'>
                      <Button variant="contained" color="success">View</Button>
                  </Link>&nbsp;&nbsp;&nbsp;
              </Toolbar>
          </AppBar>
    </div>
  )
}

export default Navbar
