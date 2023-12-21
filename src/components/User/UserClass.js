import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        userInfo:{
            name:"dummy",
            location:"default",
        }
    };

    console.log(this.props.name + "Child Constructor is called");
  }

  componentDidMount() {
    this.fetchData()
    console.log(this.props.name + "Child Component Did Mount is called");
  }

  componentDidUpdate(){
    console.log("Component Did Update is called")
  }

  componentWillUnmount(){
    console.log("Component UnMounted from the DOM")
  }

  fetchData = async() =>{
    const data = await fetch("https://api.github.com/users/kamaniashish17")

    const json = await data.json()

    console.log("Git Hub User Data", json)

    this.setState({
        userInfo:json
    })
  }

  render() {
    console.log(this.props.name + "Child Render is called");

    const { name, id, avatar_url } = this.state.userInfo;
    return (
      <div className="user-card">
      <img alt="not rendering" src={avatar_url} />
        <h1>{name}</h1>
        <h2>{id}</h2>
        <h3>Contact: @kamaniashish17</h3>
      </div>
    );
  }
}

export default UserClass;


/****
 * MOUNTING LIFECYCLE --------------------------
 *  Constructor is called (dummy)
 *  Render is Called (dummy)
 *          <HTML Dummy></HTML>
 *  Component Did Mount
 *      <API CALL>
 *      this.setState is called (State variable is updated)
 * 
 * ----UPDATE LIFECYCLE
 *          Render is called (API DATA)
 *          <HTML (new API DATA) ></HTML>
 *          ComponentDidUpdate is Called
 *
 * 
 * 
 * 
 */
