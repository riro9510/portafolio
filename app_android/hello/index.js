const express =require("express");
const app = express();
require('dotenv').config()
// index.js

const { auth, requiresAuth } = require('express-openid-connect');
app.use(
  auth({
    authRequired: false,
    auth0Logout: true,
    issuerBaseURL: process.env.ISSUER_BASE_URL,
    baseURL: process.env.BASE_URL,
    clientID: process.env.CLIENT_ID,
    secret: process.env.SECRET,
    idpLogout: true,
  })
);
app.use(express.static(__dirname));
app.get("/", (req, res) => {
  //res.send(req.oidc.isAuthenticated() ? "logged in" : "logged out");
  res.sendFile(__dirname +"/index.html");
})
app.get("/content", requiresAuth(), (req, res) => {
  //res.send(JSON.stringify(req.oidc.user));
  console.log(req.oidc.user.nickname);
  if(req.oidc.user.nickname == "tere.olivares20"){
    console.log("es tere");
    res.sendFile(__dirname +"/admin.html");
  }
  else{console.log("no es tere");}
});

const port = process.env.PORT || 3000;
app.listen(port, () =>{
    console.log(`listen on port ${port}`)
});