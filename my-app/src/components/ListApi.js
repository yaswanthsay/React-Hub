import React from 'react'
import axios from 'axios'
import { useState,useEffect } from 'react'


function ListApi() {

    const [lists,setList] = useState('https://jsonplaceholder.typicode.com/photos')

   useEffect(()=>{
    axios.get(["https://jsonplaceholder.typicode.com/photos"])
    .then(res => res.json)
    .then(data => setList(data.url))

   },[])

   const sample = lists.map((list)=>(
       list
   ))

   

    return (
        <table className='list__api'>
            <thead>
                <tr>
                    <th>fgfgf</th>
                    <th>fgfgf</th>
                    <th>fgfgf</th>
                    <th>fgfgf</th>
                </tr>
               </thead>
               <tbody>
                <tr>
                    <td>{sample.url}</td>
                    <td>rtrt</td>
                    <td>rtr</td>
                    <td>dfgdfg</td>
                </tr>
                <tr>
                    <td>trr</td>
                    <td>rtrt</td>
                    <td>rtr</td>
                    <td>dfgdfg</td>
                </tr>
                <tr>
                    <td>trr</td>
                    <td>rtrt</td>
                    <td>rtr</td>
                    <td>dfgdfg</td>
                </tr>
                <tr>
                    <td>trr</td>
                    <td>rtrt</td>
                    <td>rtr</td>
                    <td>dfgdfg</td>
                </tr>
            </tbody>
        </table>
    )
}

export default ListApi