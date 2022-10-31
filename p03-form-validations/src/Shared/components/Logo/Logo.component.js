import React from "react";
import "./Logo.styles.css";
import logo from "../../svg/logo.svg";


export const Logo = ({setAnimate}) => {
  return (
      <img src={logo} className={`App-logo ${setAnimate && 'logo-animation'}` } alt="logo"  />
  );
};

export default Logo;
