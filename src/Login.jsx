import React from "react";
// import { useState } from "react";
// import Home from "./Home/Home";
import LoginForm from "./LoginForm";
import Main from "./Main";
// import ReBlog from "./ReBlog";

export const Login = () => {
  const One = false
  return (
    <div className="validationForm">
      <div className="container">
        <div className="Main_left">
          <p>LEFT</p>
        </div>
        <div className="Main_right">
          {/* {state ? <Main /> : <LoginForm />} */}
          {/* <Main/> */}
          {/* <ReBlog/> */}
          {One ? <Main /> : <LoginForm />}
        </div>
      </div>
    </div>
  );
};
