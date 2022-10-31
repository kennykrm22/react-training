import React, {useState} from "react";
import { Button, Logo } from "../Shared/components";




const Header = ({ title }) => {
  const [logoMovingAndText, setLogoMovingAndText] = useState(true);

  const onClickButton=() => {
    setLogoMovingAndText(!logoMovingAndText);
  }

  return (
    <header className="App-header">
      <Logo setAnimate={logoMovingAndText}/>
      {logoMovingAndText && <h3>{title}</h3>}
      <Button type="Button" title="Animation on"  onClickButton={onClickButton} />
    </header>
  );
};

export default Header;
