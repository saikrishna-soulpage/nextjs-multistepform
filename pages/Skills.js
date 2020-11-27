import React from "react";

const Skills = ({ setForm, formData, navigation }) => {
  const {
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
  } = formData;

  const { previous, next } = navigation;

  return (
    <div>
      <div className="form-row">
        <h1>Skills</h1>
      </div>
      <div className="form-row">
        <div className="form-group col-md-6">
          <label>Web</label>
          <input
            className="form-control"
            name="web"
            type="text"
            // placeholder="CSS, Node.js, React"
            value={web}
            onChange={setForm}
          />
        </div>
        <div className="form-group col-md-6">
          <label>Operating Systems</label>
          <input
            className="form-control"
            name="os"
            type="text"
            // placeholder="Windows, Mac OS, Linux"
            value={os}
            onChange={setForm}
          />
        </div>
      </div>
      <div className="form-row">
        <div className="form-group col-md-6">
          <label>Programming</label>
          <input
            className="form-control"
            name="programming"
            type="text"
            // placeholder="Java, JavaScript, Python"
            value={programming}
            onChange={setForm}
          />
        </div>
        <div className="form-group col-md-6">
          <label>Cloud Computing</label>
          <input
            className="form-control"
            name="cloud"
            type="text"
            // placeholder="Docker, Azure, AWS"
            value={cloud}
            onChange={setForm}
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
            // placeholder="MySQL, SQlite, MongoDB"
            value={database}
            onChange={setForm}
          />
        </div>
        <div className="form-group col-md-6">
          <label>Productivity</label>
          <input
            className="form-control"
            name="productivity"
            type="text"
            // placeholder="Slack, Trelo, Todoist"
            value={productivity}
            onChange={setForm}
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
            // placeholder="MS Office, PowerPoint, Drive"
            value={computer}
            onChange={setForm}
          />
        </div>
        <div className="form-group col-md-6">
          <label>Graphical</label>
          <input
            className="form-control"
            name="graphical"
            type="text"
            // placeholder="Figma, Sketch, Illustrator"
            value={graphical}
            onChange={setForm}
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
            // placeholder="data mining, modeling"
            value={bigdata}
            onChange={setForm}
          />
        </div>
        <div className="form-group col-md-4">
          <label>Management</label>
          <input
            className="form-control"
            name="management"
            type="text"
            // placeholder="Database, Project"
            value={management}
            onChange={setForm}
          />
        </div>
        <div className="form-group col-md-4">
          <label>Administration</label>
          <input
            className="form-control"
            name="administration"
            type="text"
            // placeholder="Research, Planning"
            value={administration}
            onChange={setForm}
          />
        </div>
      </div>
      <div className="form-row d-flex justify-content-between">
        <button className="btn btn-primary btn-lg" onClick={previous}>
          Previous
        </button>
        <button className="btn btn-primary btn-lg" onClick={next}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Skills;
