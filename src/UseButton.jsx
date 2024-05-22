import { Button, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'

const UseButton = () => {
var[x,setX]=useState();

const inpt1 =()=>{

    setX("Pottan")
}

const inpt2 =()=>{
    setX("Mandan")
}

const inpt3 =()=>{
    setX("Nallavan")
}

//refersh
useEffect(()=>{
    
})
  return (
    <div>
      <Typography variant='h4'>You are {x}</Typography> <br />
      <Button variant="contained" onClick={inpt1}>A</Button>&nbsp;&nbsp;
      <Button variant="contained"onClick={inpt2}>B</Button>&nbsp;&nbsp;
      <Button variant="contained"onClick={inpt3}>C</Button>
    </div>
  )
}

export default UseButton
