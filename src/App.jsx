
import './App.css'
// import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Components/NavBar/NavBar'
import ItemListContainer from './Components/ItemListContainer/ItemListContainer'

function App() {


  return (
    <>
      <NavBar />
      <ItemListContainer greeting="Bienvenidos a RR&apos;s Grill Store" message="Todo para tu Parrilla"/>
    </>
  )
}

export default App
