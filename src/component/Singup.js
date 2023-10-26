//import { register } from "module";
import React from "react";
import { useState, useEffect } from "react";
import axios from 'axios'
export default function Singup() {
  const [user, setuser] = useState({
    name: "",
    fathername: "",
    email: "",
    phonenumber: "",
    password: "",
  });

  const handalevent = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setuser({
      ...user,
      [name]: value,
    });
  };
  const formData=new FormData();
  formData.append("name",user.name);  
  formData.append("fathername",user.fathername);  
  formData.append("email",user.email);  
  formData.append("phonenumber",user.phonenumber);  
  
  formData.append("password",user.password);

  const register = (e) => {
    e.preventDefault();
    axios.post("",formData).then((res) => {
      console.log(res);
    });
  };
  return (
    <div>
      <form
        style={{ border: "2px solid black" }}
        onSubmit={register}
        className="container mt-2 pt-3"
      >
        <h2>Singup</h2>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Full Name
          </label>
          <input
            type="email"
            className="form-control"
            name="name"
            value={user.name}
            onChange={handalevent}
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Father Name
          </label>
          <input
            type="email"
            className="form-control"
            name="fathername"
            value={user.fathername}
            onChange={handalevent}
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            name="email"
            value={user.email}
            onChange={handalevent}
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        
        </div>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Phone Number
          </label>
          <input
            type="email"
            className="form-control"
            name="phonenumber"
            value={user.phonenumber}
            onChange={handalevent}
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>

        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            name="password"
            value={user.password}
            onChange={handalevent}
            id="exampleInputPassword1"
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}
