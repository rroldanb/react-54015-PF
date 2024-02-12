import productosJson from "../data/productos.json";


export function buscaCategoria(categoryId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (categoryId === undefined) {
        const productosActivos = productosJson.filter((item) => {
          return item.activo;
        });
        resolve(productosActivos);
      } else {
        const productosFiltrados = productosJson.filter((item) => {
          return item.activo && item.categoria === categoryId;
        });
                if (productosFiltrados.length === 0) {
          reject("No hay elementos disponibles para esta categoría");
        }
        resolve(productosFiltrados);
      }
    }, 2000);
  });
}

export function buscaId(itemId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const producto = productosJson.find((producto) => producto.id === itemId);
      if (producto) {
        resolve(producto);
      } else {
        reject("El producto que buscas ya no está disponible");
      }
    }, 2000);
  });
}

export const fakeProduct = {
  "id": "producto-no-encontrado",
  "nombre": "Producto no encontrado",
  "precio": 0,
  "stock": 0,
  "unidad": "",
  "img": "https://cdnx.jumpseller.com/todo-ssangyong/image/5630694/resize/635/635?1638889438",
  "descripcion": "Lo sentimos, el producto que buscas no está disponible en este momento.",
  "activo": false,
  "categoria": ""
};