import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


function ViewEmp(){
    const {id} = useParams()
    const [info,setInfo] = useState({})

    useEffect(()=>{
        fetch(`http://localhost:5000/emp/${id}`).then(res=>res.json())
        .then(data=>setInfo(data)).catch(err=>{alert("Missing ID",err)})
    },[id])

    return(
        <>
            <h1>View Employee Detail</h1>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Employee Id</th>
                        <th>Department</th>
                        <th>Designation</th>
                        <th>Project</th>
                        <th>Type</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    
                    <tr key={info.id}>
                            <td>{info.name}</td>
                            <td>{info.emp_id}</td>
                            <td>{info.dept}</td>
                            <td>{info.desgn}</td>
                            <td>{info.project}</td>
                            <td>{info.type}</td>
                            <td>{info.status}</td>
                    </tr>
                    
                    
                </tbody>
            </table>
        </>
        
        
    )
}
export default ViewEmp;