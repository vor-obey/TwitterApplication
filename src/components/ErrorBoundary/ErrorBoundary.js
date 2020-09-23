import React, {Component} from "react";
import "./ErrorBoundary.sass";
import LogoTwitter from "./1261px-Twitter_bird_logo_2012.svg.webp";

class ErrorBoundary extends Component {
  state = ({
    error: false,
    errorMessage: ""
  })

  componentDidCatch(error, errorInfo) {
    this.setState({
      error: true,
      errorMessage: error
    })
    console.log(error, errorInfo)
  }

  render() {
    const {error} = this.state;

    return (
      error
        ? <div className="error-boundary">
          <img src={LogoTwitter} alt=""/>
        <p>Something went wrong, but don’t fret — let’s give it another shot.</p>
        </div>
        : this.props.children
    )
  }
}

export default ErrorBoundary;