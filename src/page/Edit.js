import React, { useEffect, useState } from 'react'
import './Edit.css';
import { useParams } from "react-router-dom";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Edit = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [contact, setContact] = useState();
  const [data, setdata] = useState();

  const fetchData = async () => {
    
    await axios.get(`http://localhost:5000/api/get/${id}`).then((res) => {
      const fdata = res.data;
      if (!fdata) {
        console.log("empty fdata");
      }
      setdata(fdata);
      console.log(fdata[0])
      setName(fdata[0].emp_name);
      setEmail(fdata[0].emp_email);
      setContact(fdata[0].emp_contact);

    }).catch(err => console.log(err));
  }

  useEffect(() => {
    fetchData();
   

  },[] );

  const handleSubmit = async () => {
    axios.put(`http://localhost:5000/api/update/${id}`, {
      emp_name:  name ,
      emp_email: email ,
      emp_contact: contact 
    }).then(() => {
      navigate("/");
    }).catch(err => console.log(err));

  }


  return (
    <div className='form'><form >
        <h1> edit employess details</h1>
        <p>  new name</p><br />
    <input type="text" name="name" required="required" value={name} onChange={(event)=>setName(event.target.value)} /><br />
    <p> new email</p><br />
    <input type="email" name="email" required="required" value={email} onChange={(event)=>setEmail(event.target.value)} /><br />
    <p> new contact number</p><br />

    <input type="number" email="contact" required="required" value={contact} onChange={(event)=>setContact(event.target.value)}/><br />
    <button type="submit" onClick={handleSubmit}>save</button>
  </form></div>
  )
}

export default Edit