import React, { Component } from "react";
class Form extends Component {
  state = {
    userName: "",
  };
  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state.userName);
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="Github username"
          value={this.state.userName}
          onChange={(event) => this.setState({ userName: event.target.value })}
        />
        <button>Add Card</button>
      </form>
    );
  }
}

export default Form;
