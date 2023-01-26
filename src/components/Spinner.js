import React, { Component } from 'react'
import Fading from './Fading.gif'
export class Spinner extends Component {
  render() {
    return (
      <div className='text-center'>
        <img src={Fading} alt="Fading" />
      </div>
    )
  }
}

export default Spinner
