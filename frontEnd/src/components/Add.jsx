import React, { useEffect, useState } from 'react'
import { TextField } from '@mui/material'
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
const Add = (props) => {
  var [input, setInput] = useState({ Name: "", Age: "", Department: "", Salary: "" })
  const navigate = useNavigate()
  var location = useLocation()
  console.log("loc", location.state)

  const inputHandler = (e) => {
    // console.log(e.target.value)
    setInput({ ...input, [e.target.name]: e.target.value })
    console.log(input)
  }
  
 const addHandler = () => {
  if (location.state != null) {
    axios.put("http://localhost:3005/update/" + location.state.val._id, input).then((res) => {
      alert((res.data.message))
    })
    navigate("/view")
  }
  else {
    axios.post("http://localhost:3005/add", input).then((res) => {
      alert(res.data.message)
    }).catch((error) => {
      console.log(error)
    })
    navigate("/view")
  }
}
  useEffect(() => {
    if (location.state != null) {
      setInput({
        ...input,
        Name: location.state.val.Name,
        Age: location.state.val.Age,
        Department: location.state.val.Department,
        Salary: location.state.val.Salary
      })
    }
  },[])
  return (
    <div>
      <br /><br />
      <Typography variant="h6" component="div" > Details
      </Typography>
      <TextField label="name" variant='filled' name='Name' value={input.Name} onChange={inputHandler} /><br /><br />
      <TextField label="age" variant='filled' name='Age' value={input.Age} onChange={inputHandler} /><br /><br />
      <TextField label="department" variant='filled' name='Department' value={input.Department} onChange={inputHandler} /><br /><br />
      <TextField label="salary" variant='filled' name='Salary' value={input.Salary} onChange={inputHandler} /><br /><br />
      <Button variant='contained' color='success' onClick={addHandler}>Submit</Button>
    </div>
  )
}

export default Add
