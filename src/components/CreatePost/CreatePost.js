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
    if(this.state.textArea.length < 5){
      return alert("Минимальная длинна поста 5 символов")
    }
    this.props.createPost(this.state.textArea, userId, userImg, userName, userEmail)
    this.setState({
      textArea: ""
    })
  }

  render() {

    return (
      <div className="tweets">
        <div className="textarea-container">
          <textarea
            onChange={this.onChangeInputTextArea}
            value={this.state.textArea}
            name="add-tweet"
            rows="4"
            placeholder="Create new post..."
          />
        </div>


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