import { TextField, Typography } from '@mui/material'
import React from 'react'

const Signup = () => {
  return (
    <div>
      <br /><br /><br /><br /><br />
      <Typography variant='h3'>SIGNUP</Typography>
     <TextField  label="Username" variant="outlined" /><br /><br />
     <TextField  label="Name" variant="outlined" /><br /><br />
     <TextField  label="Password" variant="outlined" /><br /><br />
  <TextField  label="Place" variant="outlined" />
    </div>
  )
}

export default Signup
