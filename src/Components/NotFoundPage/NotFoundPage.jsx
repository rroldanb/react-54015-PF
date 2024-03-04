import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div>
      <h2 style={{marginTop:"12rem"}}>Error 404: Página no encontrada</h2>
      <img src="/leon.gif" alt="Página no encontrada" />
      <p>Lo sentimos, la página que buscas no existe.</p>
      <Link to= {"/"} className="btn btn-warning" style={{fontSize:"1.5rem"}}>
                  Volver a la tienda
                </Link>
    </div>
  );
}

export default NotFoundPage;
