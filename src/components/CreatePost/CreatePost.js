import React, {Component} from "react";
import "./CreatePost.sass";
import {Button} from "../Button/Button";

class CreatePost extends Component {
  state = ({
    postValue: ""
  })

  onChangeInputTextArea = (e) => {
    this.setState({
      postValue: e.target.value
    })
  }

  createNewPost = () => {
      const {avatar_url, name, email, id} = this.props.user;
      const {createPost} = this.props;
      const {postValue} = this.state;

      if(postValue.length < 5){
        return alert("Minimum length post 5 symbol");
      }
      createPost(postValue, id, avatar_url, name, email);
      this.setState({
        postValue: ""
      })
  }

  render() {
    const {postValue} = this.state;
    return (
      <div className="tweets">
        <div className="textarea-container">
          <textarea
            onChange={this.onChangeInputTextArea}
            value={postValue}
            name="add-tweet"
            rows="4"
            placeholder="Create new post..."
          />
        </div>

        <Button
          link={"/feed"}
          onClick={this.createNewPost}
          text={"Post"}
          styleBtn={"post"}
        />
      </div>
    );
  }
}

export default CreatePost;