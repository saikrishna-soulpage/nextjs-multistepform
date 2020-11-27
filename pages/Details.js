import React from "react";
import "../style.css";

const Details = ({ setForm, formData, navigation }) => {
  const {
    name,
    username,
    email,
    password,
    university,
    branch,
    cpi,
    address,
    state,
    city,
    zip,
  } = formData;

  const { next } = navigation;

  return (
    <div>
      <div className="form-row">
        <h1>Details</h1>
      </div>
      <div className="form-row">
        <div className="form-group col-md-6">
          <label>Name</label>
          <input
            className="form-control"
            name="name"
            type="text"
            // placeholder="Enter name"
            value={name}
            onChange={setForm}
          />
        </div>
        <div className="form-group col-md-6">
          <label>Username</label>
          <input
            className="form-control"
            name="username"
            type="text"
            // placeholder="Enter username"
            value={username}
            onChange={setForm}
          />
        </div>
      </div>
      <div className="form-row">
        <div className="form-group col-md-6">
          <label>Email</label>
          <input
            className="form-control"
            name="email"
            type="text"
            // placeholder="Enter email"
            value={email}
            onChange={setForm}
          />
        </div>
        <div className="form-group col-md-6">
          <label>Password</label>
          <input
            className="form-control"
            name="password"
            type="password"
            // placeholder="Enter password"
            value={password}
            onChange={setForm}
          />
        </div>
      </div>
      <div className="form-row">
        <div className="form-group col-md-4">
          <label>University</label>
          <input
            className="form-control"
            name="university"
            type="text"
            // placeholder="University"
            value={university}
            onChange={setForm}
          />
        </div>
        <div className="form-group col-md-4">
          <label>Branch</label>
          <input
            className="form-control"
            name="branch"
            type="text"
            // placeholder="Eg : ECE"
            value={branch}
            onChange={setForm}
          />
        </div>
        <div className="form-group col-md-4">
          <label>CPI</label>
          <input
            className="form-control"
            name="cpi"
            type="text"
            // placeholder="CPI"
            value={cpi}
            onChange={setForm}
          />
        </div>
      </div>
      <div className="form-group">
        <label>Address</label>
        <input
          className="form-control"
          name="address"
          type="text"
          // placeholder="Enter address"
          value={address}
          onChange={setForm}
        />
      </div>
      <div className="form-row">
        <div className="form-group col-md-4">
          <label>State</label>
          <input
            className="form-control"
            name="state"
            type="text"
            // placeholder="Enter state"
            value={state}
            onChange={setForm}
          />
        </div>
        <div className="form-group col-md-4">
          <label>City</label>
          <input
            className="form-control"
            name="city"
            type="text"
            // placeholder="Enter city"
            value={city}
            onChange={setForm}
          />
        </div>
        <div className="form-group col-md-4">
          <label>Zip</label>
          <input
            className="form-control"
            name="zip"
            type="text"
            // placeholder="Enter zip"
            value={zip}
            onChange={setForm}
          />
        </div>
      </div>
      <div className="form-row float-right">
        <button className="btn btn-primary btn-lg" onClick={next}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Details;
