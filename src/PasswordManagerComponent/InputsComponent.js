import React, { Component } from 'react'
import {v4 as uuidv4} from 'uuid'

class InputsComponent extends Component {
  constructor(){
    super()
    this.state ={
     formDetails:{
       websiteUrl:"",
      userName:'',
      password:''
     }
    }
  }

  handleOnChange =(event)=>{
    const {name, value}=event.target;
    this.setState((prevState)=>({
      formDetails:{
        ...prevState.formDetails,
        [name]:value,
        id:uuidv4()
        
      }
    }))
  }
  handleOnClick =(event)=>{
      event.preventDefault();
      const {formDetails}=this.state;
      this.props.onSubmit(formDetails);

      this.setState({
        formDetails:{
          websiteUrl:'',
          userName:'',
          password:''
        }
      })
  }
  
  render() {
    const {formDetails} = this.state
    return (
      <>
      <div className='inputs-container'>
        <div className='inputs'>
            <input name='websiteUrl' onChange={this.handleOnChange} value={formDetails.websiteUrl} className='input' type='text' placeholder='Enter Website' />
            <input name='userName' onChange={this.handleOnChange} value={formDetails.userName} className='input' type='text' placeholder='Enter Username' />
            <input name='password' onChange={this.handleOnChange} value={formDetails.password} className='input' type='password' placeholder='Enter Password' />
            <button  type='submit' onClick={this.handleOnClick}>Submit</button>
        </div>
      </div>
      </>
    )
  }
}
export default InputsComponent