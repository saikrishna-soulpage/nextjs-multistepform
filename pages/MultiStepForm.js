import React from "react";
import { useForm, useStep } from "react-hooks-helper";

import Details from "./Details";
import Skills from "./Skills";
import Goals from "./Goals";
import Review from "./Review";

import "../style.css";

const steps = [
  { id: "details" },
  { id: "skills" },
  { id: "goals" },
  { id: "review" },
];

const defaultData = {
  name: "Sai Krishna",
  username: "saikrishna",
  email: "bskk97@gmail.com",
  password: "password",
  university: "IIT Patna",
  branch: "EE",
  cpi: "8.8",
  address: "Plot No 20, Nayakranthi Nagar",
  state: "Telangana",
  city: "Hyderabad",
  zip: "500062",
  web: "CSS, Node.js, React",
  os: "Windows, Mac OS, Linux",
  programming: "Java, JavaScript, Python",
  cloud: "Docker, Azure, AWS",
  database: "MySQL, SQlite, MongoDB",
  productivity: "Slack, Trelo, Todoist",
  computer: "MS Office, PowerPoint, Drive",
  graphical: "Figma, Sketch, Illustrator",
  bigdata: "data mining, modeling",
  management: "Database, Project",
  administration: "Research, Planning",
  goals: "goals",
};

const MultiStepForm = () => {
  const [formData, setForm] = useForm(defaultData);
  const { step, navigation } = useStep({ initialStep: 0, steps });
  const { id } = step;

  const props = { formData, setForm, navigation };

  switch (id) {
    case "details":
      return <Details {...props} />;
    case "skills":
      return <Skills {...props} />;
    case "goals":
      return <Goals {...props} />;
    case "review":
      return <Review {...props} />;
    default:
      return null;
  }
};

export default MultiStepForm;
