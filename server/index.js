const express = require("express");
const bodyParser = require("body-parser");
const FormData = require("form-data");
const fetch = require("node-fetch");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.json({type: "text/*"}));
app.use(bodyParser.urlencoded({extended: false}));

// Enabled Access-Control-Allow-Origin", "*" in the header so as to by-pass the CORS error.
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

app.post("/authenticate", async (req, res) => {
  try {
    const {client_id, redirect_uri, client_secret, code} = req.body;

    const data = new FormData();
    data.append("client_id", client_id);
    data.append("client_secret", client_secret);
    data.append("code", code);
    data.append("redirect_uri", redirect_uri);

    // Request to exchange code for an access token
    const accessTokenResponse = await fetch(`https://github.com/login/oauth/access_token`, {
      method: "POST",
      body: data
    });

    const paramsString = await accessTokenResponse.text();

    let params = new URLSearchParams(paramsString);
    const access_token = params.get("access_token");
    const scope = params.get("scope");
    const token_type = params.get("token_type");

    // Request to return data of a user that has been authenticated
    const userResponse = await fetch(
      `https://api.github.com/user?access_token=${access_token}&scope=${scope}&token_type=${token_type}`
    );

    const user = await userResponse.json();

    return res.status(200).json({
      user,
      access_token,
      scope,
      token_type,
    });
  } catch (error) {
    return res.status(400).json(error);
  }

});

const PORT = process.env.SERVER_PORT || 5000;
app.listen(PORT, () => console.log(`Listening on ${PORT}`));