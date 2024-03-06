import "./Checkout.css"

import { useContext, useState } from 'react'
import { CartContext } from "../../Context/CartContext";

import { useForm } from 'react-hook-form';
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../data/firebaseConfig";
import { Link } from "react-router-dom";
import CartList from "../CartList/CartList";
import { toPesos } from "../../helpers/utils";
import Button from 'react-bootstrap/Button';

import { format } from 'date-fns';
import { es } from 'date-fns/locale';
import { isValidPhoneNumber } from 'libphonenumber-js';

const Checkout = () => {

    const [validPhoneNumber, setValidPhoneNumber] = useState(true);
    const [pedidoId, setPedidoId] = useState("");
    const { cart, totalPrice, clearCart } = useContext(CartContext);
    const { register, handleSubmit, formState: { errors }, watch } = useForm();

    const comprar = (data) => {
        const fechaActual = new Date();
        const fechaFormateada = format(fechaActual, 'dd/MM/yyyy', { locale: es });
        const horaFormateada = format(fechaActual, 'HH:mm:ss');

        if (!validPhoneNumber) {
            console.log('Número de teléfono no válido');
            return;
        }

        const pedido = {
            cliente: data,
            productos: cart,
            total: totalPrice(),
            fecha: fechaFormateada,
            hora: horaFormateada
        }

        const pedidosRef = collection(db, "orders");

        addDoc(pedidosRef, pedido)
            .then((doc) => {
                setPedidoId(doc.id);
                clearCart();
            })

    }

    const handlePhoneChange = (event) => {
        const value = event.target.value; 
        const sudamerica = ['AR', 'BO', 'CL', 'CO', 'EC', 'PE', 'UY', 'VE'];
        const isValid = sudamerica.some((country) => isValidPhoneNumber(value, country));
        setValidPhoneNumber(isValid);
        console.log(value, isValid)

    };

    const isDisabled = cart.length === 0
        || totalPrice() === 0
        || Object.keys(errors).length > 0
        || watch('email') !== watch('confirmarEmail')
        || !watch('nombre')
        || !watch('email')
        || !watch('telefono')
        || !validPhoneNumber;


    if (pedidoId) {
        return (
            <div className="container" style={{ marginTop: "20rem" }}>
                <h2 className="main-title">Muchas gracias por tu compra</h2>
                <p>Tu número de pedido es: </p>
                <h2>{pedidoId}</h2>
                <Link to="/">
                    <button className='btn btn-warning'>Volver a la tienda</button>
                </Link>
            </div>
        )
    }

    return (
        <div className="container" style={{ marginTop: "12rem" }}>
            <h2 className="main-title">Finalizar compra</h2>
            <div style={{ margin: "1rem", display: "flex", alignItems: "center", justifyContent: "center", gap: "2rem" }}>
                <p>Total a Pagar:</p>
                <h2>{toPesos(totalPrice())}</h2>
            </div>
            <p>Ingresa tus datos para poder generar tu pedido</p>
            <form className="formulario" onSubmit={handleSubmit(comprar)}>

                <div className="formFields">
                    <input type="text" placeholder="Nombre" {...register("nombre", { required: true })} />
                    {errors.nombre && <span className="formErrorMsg">Este campo es obligatorio</span>}
                </div>
                <div className="formFields">
                    <input type="email" placeholder="Email" {...register("email", { required: true })} />
                    {errors.email && <span className="formErrorMsg">Este campo es obligatorio</span>}
                </div>
                <div className="formFields">
                    <input type="email" placeholder="Confirmar Email" {...register("confirmarEmail", { required: true })} />
                    {errors.confirmarEmail && <span className="formErrorMsg">Este campo es obligatorio</span>}
                    {watch('email') !== watch('confirmarEmail') && <span className="formErrorMsg">Los correos electrónicos no coinciden</span>}
                </div>
                <div className="formFields">
                    <input
                        type="tel"
                        placeholder="Teléfono con código de área"
                        {...register("telefono", { required: true })}
                        onChange={handlePhoneChange}
                    />
                    {!validPhoneNumber && <span className="formErrorMsg">Número de teléfono no válido</span>}
                </div>

            <div
                style={{ margin: "1rem", display: "flex", alignItems: "center", justifyContent: "space-between" }}>

                <Link to="/">
                    <Button variant="outline-warning">Volver a la tienda</Button>
                </Link>
                <button className="submit btn btn-warning" type="submit" disabled={isDisabled}>Generar Pedido</button>
                <Link to="/shoppingCart">
                    <Button variant="outline-warning">Volver al Carrito</Button>
                </Link>
            </div>
            </form>
            <div className='cart-header' >
                <div >
                    <p>Estos son los productos en tu carrito</p>
                </div>
            </div>
            {
                cart.map((prod) => (
                    <div key={prod.id}>
                        <CartList prod={prod} />
                    </div>
                ))

            }
        </div>
    )
}

export default Checkout