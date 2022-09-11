import React from 'react'
import { useParams } from 'react-router-dom';

function Delete() {
    const { id } = useParams();
  return (
      <div> <h1>Delete { id}</h1></div>
  )
}

export default Delete;