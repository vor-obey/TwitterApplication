import React, {Component} from "react";
import {Button} from "../Button/Button";
import {connect} from "react-redux";
import {clearStore, isLogin} from "../../data/store/user/userActions";

class LogOutBtn extends Component {

  handleLogout = () => {
    localStorage.clear();
    this.props.clearStore();
    this.props.isLogin(false)
  }

  render() {
    return (
      <Button
        styleBtn="log-out"
        text="Log Out"
        onClick={this.handleLogout}
        link={"/login"}
      />
    );
  }
}

const mapDispatchToProps = dispatch => ({
  isLogin: (value) => dispatch(isLogin(value)),
  clearStore: () => dispatch(clearStore())
})

export default connect(null, mapDispatchToProps)(LogOutBtn)

