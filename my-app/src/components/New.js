import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios'
import { useState, useEffect } from 'react';
import LazyShow from './LazyShow';


export default function BasicTable() {

  const [newDatas, setNewDatas] = useState([])

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users")
      .then(res => setNewDatas(res.data))
  }, [])


  return (
    <>
    <LazyShow>
    <div className='new'>
      <h1 className='new__title'>What's New!</h1>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="right">Usename</TableCell>
              <TableCell align="right">Email</TableCell>
              <TableCell align="right">Website</TableCell>
              <TableCell align="right">Zipcode</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {newDatas.map((newData) => (
              <TableRow
                key={newData.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {newData.name}
                </TableCell>
                <TableCell align="right">{newData.username}</TableCell>
                <TableCell align="right">{newData.email}</TableCell>
                <TableCell align="right">{newData.website}</TableCell>
                <TableCell align="right">{newData.address.zipcode}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
    </LazyShow>
    </>
  );
}
