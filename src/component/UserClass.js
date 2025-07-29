import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    console.log(" Children constructor called");
    this.state = {};
  }
  componentDidMount() {
    console.log(" child componentDidMount called");
  }

  render() {
    const { count, count1 } = this.state;
    console.log(" Children render called");
    return (
      <div>
        <h1>Count:{count}</h1>
        <h1>Count:{count1}</h1>
        <button
          onClick={() => {
            // updation of state variable
            this.setState({
              count: this.state.count + 1,
              count1: this.state.count1 + 1,
            });
          }}
        >
          Increase count
        </button>
        <h1>Name:{this.props.Name}</h1>
        <h1>Location:</h1>
        <h1>Contact</h1>
      </div>
    );
  }
}
export default UserClass;
