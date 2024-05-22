import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow  } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Api = () => {
    var[user,setUser]=useState([])
    useEffect(()=>{ axios.get("https://jsonplaceholder.typicode.com/users")
    .then((respones)=>{
        console.log(respones.data)
        setUser(respones.data)
},[])
   
    })
  return (
    <div>
      
      <TableContainer >
      <Table>
        <TableHead>
            <TableRow>
               <TableCell align="left">ID</TableCell>
               <TableCell align= "center">Name</TableCell>
               <TableCell align="right">City</TableCell>
           </TableRow>
        </TableHead>
          <TableBody>
          {user.map((v,i)=>{
            return (
            <TableRow>
            <TableCell align="left">{v.id}</TableCell>
            <TableCell align= "center">{v.name}</TableCell>
            <TableCell align="right">{v.address.city}</TableCell>
        </TableRow>)
        })}

          </TableBody>
          </Table>
          </TableContainer>
    </div>
  )
}

export default Api
