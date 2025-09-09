import { useEffect, useState } from "react";
import { BrowserRouter,Routes,Route,Link } from "react-router-dom";
import ViewEmp from "./components/ViewEmp";
import EditEmp from "./components/EditEmp";
import AddEmp from "./components/AddEmp";
import DeleteEmp from "./components/DeleteEmp";
import './App.css';

function App(){
  const [empList,setempList] = useState([])

  useEffect(()=>{
    fetch("http://localhost:5000/").then(res=> res.json()).then(data=> setempList(data)).catch(err => console.log("error in fetching: ",err))
  },[empList])


  return( 
          <BrowserRouter>
          <Routes>
            <Route path='/' element={
              <>
              <div className="header">
               <h1>Employee</h1>
               <Link to='/add'>
               <button>Add Employee</button>
               </Link>
               </div>
            <table border="1">
            <thead>
              <tr>
                <th>Employee Name</th>
                <th>Employee id</th>
                <th>Department</th>
                <th>Designation</th>
                <th>Project</th>
                <th>Type</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
              </thead>
              <tbody>
                {empList.map((emp)=>(
                  <tr key={emp.id}>
                    <td>{emp.name}</td>
                    <td>{emp.emp_id}</td>
                    <td>{emp.dept}</td>
                    <td>{emp.desgn}</td>
                    <td>{emp.project}</td>
                    <td>{emp.type}</td>
                    <td>{emp.status}</td>
                    <td>
                      <Link to={`/view/${emp.id}`}>View</Link>{" "}
                      <Link to={`/edit/${emp.id}`}>Edit</Link>{" "}
                      <Link to={`/delete/${emp.id}`}>Delete</Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            
          </>
        }/>
        <Route path="/view/:id" element={<ViewEmp/>}/>
        <Route path="/edit/:id" element={<EditEmp/>}/>
        <Route path="/add" element={<AddEmp/>}/>
        <Route path="/delete/:id" element={<DeleteEmp/>}/>
          </Routes>
          </BrowserRouter>
           

)}
export default App;