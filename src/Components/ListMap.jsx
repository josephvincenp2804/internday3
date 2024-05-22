import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'

const ListMap = () => {
    var[inp,setinp]=useState()
    var[data,setdata]=useState(["ICTAK"])



    const inputHandler=(e)=>{
        setinp(e.target.value)
        console.log(inp)
    }
    const add=()=>{
        console.log("CLk")
        setdata([...data,inp])
    }
  return (
    <div>
      <TextField variant="outlined" label="enter ur name" onChange={inputHandler} value={inp}/><br /><br />
      <Button variant="contained" onClick={add}>submit</Button>
      <ul>
        {data.map((v,i)=>{
            return <li>{v} </li>
        })}
      </ul>
    </div>
  )
}

export default ListMap
