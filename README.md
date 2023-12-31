# React Learning Basics

# Parcel
 - Created a Dev Build
 - Created a Local Server as well
 - HMR -> Hot Module Replacement(whatever changes you make it gets automatically refreshes the page and update it)
 - File Watching Algorithm which is written in C++
 - Faster Builds because of caching
 - Image Optimization
 - Minifaction of files at the time of production
 - Bundling of the files
 - Compressing the files
 - Consistent Hashing
 - Code Splitting
 - Differential Bundling - to suppport older browsers
 - Diagnostics
 - Error Handling
 - Can provide a way to work on HTTPS as well
 - Tree Shaking Algorithm - remove unused code
 - Different build for production as well as dev


 # Food Ordering Prototype
 /**
 * Header
 *  - Logo
 *  - NavItems
 * Body
 *  - Search
 *  - Restaurant Container
 *    - Restaurant Card
 *      - Img
 *      - Name of the Restaurant
 *      - Star Rating
 *      - Cuisine
 *      - Time for Delivery
 * Footer
 *  - Copyright
 *  - Address
 *  - Contact
 */

 # Two Types of Exports/Imports
 -  Default Export/Import
    -   export default Component
    -   import Component from "path"

-   Named Import/Export
    -   export const Component/Data/Variable
    -   import {Component/Data/Variable} from "path"


# React Hooks
    - Its a normal JS Utility function which provides edge to your web application
-   useState() -> superpowerful state variables.
-   useEffect()


# Routing in Web Apps
- There are two types of routing
    -   Client Side Routing - Doesnt make any network call -> Already has the componet -> It just loads the component
    -   Server Side Routing - Makes a network call -> fetches the data -> Render the HTML


# Class Based Components
-   Super and constructor keyword and their uses
-   Lifecycle of React Class Based Components

# Custom Hooks
-   Similar like implementation like React Hooks

# TalwindCSS
-   Better than SASS and SCSS
-   Installing and configuration according to our bundler which is Parcel (Refer the Documentation)
-   Easy and Handy to use (For defining custom, you need to make changes in the talwind configuration file to reflect custom)
-   TalwindCSS uses PostCSS inorder for the browser to understand the CSS and apply for it

#   Higher Order Components
-   It is normally a function that takes a component as an input and returns the enhanced component by adding different features on top of it 
-   It acts as a pure function since it doesnt modify the behaviour of the component

#   Props Drilling
-   Its a very cumbersome task when you need to pass data from parent component to n level child components, Hence To avoid this React offers a feature known as Context API to avoid Props Drilling
-   First you need to createContext to initialize the data which you need to pass
-   For Functional Based Components, you need to use the hook "useContext" to call the context and use accordingly
-   For Class Based Components, you need to use Context.Consumer along with the {function} and if you need to modify the context you need to wrap the whole app/component inside the Context.Provider Component and pass value as the parameter to modify or update the data

#   Redux
-   Its a global management state library to manage all the states across the web application
-   Install @reduxjs/toolkit and react-redux
-   Build our Store
-   Connect our Store to our App (Bridge it ) using Provider
-   Create a Slice in the store
-   Dispatch an Action
-   Read the data through the selector