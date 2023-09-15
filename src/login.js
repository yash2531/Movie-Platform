import React , { useState } from "react";

import "./App.css";
function Login ( { onLogin })  {

    const [username, setUsername]= useState(" ");
    const [password, setPassword]= useState(" ");
    

   const handleLogin = () => {
    onLogin(username);
   } ;

    return (
      <div className="login">
        <div>
        <h2>Sign In</h2>
        <input className="input-name"
          type="text"
          placeholder="Email or Phone number"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <input className="input-pw"
          type="text"
          placeholder="Password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button onClick={handleLogin}>SignIn</button>
        <br></br>

       
      </div>
      </div>
    );
}
export default Login;