import React, {Component} from "react";
import "./LogOut.sass";
import {connect} from "react-redux";
import {clearStore, isLogin} from "../../data/store/user/userActions";
import {Link} from "react-router-dom";

class LogOut extends Component {
  state = ({
    visibleBtn: false
  })

  handleLogout = () => {
    localStorage.clear();
    this.props.clearStore();
    this.props.isLogin(false)
  }

  handleVisibleBtn = () => (
    this.setState({
      visibleBtn: !this.state.visibleBtn
    })
  )

  render() {
    const {users, currentUserId} = this.props;
    const {visibleBtn} = this.state;
    const user = users.filter(user => user.id === currentUserId)[0];
    const btnVisible = visibleBtn ? "pop-up visible" : "pop-up"
    if (!user) {
      return null
    }

    return (
      <div className="log-out-wrapper">
        <img onClick={this.handleVisibleBtn} src={user.avatar_url} alt=""/>

        <div className="log-out-user-info">
          <span>{user.name}</span>
          <span className="login">{user.email || user.login}</span>
        </div>

        <div onClick={this.handleVisibleBtn} className="arrow-icon">
          <i className="fas fa-angle-down"/>
        </div>
        <Link to="/login" onClick={this.handleLogout}>
          <div className={btnVisible}>
            Log Out
          </div>
        </Link>

      </div>
    );
  }
}

const mapStateToProps = state => ({
  users: state.users.users,
  currentUserId: state.users.currentUserInfo.id
})

const mapDispatchToProps = dispatch => ({
  isLogin: (value) => dispatch(isLogin(value)),
  clearStore: () => dispatch(clearStore()),
})

export default connect(mapStateToProps, mapDispatchToProps)(LogOut)

