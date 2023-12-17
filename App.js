import React from "react"
import ReactDOM from "react-dom/client"


const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "Hi I am an H1 Tag"),
    React.createElement("h2", {}, "Hi I am an H2 Tag and my name is Ashis Kamnai"),
  ])
);

const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello World from React"
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
