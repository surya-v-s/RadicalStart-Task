import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function EditEmp(){
    const {id} = useParams()
    const [info,setInfo] = useState({})
    const navigate=useNavigate()

    useEffect((e)=>{
        fetch(`http://localhost:5000/emp/${id}`).then(res=>res.json())
        .then(data=>setInfo(data)).catch(err=>console.log("error1:",err))

    },[])

    const handleSubmit=(e) =>{
        e.preventDefault()
        fetch(`http://localhost:5000/emp/${id}`,{
            method:"put",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(info)
        }).then(res=>{if(res.ok){alert("Updated");navigate("/")}})
    }

    const handleChange = (e)=>{
        setInfo({
            ...info,[e.target.name]:e.target.value
        })
    }

    return(
        <>
            <h1>Edit Employee Details</h1>
            <form onSubmit={handleSubmit}>
                <label>Name:<input type="text" name="name" value={info.name} onChange={handleChange}/></label><br/><br/>
                <label>Employee ID :<input name="emp_id" type="text" value={info.emp_id} onChange={handleChange}/></label><br/><br/>
                <label>Designation:<input name="desgn" type="text" value={info.desgn} onChange={handleChange}/></label><br/><br/>
                <label>Department:<input name="dept" type="text" value={info.dept} onChange={handleChange}/></label><br/><br/>
                <label>Project :<input name="project" type="text" value={info.project} onChange={handleChange}/></label><br/><br/>
                <label>Type :<input name="type" type="text" value={info.type} onChange={handleChange}/></label><br/><br/>
                <label>Status :<input name="status" type="text" value={info.status} onChange={handleChange}/></label><br/><br/>
                <input type="submit" value="Update"/>

            </form>
        </>
    )
}
export default EditEmp;