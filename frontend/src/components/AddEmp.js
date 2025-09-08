import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddEmp(){
    const [empInfo,setEmpInfo] = useState([])
    const navigate = useNavigate()

   function handleSubmit(e){
        e.preventDefault()
        console.log("Submitted")
        fetch("http://localhost:5000/add",{
            method:"post",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(empInfo)
        }).then(res => {if(res.ok) {alert("Employee Added");navigate("/")} }).catch(err => console.error("Error:",err))
   }

    return(
        <>
            <h1>Add Employee</h1>
            <form onSubmit={handleSubmit}>
            <label>Name : <input onChange={ (e) => { setEmpInfo((prev) => { return {...prev,name:e.target.value} })} } type="text" name = "name" placeholder="Enter Name"/></label>
            <label>Employee ID :  <input onChange={ (e) => { setEmpInfo((prev) => { return {...prev,emp_id:e.target.value} })} } type="number" name = "emp_id" placeholder="Enter ID"/></label><br/><br/>
            <label>Department : <input onChange={ (e) => { setEmpInfo((prev) => { return {...prev,dept:e.target.value} })} } type="text" name = "dept" placeholder="Enter Department"/></label>
            <label>Designation : <input onChange={ (e) => { setEmpInfo((prev) => { return {...prev,desgn:e.target.value} })} } type="text" name = "desgn" placeholder="Enter Designation"/></label><br/><br/>
            <label>Project : <input onChange={ (e) => { setEmpInfo((prev) => { return {...prev,project:e.target.value} })} } type="text" name = "project" placeholder="Enter Project"/></label>
            <label>Type : <input onChange={ (e) => { setEmpInfo((prev) => { return {...prev,type:e.target.value} })} } type="text" name = "type" placeholder="Enter Type"/></label><br/><br/>
            <label>Status : <input onChange={ (e) => { setEmpInfo((prev) => { return {...prev,status:e.target.value} })} } type="text" name = "status" placeholder="Enter Status"/></label><br/><br/>
            <input type="submit" value="Confirm"/>
            </form>
        </>
    )
}
export default AddEmp;