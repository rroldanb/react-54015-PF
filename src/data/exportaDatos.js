/* import firebase from 'firebase/app';
// import 'firebase/firestore';
import { initializeApp } from "firebase/app";



const firebaseConfig = {
    apiKey: "AIzaSyCgrTfshB2HCiW34eBEYYavLgjQM43pV-A",
    authDomain: "rrgrillsrore.firebaseapp.com",
    projectId: "rrgrillsrore",
    storageBucket: "rrgrillsrore.appspot.com",
    messagingSenderId: "686398710205",
    appId: "1:686398710205:web:024c7fd028064b12f432d4"
  };

if (!firebase.apps.length) {
const app = initializeApp(firebaseConfig);

    // firebase.initializeApp(firebaseConfig);
  }
   */
  // Función para importar datos desde un archivo JSON a la colección "productos"
  export default function importarDatos() {
/*     const db = firebase.firestore();
  
    // Obtener el archivo JSON (asumiendo que está en la carpeta public)
    fetch('/productos.json')
      .then(response => response.json())
      .then(data => {
        // Insertar cada documento en la colección "productos"
        data.forEach(producto => {
          db.collection('productos').add(producto)
            .then(docRef => console.log(`Documento insertado con ID: ${docRef.id}`))
            .catch(error => console.error('Error al insertar documento:', error));
        });
      })
      .catch(error => console.error('Error al obtener datos del archivo JSON:', error)); */
      return 0
  }