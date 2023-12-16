/**
 * <divm id ="parent">
 *      <div id="child">
 *          <h1></h1>
 *      </div>
 * </div>
 *
 *
 *
 *
 */

const parent = React.createElement(
  "div",
  { id: "parent" },
  [React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "Hi I am an H1 Tag"),
    React.createElement("h2", {}, "Hi I am an H2 Tag"),
  ]), React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "Hi I am an H1 Tag"),
    React.createElement("h2", {}, "Hi I am an H2 Tag"),
  ])]
);

const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello World from React"
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
