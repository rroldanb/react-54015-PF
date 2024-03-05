import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdAlternateEmail } from 'react-icons/md';
import { Link } from 'react-router-dom';
import marbleBackground from "/img/marble-background.webp"
const Footer = () => {


    return (
        <div className="footer-container">

            <div className="footer-content"

                style={{
                    backgroundImage: `url(${marbleBackground})`, 
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    marginTop: "30rem",
                    color: "black",
                    alignItems: "center",
                    borderRadius: "1rem",
                    padding: "2rem",
                    fontWeight:"600"
                }}
                >
                    <div
                    style={{backgroundColor:"slategrey", padding:"0 2rem", opacity:".8"}}
                    >

                <h3 style={{ fontFamily: "ui-serif, Georgia, Cambria, Times, serif", fontSize: "2rem", fontWeight: "600", paddingTop: "2rem" }}>Rubén Roldán</h3>
                <h4>Proyecto Final Curso ReactJS, Comisión 54015</h4>
                <section>
                    <h4>Descripción del proyecto:</h4>
                    <ul style={{ listStylePosition: "inside", color: "orange", paddingBottom: "2rem" }}>
                        <li style={{ color: "white", fontSize: "1rem" }}>RR Grill Store es una aplicación web desarrollada en React y Firebase, centrada en la venta de productos relacionados con la parrilla. Ofrece una navegación simple y una experiencia de usuario fluida, permitiendo a los usuarios explorar productos, agregarlos al carrito y completar sus compras de manera efectiva.</li>
                        <li style={{ color: "white", fontSize: "1rem" }}>El flujo de la aplicación incluye la visualización de productos, filtrado por categorías, exploración de productos con detalles, gestión del carrito y finalización de la compra en la sección de checkout. Se han utilizado varias herramientas y librerías, incluyendo React, Firebase, react-hook-form y otras para implementar la funcionalidad requerida.</li>
                        <li style={{ color: "yellow", fontSize: "1rem" }}>Este proyecto es el resultado del curso CoderHouse ReactJS, Comisión 54015.</li>
                    </ul>
                </section>
                    </div>

            </div>

            <div className="social-icons">
                <Link to="mailto:ruben.roldan.b@gmail.com" target="_blank" rel="noopener noreferrer"><MdAlternateEmail /></Link>
                <Link to="https://github.com/rroldanb" target="_blank" rel="noopener noreferrer"><FaGithub /></Link>
                <Link to="https://linkedin.com/in/ruben-roldan" target="_blank" rel="noopener noreferrer"><FaLinkedin /></Link>
            </div>
        </div>


    )
}

export default Footer