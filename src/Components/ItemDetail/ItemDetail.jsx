export default function ItemDetail({ producto, greeting, message }) {
  return (
    <div>
      <header>
        <h2>{greeting}</h2>
        <p>{message}</p>
      </header>

      <section className="ItemDetailContainer">
        <img src={producto.img} alt={producto.nombre} title={producto.nombre} />
        <div className="descripcionDetail" id="descripcionDetail">
          <h3>{producto.nombre}</h3>
          {producto.unidad && <p>{producto.unidad}</p>}
          <p>Precio: {producto.precio}</p>
          <p>Stock: {producto.stock}</p>
          {producto.precioxkilo && (
            <p>Precio por Kilo: {producto.precioxkilo}</p>
          )}
          {producto.descripcion && <p>Descripción: {producto.descripcion}</p>}
        </div>
        {producto.caracteristicas && (
          <div className="caracteristicasDetail" id="caracteristicasDetail">
            <h3>Características:</h3>
            <ul>
              {Object.entries(producto.caracteristicas).map(([key, value]) => (
                <li key={key}>
                  <strong>{key}:</strong> {value}
                </li>
              ))}
            </ul>
          </div>
        )}
      </section>
    </div>
  );
}
