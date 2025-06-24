import React, { Component } from 'react'

export default class PasswordContainerComponent extends Component {
  
  render() {
    const passwordContent =this.props;
   console.log(passwordContent)
    return (
      <>
        <div className='pswManager-container'>
             <div className='psw-count-searchbar-container'>
                <div className='txt'>Your Passwords <span>0</span> </div>
                <input type='text' placeholder='Search here..' className='searchbar'/>
                
             </div>
             <div className='psw-card-container'>
                    <div className='each-psw-container'>
                        <div className='profile-txt'>Y</div>
                        <div className='fields-containers'>
                          <div className='fields'>website url</div>
                          <div className='fields'>User name</div>
                          <div className='fields'>Password</div>
                        </div>
                        <button>Delete</button>
                    </div>
                </div>
        </div>
      </>
    )
  }
}
