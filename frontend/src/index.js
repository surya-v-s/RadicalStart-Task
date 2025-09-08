import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import AddEmp from './components/AddEmp';
import ViewEmp from './components/ViewEmp';
import EditEmp from './components/EditEmp';
import DeleteEmp from './components/DeleteEmp';

import {BrowserRouter} from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   
    <App />
    {/* <AddEmp /> */}
    {/* <ViewEmp/>
    <EditEmp/>
    <DeleteEmp/> */}
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
