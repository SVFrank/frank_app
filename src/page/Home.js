import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {nanoid} from 'nanoid';

import "./Home.css";
import personData from "../Data";
import { NavigateNextOutlined } from "@material-ui/icons";

// Get user information from backend - API

function Home() {
  const [data, setdata] = useState(personData);
  const [contacts, setContacts] = useState(personData);
  const [userEdit, setuserEdit] = useState(false);
  const [addFormData, setAddFormData] = useState({
    Name:'',
    email:'',
    contact:''
  })
  const handleAddFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute('name');
    const fieldValue = event.target.Value;

    const newFormData = { ...addFormData};
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  };

  const handleAddFormSubmit = (event) => {
    event.preventDefault();

    const newContact = {
      id: nanoid(),
      Name: addFormData.Name,
      email:addFormData.email,
      contact:addFormData.contact,
    };
   const newContacts = [...contacts, newContact];
   setContacts(newContacts);
  };
  const handleclick = (id) => {
    if (window.confirm("Are you sure to delete?")) {
      setdata(data.filter((i) => i.ID !== id));
    }
  };

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
                    <td>{val.ID}</td>
                    <td>{val.name}</td>
                    <td>{val.mail}</td>
                    <td>{val.contact}</td>
                    <td>
                      <div className="buttons">
                        <Link to={`/edit/${val.ID}`}>
                          <button className="btn btn-Edit">Edit</button>
                        </Link>
                        <div onClick={() => handleclick(val.ID)}>
                          <button className="btn btn-Delete">Delete</button>
                        </div>
                        <Link to={`/view/${val.ID}`}>
                          <button className="btn btn-View">View</button>
                        </Link>
                      </div>
                    </td>

                    <td>{val.action}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
       
        
      </div>
      <h2>Add User</h2>
        <form onSubmit={handleAddFormSubmit}>
          <input type="text" name="name" required="required" placeholder="Enter" onChange={handleAddFormChange}/>
          <input type="email" name="email" required="required" placeholder="Enter a mail" onChange={handleAddFormChange}/>
          <input type="number" email="contact" required="required" placeholder="Enter a contact" onChange={handleAddFormChange}/>
          <button type="submit">Add</button>
        </form>
    </div>
  );
}

export default Home;