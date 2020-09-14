import React, { Component } from "react";
import { connect } from "react-redux";
import * as action from "../../store/actions/Users";
class Users extends Component {
  componentDidMount() {
    const { getUsers } = this.props;
    getUsers();
  }
  render() {
    const { userListing } = this.props;
    console.log("userListing ###", userListing);
    return (
      <div>
        {userListing.length > 0
          ? userListing.map((item) => {
              return (
                <div
                  style={{
                    border: "0.5px dotted red",
                    margin: "10px 10px",
                    padding: "0px 10px",
                  }}
                >
                  <h3>id : {item.id}</h3>
                  <p>title : {item.title}</p>
                  <p>body : {item.body}</p>
                </div>
              );
            })
          : null}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userListing: state.Users.items,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getUsers: () => dispatch(action.fetchUsers()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);
