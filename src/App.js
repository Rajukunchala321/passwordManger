import React, { Component } from 'react'
import InputComponent from './PasswordManagerComponent/InputsComponent';
import PasswordContainerComponent from './PasswordManagerComponent/PasswordContainerComponent';
import './App.css'


class App extends Component {
  render() {
    return (
      <>
      <div className='psw-container'>
        <img className='Logo' src='https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png' alt='' />
        <InputComponent />
        <PasswordContainerComponent />
      </div>
      </>
    )
  }
}

export default App
