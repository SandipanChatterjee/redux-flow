import React, { Component } from "react";
import * as action from "../../store/actions/UserForm";
import { connect } from "react-redux";
export class UserForm extends Component {
  state = {
    title: "",
    body: "",
  };
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log("handleSubmit $$");
    this.props.addUser({
      ...this.state,
      userId: 1,
    });
  };

  render() {
    return (
      <div style={{ margin: "10px 10px" }}>
        <form onSubmit={this.handleSubmit}>
          <input
            name="title"
            type="text"
            placeholder="Enter title"
            onChange={this.handleChange}
          />
          <br />
          <input
            name="body"
            type="text"
            placeholder="Enter body"
            onChange={this.handleChange}
          />
          <br />
          <button type="submit">Add User</button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addUser: (userData) => dispatch(action.addUser(userData)),
  };
};

export default connect(null, mapDispatchToProps)(UserForm);
