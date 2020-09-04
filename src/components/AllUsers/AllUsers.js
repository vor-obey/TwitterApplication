import React, {Component} from "react";
import "./AllUsers.sass";
import {UsersList} from "../UsersList/UsersList";
import {getAllUsers} from "../../data/store/user/userActions";
import {connect} from "react-redux";


class AllUsers extends Component {

  componentDidMount() {
    this.props.getAllUsers();
  }

  render() {
    return (
      <div>
        <div className="feed">
          <UsersList />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  users: state.users.users,
})

const mapDispatchToProps = (dispatch) => ({
  getAllUsers: () => dispatch(getAllUsers())
})

export default connect(mapStateToProps, mapDispatchToProps)(AllUsers);

