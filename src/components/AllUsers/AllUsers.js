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
    const {users} = this.props;
    const currentUser = +localStorage.getItem("user-id");
    return (
        <div className="all-users">
          {users.map(user => (
            user.id !== currentUser &&
            <UsersList
              uniqueId={user.id}
              getId={() => this.props.getUserId(user.id)}
              key={user.id}
              avatar={user.avatar_url}
              name={user.name}
              login={user.login}
              createDate={user.createDate}
            />
          ))}
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

