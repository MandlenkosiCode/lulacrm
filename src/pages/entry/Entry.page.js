import React, { useState } from 'react';


import { LoginForm } from '../../components/login/Login.comp';
import { PasswordReset } from '../../components/password-reset/PasswordReset.comp';

import "./entry.style.css";

export const Entry = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [frmLoad, setFrmLoad] = useState("login");

  const handleOnChange = e =>{
    const {name, value} = e.target

    switch(name){
      case 'email':
        setEmail(value)
        break
      case 'password':
        setPassword(value)
        break
      default:
        break
    }
  }

  const handleOnSubmit =  e => {
    e.preventDefault()

    if(!email || !password) {
      alert("Enter all required fields")
    }
  }

  const formSwitcher = (frmType) => {
    setFrmLoad(frmType);
  }

  return (
    <div className="entry-page bg-info ">
      {frmLoad === "login" && (
      <LoginForm handleOnChange={handleOnChange}
        handleOnSubmit={handleOnSubmit}
        formSwitcher={formSwitcher}
        email={email}
        pass={password}
      />
      )}
      {frmLoad === "reset" && (
      <PasswordReset handleOnChange={handleOnChange}
        handleOnSubmit={handleOnSubmit}
        formSwitcher={formSwitcher}
        email={email}
      />
      )}
    </div>
  )
}
