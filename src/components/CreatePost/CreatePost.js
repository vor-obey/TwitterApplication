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
      } else if(postValue.length > 600) {
        const length = postValue.split("").length;
        return alert(`Max length post 600 symbol. Your post is ${length - 600} characters longer`);
      }
      createPost(postValue, id, avatar_url, name, email);
      this.setState({
        postValue: ""
      })
  }

  render() {
    const {user} = this.props;
    const {postValue} = this.state;
    if(!user){
      return null
    }
    return (
      <div className="tweets">
        <div className="textarea-container">
          <img src={user.avatar_url} alt=""/>
          <textarea
            onChange={this.onChangeInputTextArea}
            value={postValue}
            name="add-tweet"
            rows="4"
            placeholder="Whats's happening?"
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