import { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../stylesheet/AddEmp.css';
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

   const handleChange = (e) =>{
        setEmpInfo({...empInfo,[e.target.name]:e.target.value})
   }

    return(
        <div className="add-container">
            <h1>Add Employee</h1>
            <form onSubmit={handleSubmit}>
                
                <label>Name : <input onChange={handleChange} type="text" name = "name" placeholder="Enter Name" required/></label><br/>
                <label>Employee ID :  <input onChange={handleChange} type="number" name = "emp_id" placeholder="Enter ID" required/></label><br/>
                
                <label>Department : 
                    <select value={empInfo.dept} name="dept" onChange={handleChange} required>
                        <option value="">Select</option>
                        <option value="Design">Design</option>
                        <option value="Development">Development</option>
                        <option value="Testing">Testing</option>
                    </select>
                </label><br/>

                <label>Designation :  
                    <select value={empInfo.desgn} name="desgn" onChange={handleChange} required>
                        <option value="">Select</option>
                        <option value="Design Lead">Design Lead</option>
                        <option value="Senior Developer">Senior Developer</option>
                        <option value="Junior Developer">Junior Developer</option>
                        <option value="Senior Test Engineer">Senior Test Engineer</option>
                        <option value="Junior Test Engineer">Junior Test Engineer</option>
                    </select>
                </label><br/>

                <label>Project : <input onChange={handleChange} type="text" name = "project" placeholder="Enter Project" required/></label>
                <br/>

                <label>Type : 
                    <select value={empInfo.type} name="type" onChange={handleChange} required>
                        <option value="">Select</option>
                        <option value="Office">Office</option>
                        <option value="Home">Home</option>
                        <option value="Hybrid">Hybrid</option>
                    </select>
                </label><br/>

                <label>Status : 
                    <select value={empInfo.status} name="status" onChange={handleChange} required>
                        <option value="">Select</option>
                        <option value="Permanent">Permanent</option>
                        <option value="Temporary">Temporary</option>
                    </select>
                </label><br/>
                {/* <label>Department : <input onChange={ (e) => { setEmpInfo((prev) => { return {...prev,dept:e.target.value} })} } type="text" name = "dept" placeholder="Enter Department"/></label> */}
                {/* <label>Designation : <input onChange={ (e) => { setEmpInfo((prev) => { return {...prev,desgn:e.target.value} })} } type="text" name = "desgn" placeholder="Enter Designation"/></label><br/><br/> */}
                
                {/* <label>Type : <input onChange={ (e) => { setEmpInfo((prev) => { return {...prev,type:e.target.value} })} } type="text" name = "type" placeholder="Enter Type"/></label><br/><br/> */}
                {/* <label>Status : <input onChange={ (e) => { setEmpInfo((prev) => { return {...prev,status:e.target.value} })} } type="text" name = "status" placeholder="Enter Status"/></label><br/><br/> */}
                <input type="submit" value="Confirm"/>
           
            </form>
        </div>
    )
}
export default AddEmp;