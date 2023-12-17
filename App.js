import React from "react"
import ReactDOM from "react-dom/client"


//React Element
const heading = (
  <h1 className="heading">
    This is nothing but a React Element
  </h1>
)


const Title = ()=>{
  return(
    <h1 className="heading1"> This is a Title Component</h1>
  )
}

//Component Composition
//React Functional Component
const HeadingComponent = ()=>{
  return(
    <div id="container">
    <Title />
    {heading}
    <h1 className="heading">
      This is a React Functional Component
    </h1>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<HeadingComponent />)

