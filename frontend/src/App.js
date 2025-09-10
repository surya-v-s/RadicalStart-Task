import { useEffect, useState } from "react";
import { BrowserRouter,Routes,Route,Link } from "react-router-dom";
import ViewEmp from "./components/ViewEmp";
import EditEmp from "./components/EditEmp";
import AddEmp from "./components/AddEmp";
import DeleteEmp from "./components/DeleteEmp";
import './App.css';

function App(){
  const [empList,setempList] = useState([])
  const [search,setSearch] = useState("")

  useEffect(()=>{
    fetch("http://localhost:5000/").then(res=> res.json()).then(data=> setempList(data)).catch(err => console.log("error in fetching: ",err))
  },[empList])

  //display employee list
  const displayEmployee = search.trim()==="" ? empList : empList.filter((emp)=>{return(emp.name.toLowerCase().includes(search.toLowerCase()) || emp.emp_id.toString().includes(search) )})
  
  return( 
          <BrowserRouter>
          <Routes>
            <Route path='/' element={
              <>
              <div className="leftnav">
                <h2>RadicalStart</h2>
                <ul>
                  <li>Dashboard</li>
                  <li>Employee</li>
                  <li>Calendar</li>
                  <li>Settings</li>
                </ul>
              </div>
              <div className="main-content">
              <div className="header">
               <h1>Employee</h1>
               <Link to='/add'>
               <button>Add Employee</button>
               </Link>
               {/* added search field */}
               <input type="text" value={search} onChange={(e)=>{setSearch(e.target.value)}} placeholder="Search Employee"/>
               
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
                  {displayEmployee.map((emp)=>(
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
            </div>
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