import React from 'react'
import "./Input.styles.css";

const Input = ({ label, ChangeValue, ...props }) => {
  return (
    <div className="form-input">
      <label htmlFor={props.name}>{label}</label>
      <input id={props.name} name={props.name} onChange={ChangeValue} {...props}/>
    </div>
  )
}

export default Input