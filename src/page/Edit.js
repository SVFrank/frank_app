import React from 'react'
import './Edit.css';

const Edit = () => {
  return (
    <div className='form'><form >
        <h1> edit employess details</h1>
        <p>  new name</p><br />
    <input type="text" name="name" required="required"  /><br />
    <p> new email</p><br />
    <input type="email" name="email" required="required" /><br />
    <p> new contact number</p><br />

    <input type="number" email="contact" required="required"  /><br />
    <button type="submit">save</button>
  </form></div>
  )
}

export default Edit