import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { nanoid } from 'nanoid';
import axios from 'axios';
import "./Home.css";
import personData from "../Data";


// Get user information from backend - API

function Home() {
  const [data, setdata] = useState();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [contact, setContact] = useState();


  const handleAddFormSubmit = async () => {
    await axios.post(`http://localhost:5000/api/post`, {
      emp_name:  name ,
      emp_email: email ,
      emp_contact: contact 
    }).then((
   
   ) => { }).catch(err => console.log(err));
  };
  const handleclick = (id) => {
    if (window.confirm("Are you sure to delete?")) {
      axios.delete(`http://localhost:5000/api/remove/${id}`)
    }
  };
  useEffect(() => {
    fetchData();

  },[] );

  const fetchData = async () => {
    await axios.get('http://localhost:5000/api/get').then((res) => {
      const fdata = res.data;
      if (!fdata) {
        console.log("empty fdata");
      }
      setdata(fdata);

    }).catch(err => console.log(err));
 
  }

  return (
    <div className="home_container">
      <div className="header">
        <h2>ELZIAN AGRO EMPLOYEES MANAGEMENT SYSTEM</h2>
      </div>
      <div className="table_container">
        <table>
          <thead>
            <tr className="tableNav">
              <th>ID</th>
              <th> name</th>
              <th> email</th>
              <th> contact</th>
              <th> Action</th>
            </tr>
          </thead>

          <tbody>
            {data &&
              data.map((val, key) => {
                return (
                  <tr key={key}>
                    <td>{val.id}</td>
                    <td>{val.emp_name}</td>
                    <td>{val.emp_email}</td>
                    <td>{val.emp_contact}</td>
                    <td>
                      <div className="buttons">
                        <Link to={`/edit/${val.id}`}>
                          <button className="btn btn-Edit">Edit</button>
                        </Link>
                        <div onClick={() => handleclick(val.id)}>
                          <button className="btn btn-Delete">Delete</button>
                        </div>
                        <Link to={`/view/${val.id}`}>
                          <button className="btn btn-View">View</button>
                        </Link>
                      </div>
                    </td>

                  </tr>
                );
              })}
          </tbody>
        </table>
       
        
      </div>
      <h2>Add User</h2>
        <form onSubmit={handleAddFormSubmit}>
          <input type="text" name="emp_name" required="required" placeholder="Enter" value={name} onChange={(event)=>setName(event.target.value)}/>
          <input type="email" name="emp_email" required="required" placeholder="Enter a mail" value={email} onChange={(event)=>setEmail(event.target.value)} />
          <input type="number"  name="emp_contact" required="required" placeholder="Enter a contact" value={contact} onChange={(event)=>setContact(event.target.value)}/>
          <button type="submit">Add</button>
        </form>
    </div>
  );
}

export default Home;