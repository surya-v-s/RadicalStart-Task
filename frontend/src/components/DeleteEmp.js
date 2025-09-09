import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

function DeleteEmp(){
    const {id} = useParams()
    const navigate = useNavigate()
    useEffect(()=>{
        fetch(`http://localhost:5000/emp/${id}`,{
            method:"delete"
        }).then(res => {if(res.ok) alert("deleted");navigate("/");} ).catch((err)=>console.error(err))
    },[id,navigate])

    return(
        <>
        {/* <h1>Delete Employee</h1> */}
        </>
    )
}
export default DeleteEmp;