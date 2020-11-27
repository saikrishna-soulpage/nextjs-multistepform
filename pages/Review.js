import React from "react";

const Review = ({ setForm, formData, navigation }) => {
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
    web,
    os,
    programming,
    cloud,
    database,
    productivity,
    computer,
    graphical,
    bigdata,
    management,
    administration,
    goals,
  } = formData;
  const { go } = navigation;

  return (
    <div>
      <div className="form-row d-flex justify-content-between">
        <h1>Details</h1>
        <button
          className="btn btn-primary btn-lg"
          onClick={() => go("contact")}
        >
          Edit
        </button>
      </div>
      <div className="form-row">
        <div className="form-group col-md-6">
          <label>Name</label>
          <input
            className="form-control"
            name="name"
            type="text"
            value={name}
          />
        </div>
        <div className="form-group col-md-6">
          <label>Username</label>
          <input
            className="form-control"
            name="username"
            type="text"
            value={username}
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
            value={email}
          />
        </div>
        <div className="form-group col-md-6">
          <label>Password</label>
          <input
            className="form-control"
            name="password"
            type="password"
            value={password}
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
            value={university}
          />
        </div>
        <div className="form-group col-md-4">
          <label>Branch</label>
          <input
            className="form-control"
            name="branch"
            type="text"
            value={branch}
          />
        </div>
        <div className="form-group col-md-4">
          <label>CPI</label>
          <input className="form-control" name="cpi" type="text" value={cpi} />
        </div>
      </div>
      <div className="form-group">
        <label>Address</label>
        <input
          className="form-control"
          name="address"
          type="text"
          value={address}
        />
      </div>
      <div className="form-row">
        <div className="form-group col-md-4">
          <label>State</label>
          <input
            className="form-control"
            name="state"
            type="text"
            value={state}
          />
        </div>
        <div className="form-group col-md-4">
          <label>City</label>
          <input
            className="form-control"
            name="city"
            type="text"
            value={city}
          />
        </div>
        <div className="form-group col-md-4">
          <label>Zip</label>
          <input className="form-control" name="zip" type="text" value={zip} />
        </div>
      </div>
      <div className="form-row d-flex justify-content-between">
        <h1>Skills</h1>
        <button className="btn btn-primary btn-lg" onClick={() => go("skills")}>
          Edit
        </button>
      </div>
      <div className="form-row">
        <div className="form-group col-md-6">
          <label>Web</label>
          <input className="form-control" name="web" type="text" value={web} />
        </div>
        <div className="form-group col-md-6">
          <label>Operating Systems</label>
          <input className="form-control" name="os" type="text" value={os} />
        </div>
      </div>
      <div className="form-row">
        <div className="form-group col-md-6">
          <label>Programming</label>
          <input
            className="form-control"
            name="programming"
            type="text"
            value={programming}
          />
        </div>
        <div className="form-group col-md-6">
          <label>Cloud Computing</label>
          <input
            className="form-control"
            name="cloud"
            type="text"
            value={cloud}
          />
        </div>
      </div>
      <div className="form-row">
        <div className="form-group col-md-6">
          <label>Database</label>
          <input
            className="form-control"
            name="database"
            type="text"
            value={database}
          />
        </div>
        <div className="form-group col-md-6">
          <label>Productivity</label>
          <input
            className="form-control"
            name="productivity"
            type="text"
            value={productivity}
          />
        </div>
      </div>
      <div className="form-row">
        <div className="form-group col-md-6">
          <label>Computer Skills</label>
          <input
            className="form-control"
            name="computer"
            type="text"
            value={computer}
          />
        </div>
        <div className="form-group col-md-6">
          <label>Graphical</label>
          <input
            className="form-control"
            name="graphical"
            type="text"
            value={graphical}
          />
        </div>
      </div>
      <div className="form-row">
        <div className="form-group col-md-4">
          <label>Big Data</label>
          <input
            className="form-control"
            name="bigdata"
            type="text"
            value={bigdata}
          />
        </div>
        <div className="form-group col-md-4">
          <label>Management</label>
          <input
            className="form-control"
            name="management"
            type="text"
            value={management}
          />
        </div>
        <div className="form-group col-md-4">
          <label>Administration</label>
          <input
            className="form-control"
            name="administration"
            type="text"
            value={administration}
          />
        </div>
      </div>
      <div className="form-row d-flex justify-content-between">
        <h1>Goals</h1>
        <button className="btn btn-primary btn-lg" onClick={() => go("goals")}>
          Edit
        </button>
      </div>
      <div className="form-group">
        <label>Goal</label>
        <input className="form-control" name="goal" type="text" value={goals} />
      </div>
      <div className="form-row d-flex justify-content-center">
        <button
          className="btn btn-primary btn-lg"
          onClick={() => go("details")}
        >
          New Form
        </button>
      </div>
    </div>
  );
};

export default Review;
