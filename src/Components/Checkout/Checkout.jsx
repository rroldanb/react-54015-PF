import "./Checkout.css"
import getFirestore from 'firebase/firestore'
const db = getFirestore()

const Checkout = () => {
  return (
    <div className="checkout">
        <label htmlFor="name">Nombre</label>
        <input type="text" id='name' />
        <label htmlFor="email">email</label>
        <input type="text" id='email' />
        <label htmlFor="phone">telefono</label>
        <input type="text" id='phone' />
    </div>
  )
}

export default Checkout