import { FaTwitter, FaGithub, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {


    return (
        <div className="footer-container">

            <div className="footer-content"
                style={{ backgroundColor: "grey", marginTop: "5rem", color: "black", alignItems: "center", borderRadius: "1rem" }}>
                <h3 style={{ fontFamily: "ui-serif, Georgia, Cambria, Times, serif", fontSize: "2rem", fontWeight: "600", paddingTop: "2rem" }}>Rubén Roldán</h3>
                <h4>Proyecto Final Curso ReactJS, Comisión 54015</h4>
                <section>
                    <h4>Entregables:</h4>
                    <ul style={{ listStylePosition: "inside", color: "orange" }}>
                        <li ><Link to="/navbar" style={{ color: "orange" }}>NavBar</Link></li>
                        <li><Link to="/cartwidget" style={{ color: "orange" }}>CartWidget</Link></li>
                        <li><Link to="/itemlistcontainer" style={{ color: "orange" }}>ItemListContainer</Link></li>

                        <li> <Link to="/itemlistcontainer" style={{ color: "orange" }}>ItemList</Link></li>
                        <ul>
                            <li> ItemQuantitySelector</li>
                            <li> Description</li>
                            <li> AddItemButton</li>
                        </ul>
                        <li>Checkout</li>
                        <ul>
                            <li> Brief (detalle de compra)</li>
                        </ul>
                    </ul>
                </section>
            </div>
            <div className="social-icons">
                <a href="https://twitter.com/tu_usuario" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
                <a href="https://github.com/tu_usuario" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                <a href="https://linkedin.com/in/tu_usuario" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
            </div>
        </div>


    )
}

export default Footer