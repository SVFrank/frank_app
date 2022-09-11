import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import { Toast } from "react-toastify";
import axios from "axios";

import personData from "../Data";
import "./View.css";

// Get user information from backend - API

function View() {
  const { id } = useParams();
  const [data, setdata] = useState(personData);

  useEffect(() => {
    setdata(data.filter((item) => item.ID == id));
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
            <div className="item_data">{data[0].ID}</div>
          </div>
          <div className="items">
            <div className="item_data_head">Name</div>
            <div className="item_data">{data[0].name}</div>
          </div>
          <div className="items">
            <div className="item_data_head">Email</div>
            <div className="item_data">{data[0].mail}</div>
          </div>
          <div className="items">
            <div className="item_data_head">Contact</div>
            <div className="item_data">{data[0].contact}</div>
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