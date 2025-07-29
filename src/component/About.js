import User from "./User";
import UserClass from "./UserClass";
import React from "react";
import { Component } from "react";
class About extends Component {
  constructor(props) {
    super(props);
    console.log(" parent constructor called");
    this.state = {
      userName: "Dumy",
      Location: "Dehradun",
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/Anjali-Gupta-Tech");
    const json = await data.json();
    this.setState({
      userName: json,
    });
    console.log(json);
    //console.log("parent componentdidmount called");
  }

  render() {

    //console.log("Parent render called");
    const { userName, location } = this.state.userName;

    return (
      <div className="about">
        <h1>About</h1>
        <h1>login:{userName}</h1>
        <h1>Location:{location}</h1>
        <hr></hr>
        <User
          Name={"Anjali Gupta"}
          Location={"Bangluru"}
          Contact={"abc123@gmail.com"}
        />
        <hr></hr>
        <UserClass
          Name={"Khushi gupta"}
          Location={"Bangluru"}
          Contact={"abc123@gmail.com"}
        />
      </div>
    );
  }
}
export default About;
