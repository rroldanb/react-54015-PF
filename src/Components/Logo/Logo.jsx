import './Logo.css'
import rr_logo from '../../assets/rr_logo.png'

const Logo = ({width, height}) => {
  return (
    <div className='logo-container'>
        <img src={rr_logo} alt="Logo RR Grill Store" width={width}
        height={height} className='logo-imagen'/>
    </div>
  )
}

export default Logo