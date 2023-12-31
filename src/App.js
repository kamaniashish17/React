import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { bodyVariable } from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import ContactUs from "./components/Contact-Us";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/Store/appStore";
import Cart from "./components/Cart";

const AppLayout = () => {
  const [userName, setUserName] = useState();

  useEffect(() => {
    //Authentication code written over here for user

    const data = {
      name: "Ashis Kamani",
    };

    setUserName(data.name);
  }, []);

  console.log(bodyVariable);
  return (
    <Provider store={appStore}>
    <div className="app">
      {/** Modifying the Context using Provider */}
      <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
        <Header />
        <Outlet />
      </UserContext.Provider>
    </div>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact-us",
        element: <ContactUs />,
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
      {
        path:"/cart",
        element: <Cart />
      }
    ],
    errorElement: <Error />,
  },
]);

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

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
