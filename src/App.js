import React from "react";
import logo from "./logo.svg";
import "./App.css";

import Card from "./components/Card";

const mockProjects = [
  {
    category: "cool",
    purpose: "for the resume",
    title: "Agile",
    link: "/agile",
    language: "js",
    when: "Spring 2020",
    package: "node.js",
  },
];

function App() {
  return (
    <div className="App container">
      <Card
        category="Very Cool"
        purpose="An online eLearning platform"
        title="Agile"
        link="link"
        language="React"
        env="node.js"
        when="Fall 2020"
      />
    </div>
  );
}

export default App;
