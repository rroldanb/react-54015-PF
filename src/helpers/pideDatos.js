// import productosJson from "../data/productos.json";
import productosJson from "../data/productos.json";
// import {getFireStore} from "firebase/firestore"


// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyCgrTfshB2HCiW34eBEYYavLgjQM43pV-A",
//   authDomain: "rrgrillsrore.firebaseapp.com",
//   projectId: "rrgrillsrore",
//   storageBucket: "rrgrillsrore.appspot.com",
//   messagingSenderId: "686398710205",
//   appId: "1:686398710205:web:024c7fd028064b12f432d4"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);


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