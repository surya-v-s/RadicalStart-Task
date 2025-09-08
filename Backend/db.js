const mysql = require("mysql2")
const express = require("express")
const cors = require("cors");


const app=express()
app.use(express.json())
app.use(cors());

const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"RadicalStartDB"
})

db.connect(err=>{
    if(err){
        console.log("connection failed")
        return;
    }
    console.log("connected to db")
})

app.get("/",(req,res)=>{
    const sql = "select * from employees"
    db.query(sql,(err,result)=>{
        if(err) return err
        res.json(result)
    })
})

app.get("/emp/:id",(req,res)=>{
    const id = req.params.id
    const sql = "select * from employees where id=?"
    db.query(sql,[id],(err,result)=>{
        if(err) return err
        res.json(result[0])
    })
})

app.post("/add",(req,res)=>{
    const {emp_id,name,dept,desgn,project,type,status} = req.body;
    const sql = "insert into employees (emp_id,name,dept,desgn,project,type,status) values (?,?,?,?,?,?,?)"
    db.query(sql,[emp_id,name,dept,desgn,project,type,status],(err,result)=>{
        if(err) return err
        res.send("Employee Added")
    })

})

app.put("/emp/:id",(req,res)=>{
    const id = req.params.id;
    const {emp_id,name,dept,desgn,project,type,status} = req.body;
    const sql = "update employees set emp_id=?,name=?,dept=?,desgn=?,project=?,type=?,status=? where id = ?"
    db.query(sql,[emp_id,name,dept,desgn,project,type,status,id],(err,result)=>{
        if(err) return err;
        res.send("Employee Updated")
    })
})

app.delete("/emp/:id",(req,res)=>{
    const id = req.params.id;
    const sql = "delete from employees where id = ?"
    db.query(sql,[id],(err,result)=>{
        if(err) return err;
        res.send("deleted successfully")
    })
})

app.listen(5000,()=>console.log("running"))