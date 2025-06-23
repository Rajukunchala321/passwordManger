import React, { Component } from 'react'

export default class PasswordContainerComponent extends Component {
  render() {
    return (
      <>
        <div className='pswManager-container'>
             <div className='psw-count-searchbar-container'>
                <div className='txt'>Your Passwords <span>0</span> </div>
                <input type='text' placeholder='Search here..' className='searchbar'/>
                <div className='psw-card-container'>

                </div>
             </div>
        </div>
      </>
    )
  }
}
