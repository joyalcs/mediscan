import React from 'react'
import LeftHomeImage from '../assets/images/left-home.png'

const LeftHome = () => {
  return (
    <div>
        <img src={LeftHomeImage} height={700} width={700} className='img-fluid' style={{marginLeft:30}} />
    </div>
  )
}

export default LeftHome