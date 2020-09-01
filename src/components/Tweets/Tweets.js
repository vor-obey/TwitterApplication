import React, {Component} from "react";
import "./Tweets.sass";

class Tweets extends Component {
  state = ({
    textArea: ""
  })

  onChangeInputTextArea = (e) => {
    this.setState({
      textArea: e.target.value
    })
  }

  addTweet = () => {
    const data = this.state.textArea;
    fetch("http://localhost:3002/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8"
        },
        body: JSON.stringify({feald: data})
      }
    )
      .then(response => console.log(response))
      .catch(error => console.log(error))
  }

  render() {
    console.log(this.state.textArea)
    return (
      <div className="tweets">
        <textarea
          onChange={this.onChangeInputTextArea}
          value={this.state.textArea}
          name="add-tweet"
          rows="4"
          placeholder="What happen?"/>

        <button onClick={this.addTweet}>Post</button>
      </div>
    );
  }
}

export default Tweets;