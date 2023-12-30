import React from "react"
import User from "../User"
import UserClass from "../User/UserClass"
import UserContext from "../../utils/UserContext"


class About extends React.Component{
    constructor(props){
        super(props)

        console.log("Parent Constructor is called")
    }

    componentDidMount(){
        console.log("Parent Component Did Mount is Called")
    }


    render(){
        console.log("Parent Render is Called")

        return(
            <div>
                <h1> Hi ! I am inside About Us Component</h1>
                <UserClass name={"Ashis Kamani"} location={"Odisha, India"}/>
             {/**Way to use context in the class based components */}
                <UserContext.Consumer>
                    {({loggedInUser})=>(
                        <h2>{loggedInUser}</h2>
                    )}
                </UserContext.Consumer>
            </div>
        )
    }
}

/**
 * Parent Constructor called
 * Parent Render is Called
 * 
 * 1st Child Constructor is Called
 * 1st Child Render is Called
 * 
 * 2nd Child Constructor is Called
 * 2nd Child Render is Called
 * 
 * DOM MANIPULATION BEGINS IN SINGLE BATCH
 * 1st Child ComponentDidMount is called
 * 2nd Child ComponentDidMount is called
 * 
 * Parent ComponentDidMount is called
 */

// const About = () =>{
//     return(
//         <div>
//             Hi I am About Us Component!
//             <User/>
//             <UserClass name={"Ashis Kamani"} location={"Odisha, India"}/>
//         </div>
//     )
// }

export default About