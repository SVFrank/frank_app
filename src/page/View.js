import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import "./View.css";

// Get user information from backend - API

function View() {
  const { id } = useParams();
  const [data, setdata] = useState();

  const fetchData = async () => {
    
    await axios.get(`http://localhost:5000/api/get/${id}`).then((res) => {
      const fdata = res.data;
      if (!fdata) {
        console.log("empty fdata");
      }
      setdata(fdata);

    }).catch(err => console.log(err));
  }

  useEffect(() => {
    fetchData();
  }, [id]);

  return (
    <div className="view_container">
      <div className="view_header">
        <h2>ELZIAN AGRO EMPLOYEES MANAGEMENT SYSTEM</h2>
      </div>
   {data &&   <div className="view_main">
    
        <div className="view_inner_container">
          <div className="items">
            <div className="item_data_head">ID</div>
            <div className="item_data">{data[0].id}</div>
          </div>
          <div className="items">
            <div className="item_data_head">Name</div>
            <div className="item_data">{data[0].emp_name}</div>
          </div>
          <div className="items">
            <div className="item_data_head">Email</div>
            <div className="item_data">{data[0].emp_email}</div>
          </div>
          <div className="items">
            <div className="item_data_head">Contact</div>
            <div className="item_data">{data[0].emp_contact}</div>
          </div>

          <Link to={'/'} className="go_back">
            <div className="back_btn">
              <h5 className="btn_text">Back</h5>
            </div>
          </Link>
        </div>
      </div>}
    </div>
  );
}

export default View;