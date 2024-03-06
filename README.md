# Rubén Roldán - Proyecto Final: RR Grill Store
 Curso CoderHouse ReactJS, Comisión 54015

## Descripción del Proyecto
RR Grill Store es una aplicación web desarrollada en React y se apoya en Firebase para la gestión de la información. La aplicación simula una tienda de e-commerce especializada en productos relacionados con la parrilla.

### Enfoque de Diseño y Experiencia del Usuario
Además de una paleta de colores simples, RR Grill Store ofrece una navegación intuitiva que permite a los usuarios agregar productos al carrito directamente desde la lista de productos o desde la vista detallada. El diseño se centra en proporcionar una experiencia de usuario fluida y fácil de usar.

### Integración con Firebase
Firebase se utiliza para almacenar la lista de productos con todas sus características, la lista de categorías disponibles que se reflejan en la barra de navegación y las órdenes generadas por los usuarios.

### Navegación y Usabilidad
La página de inicio muestra todos los productos disponibles, y desde allí, los usuarios pueden filtrar los productos por categoría. Cada producto listado permite agregarlo directamente al carrito o ver más detalles. En la vista de detalles del producto, los usuarios pueden gestionar la cantidad y agregarlo al carrito. La navegación es clara y permite a los usuarios moverse fácilmente entre las diferentes secciones de la aplicación.

### Seguridad y Validación de Datos
Aunque no se han implementado mayores sistemas de seguridad para este proyecto, se ha realizado una validación básica de los campos del formulario de checkout para garantizar la precisión de la información proporcionada por el usuario.


## Flujo de la aplicación:
1. **Inicio desde el Icono del e-commerce:**
   - Al hacer clic en el icono del e-commerce, el usuario es dirigido a la página de inicio de la aplicación.

2. **Visualización de Todos los Productos:**
   - En la página de inicio, se muestran todos los productos disponibles en la tienda.

3. **Filtrado por Categorías:**
   - El usuario encuentra una lista de categorías que le permite filtrar los productos pertinentes. Al hacer clic en una categoría específica, se muestran solo los productos asociados a esa categoría.

4. **Exploración de Productos:**
   - Cada producto listado ofrece la opción de agregarlo directamente al carrito o ir a la vista detallada del producto. Esto se puede hacer con un click en la imagen del producto o en el botón dispuesto para este fin.

5. **Detalles del Producto:**
   - Al hacer clic en un producto para ver más detalles, el usuario es dirigido a una página que muestra la descripción del producto, la imagen, el precio y demas detalles almacenados para cada unoy además se ofrece un selector de cantidad. Desde aquí, pueden agregar el producto al carrito.
    - Una vez que el usuario agrega un producto al carrito, los botones de gestión de cantidad y agregar al carrito desaparecen, y son reemplazados por botones para ir al carrito o volver al listado de la categoría del producto.   
6. **Gestión del Carrito:**
   - El icono de carrito de compras muestra la cantidad de productos agregados y el total acumulado para la compra
   - Al hacer click en el icono se muestra el contenido del carrito permitiendo al usuario gestionar los productos agregados, ajustar las cantidades, eliminar productos, limpiar el contenido del carrito o proceder al proceso de pago.

7. **Finalización de la Compra:**
   - En la sección de checkout, se muestra el contenido del carrito con las mismas características que en la vista del carrito. Además, se presenta un formulario donde el usuario puede ingresar sus datos para completar la compra.
   - Una vez que todos los campos del formulario están validados, el usuario puede finalizar la compra. Después de esto, se almacena el número de pedido y se proporciona al usuario como confirmación de su compra.

8. **Búsqueda de Órdenes:**
   - En la sección mis órdenes, se permite al usuario ingresar un id de orden para buscarlo en la base de datos.
   - Una vez que se encuentra la orden se lista su contenido, fecha y hora de compra y su valor total ofreciendo la posibilida de repetir la compra, agregando directamemnte los productos de la compra anterior al carrito.



## Librerías externas utilizadas

### React y React DOM
- `React`: Librería de JavaScript utilizada para construir interfaces de usuario.
- `ReactDOM`: Módulo de React DOM utilizado para renderizar componentes React en el DOM del navegador.
- `useContext`: Hook de React utilizado para acceder al contexto en componentes funcionales.
- `useState`: Hook de React utilizado para agregar estado a componentes funcionales.
- `useEffect`: Hook de React utilizado para ejecutar efectos secundarios en componentes funcionales.

### React Router DOM
- `BrowserRouter`: Componente de React Router DOM utilizado para envolver la aplicación y habilitar el enrutamiento basado en el navegador.
- `Routes`: Componente de React Router DOM utilizado para definir las rutas de la aplicación.
- `Route`: Componente de React Router DOM utilizado para definir una ruta específica.
- `Link`, `NavLink`: Componentes de React Router DOM utilizados para crear enlaces de navegación.

### react-hook-form

- La librería [react-hook-form](https://react-hook-form.com/) es una herramienta poderosa para manejar formularios en React de manera sencilla y eficiente. Permite realizar validación de formularios, gestionar el estado del formulario y recuperar valores de entrada de manera efectiva.

- `useForm`: Hook de react-hook-form utilizado para manejar formularios en React de manera sencilla y eficiente.
- `register`: Función proporcionada por react-hook-form para registrar campos de formulario en componentes de React.
- `handleSubmit`: Función proporcionada por react-hook-form para manejar la presentación de datos del formulario.


###  libphonenumber-js
- [isValidPhoneNumber](https://github.com/catamphetamine/libphonenumber-js#isvalidphonenumber)
 librería de validación de números de teléfono  robusta, que proporciona una validación completa y flexible de los números de teléfono.

### React Bootstrap
- `Navbar`, `Container`, `Nav`: Componentes de React Bootstrap utilizados para crear una barra de navegación.
- `Row`, `Col`: Componentes de React Bootstrap utilizados para definir filas y columnas en una cuadrícula.
- `Button`: Componentes de React Bootstrap utilizados para crear botones.

### Firebase
- `initializeApp`: Función de Firebase utilizada para inicializar la aplicación Firebase.
- `getFirestore`: Función de Firebase utilizada para obtener una instancia de Firestore.
- `collection`, `addDoc`, `doc`, `getDoc`, `getDocs`, `orderBy`, `query`: Funciones de Firebase utilizadas para interactuar con Firestore.

### React Icons
- `BsCart`, `IoTrashOutline`, `BsEmojiFrown`: Iconos de React utilizados para representar elementos visuales.

### date-fns
- [date-fns](https://date-fns.org/docs/Getting-Started)
 proporciona el conjunto de herramientas más completo, pero simple y consistente para manipular fechas en JavaScript en un navegador y Node.js.
- `format` Retorna la cadena de fecha formateada en el formato dado. El resultado puede variar según el idioma local.
- `es` recurso de idioma español para el despliegue de fechas


### "HomeMade" librerías y utilidades
- `toPesos`: Función utilizada para formatear un número como moneda en pesos.
- `toCapital`: Función utilizada para formatear texto con la primera letra en mayúsculas.


