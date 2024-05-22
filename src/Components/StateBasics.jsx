import { Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const StateBasics = () => {
    var[fname,setfname]=useState("Jose")
    const[val,setVal]=useState()
    const handleinput=(e)=>{
        console.log(e.target.value)
        setfname(e.target.value)
    }
    const submitHandler=()=>{
        console.log("Clicked")
        setVal(fname)
    }

  return (
    <div>
    
      <Typography variant='h4'>welcome {val}</Typography> <br />
      <TextField variant='outlined' label="Enter ur name " onChange={handleinput}></TextField><br/>
      <Button variant="contained" onClick={submitHandler}>Submit</Button>
    </div>
  )
}

export default StateBasics
