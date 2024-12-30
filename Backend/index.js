//importing express:
const express = require('express')
require("./connection")
var Employemodel = require("./model/employee")
var cors = require('cors')
//initialize express:
const app = express()
//mid
app.use(express.json())
app.use(cors())
// //api creating:
 app.get('/',(req, res) =>{  
    res.send('Hello World')
 })
app.get('/trial', (req, res) => {
    res.send('This is a trial message')
})
app.post("/add", async (req, res) => {
    try {
        await Employemodel(req.body).save()
        res.send({ message: "data added" })
    } catch (error) {
        console.log(error)
    }
})

app.get("/view", async (req, res) => {
    try {
        var data=await Employemodel.find()
        res.send(data)
    } catch (error) {
        console.log(error)
    }      
})
app.delete("/remove/:id", async (req, res) => {
    try {
        await Employemodel.findByIdAndDelete(req.params.id)
        res.send({message:"Data deleted"})
    }
    catch (error) {
        console.log(error)
    }
})
app.put("/update/:id", async (req, res) => {
    try {
        await Employemodel.findByIdAndUpdate(req.params.id, req.body)
        res.send({ message: "Data updated" })
    }
    catch (error) {
        console.log(error)
    }
})
//port setting:
app.listen(3005, () => {
    console.log('Server is running on port 3004')
})

