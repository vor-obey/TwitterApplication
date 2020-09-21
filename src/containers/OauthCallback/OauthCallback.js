import {Component} from "react";
import {getUserData} from "../../getUserData";
import {connect} from "react-redux";
import {isLogin, setUserId} from "../../data/store/user/userActions";

class OauthCallback extends Component {

  async componentDidMount() {
    const code =
      window.location.href.match(/\?code=(.*)/) &&
      window.location.href.match(/\?code=(.*)/)[1];

    if (code) {
      const user = await getUserData(code);

      if (user) {
        this.props.setUserId(user[0], user[1])
        this.props.isLogin(true);
        window.location.href = "/";
      } else {
        alert("Failed to register");
      }
    }
  }

  render() {
    return null;
  }
}

const mapDispatchToProps = dispatch => ({
  setUserId: (id, token) => dispatch(setUserId(id, token)),
  isLogin: (value) => dispatch(isLogin(value))
})

export default connect(null, mapDispatchToProps)(OauthCallback);

