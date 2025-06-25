import React, { Component } from 'react'

export default class PasswordContainerComponent extends Component {
  
  render() {
    const eachPswContent =this.props;
   console.log(eachPswContent)
    return (
      <>
        <div className='pswManager-container'>
             <div className='psw-count-searchbar-container'>
                <div className='txt'>Your Passwords <span>0</span> </div>
                <div>
                  <input type='text' placeholder='Search here..' className='searchbar'/>
                  <label><input type='checkbox' name='check' /> show password</label>
                </div>
               
                
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
