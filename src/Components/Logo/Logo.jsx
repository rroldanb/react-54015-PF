// import React from 'react'
import './Logo.css'
import rr_logo from '../../assets/rr_logo.png'
const Logo = ({width, height}) => {
  return (
    <div>
        <img src={rr_logo} alt="Logo RR Grill Store" width={width}
        height={height} />
    </div>
  )
}

export default Logo