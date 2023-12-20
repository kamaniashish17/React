import React from "react"
import ReactDOM from "react-dom/client"
import Header from "./components/Header"
import Body from "./components/Body"
import { bodyVariable } from "./components/Body"
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"
import About from "./components/About"
import ContactUs from "./components/Contact-Us"
import Error from "./components/Error"
import RestaurantMenu from "./components/RestaurantMenu"

const AppLayout = ()=>{
  console.log(bodyVariable)
  return(
    <div className="app">
      <Header/>
      <Outlet />
    </div>
  )
}

const appRouter = createBrowserRouter([
  {
    path:'/',
    element: <AppLayout />,
    children:[
      {
        path:'/',
        element: <Body />
      },
      {
        path:'/about',
        element: <About />
      },
      {
        path:'/contact-us',
        element: <ContactUs />
      },
      {
        path: '/restaurants/:resId',
        element: <RestaurantMenu />
      },
    ],
    errorElement: <Error />
  },
])


//React Element
// const heading = (
//   <h1 className="heading">
//     This is nothing but a React Element
//   </h1>
// )


// const Title = ()=>{
//   return(
//     <h1 className="heading1"> This is a Title Component</h1>
//   )
// }

// //Component Composition
// //React Functional Component
// const HeadingComponent = ()=>{
//   return(
//     <div id="container">
//     <Title />
//     {heading}
//     <h1 className="heading">
//       This is a React Functional Component
//     </h1>
//     </div>
//   )
// }

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<RouterProvider router={appRouter} />)

