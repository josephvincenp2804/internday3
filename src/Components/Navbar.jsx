import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
    <AppBar>
        <Toolbar>
          <Typography variant='h6'>myapp</Typography>
          <Button variant="contained" color="success"><Link to='/signup'style={{color:'white'}}>Signup</Link></Button>&nbsp;&nbsp;
          <Button variant="contained" color="error"><Link to='/login' style={{color:'white'}}>Login</Link></Button>&nbsp;&nbsp;
          <Button variant="contained" color="primary"><Link to='/s'style={{color:'white'}}>State</Link></Button>&nbsp;&nbsp;
          <Button variant="contained" color="secondary"><Link to='/c'style={{color:'white'}}>Counter</Link></Button>&nbsp;&nbsp;
          <Button variant="contained" color="error"><Link to='/u'style={{color:'white'}}>UseButton</Link></Button>
          <Button variant="contained" color="success"><Link to='/l'style={{color:'white'}}>ListMap</Link></Button>
          <Button variant="contained" color="warning"><Link to='/m'style={{color:'white'}}>Mapping</Link></Button>
          <Button variant="contained" color="error"><Link to='/a'style={{color:'white'}}>Api</Link></Button>
          <Button variant="contained" color="error"><Link to='/card'style={{color:'white'}}>CardView</Link></Button>
        </Toolbar>
    </AppBar> 
    <br /><br /><br /><br /><br />
    </div>
  )
}

export default Navbar
