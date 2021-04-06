import React, { useState } from "react";
import axios from "axios";
import "./Form.css";
const initialState = {
  eid: "",
  fname: "",
  lname: "",
  email: "",
};

const EmployeeForm = () => {
  const [value, setValue] = useState(initialState);

  const inputChange = (e) => {
    const { name, value } = e.target;
    setValue((preValue) => {
      return {
        ...preValue,
        [name]: value,
      };
    });
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post(`http://localhost:3001/users`, value);
    setValue(initialState);
  };

  return (
    <div className="container">
      <h1>Registration Form</h1>
      <form onSubmit={onSubmit}>
        <div>
          <label>Employee Id</label>
          <input
            type="text"
            name="eid"
            placeholder="Employee Id"
            value={value.eid}
            onChange={inputChange}
          />
        </div>
        <div>
          <label>First Name</label>
          <input
            type="text"
            name="fname"
            placeholder="First Name"
            value={value.fname}
            onChange={inputChange}
          />
        </div>
        <div>
          <label>Last Name</label>
          <input
            type="text"
            name="lname"
            placeholder="Last Name"
            value={value.lname}
            onChange={inputChange}
          />
        </div>
        <div>
          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={value.email}
            onChange={inputChange}
          />
        </div>
        <button className="btn" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default EmployeeForm;
