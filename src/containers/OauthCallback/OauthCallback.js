import {Component} from "react";
import {getUserData} from "../../getUserData";

export class OauthCallback extends Component {

  async componentDidMount() {
    const code =
      window.location.href.match(/\?code=(.*)/) &&
      window.location.href.match(/\?code=(.*)/)[1];

    // code - user code from github

    if (code) {
      const user = await getUserData(code);

      if (user) {
       this.props.onSuccessfullyAuth();
      } else {
        alert("Failed to register");
      }
    }
  }

  render() {
    return null;
  }
}