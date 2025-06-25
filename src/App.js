import React, { Component } from 'react'
import InputComponent from './PasswordManagerComponent/InputsComponent';
import PasswordContainerComponent from './PasswordManagerComponent/PasswordContainerComponent';
import './App.css'


class App extends Component {
  
  render() {
    let password_content =[
    {
      id:1,
      website_url:'',
      user_name:'',
      password:"",
    }
  ];
    return (
      <>
      <div className='psw-container'>
        <img className='Logo' src='https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png' alt='' />
        <InputComponent />
        {
          password_content.map(each=>(
              <PasswordContainerComponent key={each.id} eachPswContent={each}/>
          ))
        }
        
      </div>
      </>
    )
  }
}

export default App
