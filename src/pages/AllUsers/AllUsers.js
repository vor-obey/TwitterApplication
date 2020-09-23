import React, {Component} from "react";
import "./AllUsers.sass";
import {UsersListItem} from "../../components/UsersListItem/UsersListItem";
import {getAllUsers, setCurrentUserId} from "../../data/store/user/userActions";
import {connect} from "react-redux";

class AllUsers extends Component {

  componentDidMount() {
    this.props.getAllUsers();
  }

  render() {
    const {users, currentUserId} = this.props;
    return (
        <div className="all-users">
          <h2 className="all-users-title">All user</h2>
          {users.map(user => (
            user.id !== currentUserId &&
            <UsersListItem
              uniqueId={user.id}
              getId={() => this.props.setCurrentUserId(user.id)}
              key={user.id}
              avatar={user.avatar_url}
              name={user.name}
              login={user.login}
              createDate={user.Test_date}
            />
          ))}
        </div>
    );
  }
}

const mapStateToProps = state => ({
  users: state.users.users,
  currentUserId: state.users.currentUserInfo.id,
})

const mapDispatchToProps = (dispatch) => ({
  setCurrentUserId: (id) => dispatch(setCurrentUserId(id)),
  getAllUsers: () => dispatch(getAllUsers()),
})

export default connect(mapStateToProps, mapDispatchToProps)(AllUsers);
