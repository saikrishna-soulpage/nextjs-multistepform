import React from "react";

const Goals = ({ setForm, formData, navigation }) => {
  const { goals } = formData;

  const { previous, next } = navigation;

  return (
    <div>
      <div className="form-row">
        <h1>Goals</h1>
      </div>
      <div className="form-group">
        <label>Goal</label>
        <input
          className="form-control"
          name="goal"
          type="text"
          // placeholder="Enter goal"
          value={goals}
          onChange={setForm}
        />
      </div>
      <div className="form-row d-flex justify-content-between">
        <button className="btn btn-primary btn-lg" onClick={previous}>
          Previous
        </button>
        <button className="btn btn-primary btn-lg" onClick={next}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default Goals;
