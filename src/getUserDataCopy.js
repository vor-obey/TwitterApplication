import {REACT_APP_CLIENT_ID, REACT_APP_CLIENT_SECRET, REACT_APP_REDIRECT_URI} from "./OAuthConst/OAuthConst";

export const getUserData = (code) => {
  fetch(`http://localhost:5000/authenticate`, {
    method: "POST",
    body: JSON.stringify({
        client_id: REACT_APP_CLIENT_ID,
        redirect_uri: REACT_APP_REDIRECT_URI,
        client_secret: REACT_APP_CLIENT_SECRET,
        code: code
      }
    )
  })
    .then(response => response.json())
    .then(function (data) {
      localStorage.setItem("token-data", JSON.stringify(data.access_token))
      localStorage.setItem("user-id", JSON.stringify(data.user.id))
      console.log(data.user)
      return data.user
      })
    .then( userData => {
    fetch("http://localhost:3002/users/",{
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8"
      },
      body: JSON.stringify(userData)
    })
      .then(response => response.json())
      .then(data => console.log(data))
  })
    .catch(error => console.log("ERROR", error))
}

 export const addDataToDb = () => {

 }
