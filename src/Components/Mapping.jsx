import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React, { useState } from 'react'

const Mapping = () => {
    var[name,setname]=useState([
        {"sname":"maya","age":30},
        {"sname":"miya","age":25},
        {"sname":"mayavi","age":32}

    ])
  return (
    <div>
       
        <TableContainer >
      <Table>
        <TableHead>
            <TableRow>
               <TableCell align="left">Name</TableCell>
               <TableCell align="right">Age</TableCell>
           </TableRow>
        </TableHead>
          <TableBody>
          {name.map((v,i)=>{
            return (
            <TableRow>
            <TableCell align="left">{v.sname}</TableCell>
            <TableCell align="right">{v.age}</TableCell>
        </TableRow>)
        })}

          </TableBody>
          </Table>
          </TableContainer>
    </div>
  )
}

export default Mapping
