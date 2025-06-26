import React, { Component } from 'react'
import InputComponent from './PasswordManagerComponent/InputsComponent';
import PasswordContainerComponent from './PasswordManagerComponent/PasswordContainerComponent';
import './App.css'


class App extends Component {
    constructor(){
      super()
      this.state= {
        passwordList:[],
        showPassword:false,
        searchQuery:''
      }
    }
    handleSubmitedData = (data)=>{
      console.log('recived data', data)
      this.setState((prevState)=>({
        passwordList:[...prevState.passwordList, data],
      }))
    }
    handlePassword = ()=>{
      this.setState((prevState)=>({
        showPassword: !prevState.showPassword,
      }))
    }
    handleDelete =(id)=>{
      this.setState((prevState)=>({
        passwordList: prevState.passwordList.filter((item)=> item.id !== id)
      }))
    }
    handleSearch =(event)=>{
      this.setState({
        searchQuery:event.target.value,
      })
    }
  render() {
    const {passwordList, searchQuery} = this.state 
    console.log(passwordList) 
    const filteredList = passwordList.filter((item)=>(
      item.websiteUrl.toLowerCase().includes(searchQuery.toLowerCase()) || item.userName.toLowerCase().includes(searchQuery.toLowerCase())
    ))
    return (
      <>
      <div className='psw-container'>
        <img className='Logo' src='https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png' alt='' />
        <InputComponent  onSubmit={this.handleSubmitedData}/>
        <div className="pswManager-container">
          <div className="psw-count-searchbar-container">
            <p className="txt">
              Your Passwords <span>{passwordList.length}</span>
            </p>
            <div>
              <input
                type="text"
                placeholder="Search here.."
                className="searchbar"
                onChange={this.handleSearch}
              />
              <label>
                <input type="checkbox" name="check" onChange={this.handlePassword}/> show password
              </label>
            </div>
          </div>
          {
          filteredList.map(each=>(
              <PasswordContainerComponent key={each.id} eachPswContent={each} showPassword={this.state.showPassword} onDelete={this.handleDelete}/>
          ))
        }
        </div>
        
        
      </div>
      </>
    )
  }
}

export default App
