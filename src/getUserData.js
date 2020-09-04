import {REACT_APP_CLIENT_ID, REACT_APP_CLIENT_SECRET, REACT_APP_REDIRECT_URI} from "./OAuthConst/OAuthConst";

export const getUserData = async (code) => {
  try {
    const authResponse = await fetch(`http://localhost:5000/authenticate`, {
      method: "POST",
      body: JSON.stringify({
          client_id: REACT_APP_CLIENT_ID,
          redirect_uri: REACT_APP_REDIRECT_URI,
          client_secret: REACT_APP_CLIENT_SECRET,
          code: code
        }
      )
    });

    const authData = await authResponse.json();
    localStorage.setItem("token-data", JSON.stringify(authData.access_token))
    localStorage.setItem("user-id", JSON.stringify(authData.user.id))
    await addDataToDb(authData);

    return authData.user;
  } catch (e) {
    return null;
  }
}

export const addDataToDb = async (data) => {
  const url = "http://localhost:3002/users/"
  const dataFromDb = await fetch(url)
  dataFromDb.id === data.id
    ? console.log(new Error("Such element already exists"))
    : await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8"
      },
      body: JSON.stringify(data)
    })
}




