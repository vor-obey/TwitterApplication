import {Component} from "react";
import {getUserData} from "../../getUserData";

export class OauthCallback extends Component {
  async componentDidMount() {
    const code =
      window.location.href.match(/\?code=(.*)/) &&
      window.location.href.match(/\?code=(.*)/)[1];

    // TODO: Check url

    if (code) {
      const user = await getUserData(code);

      if (user) {
       this.props.onSuccessfullyAuth();
      } else {
        // TODO display error to a user
        alert("Error")
      }
    }
  }

  render() {
    return null;
  }
}