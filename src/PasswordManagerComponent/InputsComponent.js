import React, { Component } from 'react'


class InputsComponent extends Component {
  render() {
    return (
      <>
      <div className='inputs-container'>
        <div className='inputs'>
            <input className='input' type='text' placeholder='Enter Website' />
            <input className='input' type='text' placeholder='Enter Username' />
            <input className='input' type='password' placeholder='Enter Password' />
            <button  type='submit'>Submit</button>
        </div>
      </div>
      </>
    )
  }
}
export default InputsComponent