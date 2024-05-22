import { TextField, Typography } from '@mui/material'
import React from 'react'

const Login = () => {
  return (
    <div><br /><br /><br /><br /><br />
    <Typography variant='h3'>LOGIN</Typography>
     <TextField  label="Username" variant="outlined" /><br /><br />
  <TextField  label="Password" variant="outlined" />
    </div>
  )
}

export default Login
