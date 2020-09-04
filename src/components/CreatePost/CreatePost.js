import React, {Component} from "react";
import "./CreatePost.sass";
import {Button} from "../../Button/Button";

class CreatePost extends Component {
  state = ({
    textArea: ""
  })

  onChangeInputTextArea = (e) => {
    this.setState({
      textArea: e.target.value
    })
  }

  createNewPost = () => {
    const props = this.props.currentUser;
    const userImg = props.avatar_url;
    const userName = props.name;
    const userEmail = props.email;
    const userId = localStorage.getItem("user-id")
    this.props.createPost(this.state.textArea, userId, userImg, userName, userEmail)
  }

  render() {

    return (
      <div className="tweets">
        <textarea
          onChange={this.onChangeInputTextArea}
          value={this.state.textArea}
          name="add-tweet"
          rows="4"
          placeholder="What happen?"
        />

        <Button
          link={""}
          onClick={this.createNewPost}
          text={"Post"}
          styleBtn={"post"}
        />
      </div>
    );
  }
}

export default CreatePost;