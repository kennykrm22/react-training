import React from 'react'
import "./Button.styles.css"

const Button = ({ title, onClickButton, isDisabled, ...props }) => {
  return (
    <button  onClick={onClickButton} disabled={isDisabled} {...props}>{title}</button>  
  )
}

export default Button