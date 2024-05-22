import { Button, Typography } from '@mui/material'
import React, { useState } from 'react'

function Counter() {
    const [count, setCount] = useState(0);

const add=()=>{
    console.log("Clicked")
    setCount(count - 1);
}
const sub=()=>{
    console.log("Clicked")
    setCount(count + 1);
    
}
  return (
    <div>
      <Typography variant='h4'>NO:{count}</Typography> <br />
      <Button variant="contained"  onClick={add}>-</Button>
      <Button variant="contained" onClick={sub}>+</Button>
    </div>
  )

}

export default Counter
