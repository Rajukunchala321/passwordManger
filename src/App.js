import React, { Component } from 'react'
import InputComponent from './PasswordManagerComponent/InputsComponent';
import PasswordContainerComponent from './PasswordManagerComponent/PasswordContainerComponent';
import './App.css'


class App extends Component {
    constructor(){
      super()
      this.state= {
        passwordList:[],
      }
    }
    handleSubmitedData = (data)=>{
      console.log('recived data', data)
      this.setState((prevState)=>({
        passwordList:[...prevState.passwordList, data],
      }))
    }
  render() {
    const {passwordList} = this.state 
    console.log(passwordList) 
    return (
      <>
      <div className='psw-container'>
        <img className='Logo' src='https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png' alt='' />
        <InputComponent  onSubmit={this.handleSubmitedData}/>
        <div className="pswManager-container">
          <div className="psw-count-searchbar-container">
            <div className="txt">
              Your Passwords <span>0</span>{" "}
            </div>
            <div>
              <input
                type="text"
                placeholder="Search here.."
                className="searchbar"
              />
              <label>
                <input type="checkbox" name="check" /> show password
              </label>
            </div>
          </div>
          {
          passwordList.map(each=>(
              <PasswordContainerComponent key={each.id} eachPswContent={each}/>
          ))
        }
        </div>
        
        
      </div>
      </>
    )
  }
}

export default App
