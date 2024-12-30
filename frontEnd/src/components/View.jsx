import React, { useEffect, useState } from 'react'
import { Table, Paper, TableCell, TableContainer, TableHead, TableRow, TableBody } from '@mui/material'
import axios from 'axios'
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom'

const View = () => {
    var [user, setuser] = useState([])
    var navigate=useNavigate()
    useEffect(() => {
        axios.get("http://localhost:3005/view").then((response) => {
            setuser(response.data)
            console.log(response)
        }).catch((error) => {
            console.log(error)
        })
    }, [])
    
    const delVal = (id) => {
        console.log(id)
        axios.delete("http://localhost:3005/remove/"+ id).then((res) => {
            alert(res.data.message)
            window.location.reload()
    
        })
            .catch((error) => console.log(error))
    }
    
    const updVal = (val) => {
        navigate("/add", {state:{val}})
    }
    return (
        <div>
            <br /><br />
            <TableContainer component={Paper}>
                <Table border='2'>
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">Name</TableCell>
                            <TableCell align="center">Age</TableCell>
                            <TableCell align="center">Department</TableCell>
                            <TableCell align="center">Salary</TableCell>
                            <TableCell></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {user.map((val) => {
                            return (
                                <TableRow>
                                    <TableCell>{val.Name}</TableCell>
                                    <TableCell>{val.Age}</TableCell>
                                    <TableCell>{val.Department}</TableCell>
                                    <TableCell>{val.Salary}</TableCell>
                                    <TableCell>
                                        <Button variant="contained" color="success" onClick={()=>{delVal(val._id)}}>Delete</Button>
                                    </TableCell>
                                    <TableCell>
                                        <Button variant="contained" color="success" onClick={()=>{updVal(val)}}>Update</Button>
                                    </TableCell>
                                </TableRow>
                            )
                        })}
                    </TableBody>
                </Table>
            </TableContainer>

        </div>
    )
}

export default View
