import React from "react";
import ReactDOM from "react-dom";
import { useState, useEffect } from "react";
import { LOGO_URL } from "../../utils/constants";
import { Link } from "react-router-dom";

const Header = () => {
  const [loginButton, setLoginButton] = useState("Login");

  // If the dependency array contains some element => useEffect will be called when the element gets updated
  useEffect(() => {
    console.log("will be called whenever the loginButton state gets updated");
  }, [loginButton]);

  // //If no dependency array => useEffect will be called in every render
  // useEffect(()=>{
  //   console.log("will be called in every render")
  // })

  //If the dependency array is empty => useEffect will be called only once after the initial render
  useEffect(() => {
    console.log("Will be called only once after the initial render");
  }, []);

  console.log("Header Render");

  return (
    <div className="header flex justify-between shadow-lg">
      <div className="logo-container">
        <img className="logo w-28" src={`${LOGO_URL}`} />
      </div>
      <div className="nav-items flex items-center">
        <ul className="items-list flex p-4 m-4">
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4">
            <Link to="/contact-us">ContactUs</Link>
          </li>
          <li className="px-4">Cart</li>
          <button
            className="login px-4"
            onClick={() => {
              loginButton === "Login"
                ? setLoginButton("Logout")
                : setLoginButton("Login");
            }}
          >
            {loginButton}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
