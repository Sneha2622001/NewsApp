import React from 'react'
import Fading from './Fading.gif'
//converting class base to function base component...................
//export class Spinner extends Component {
  const Spinner = () =>{
  // render() {
    return (
      <div className='text-center'>
        <img src={Fading} alt="Fading" />
      </div>
    )
  // }
}

export default Spinner
