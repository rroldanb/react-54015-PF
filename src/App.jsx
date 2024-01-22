
import './App.css'
// import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Components/NavBar/NavBar'
import ItemListContainer from './Components/ItemListContainer/ItemListContainer'
import Logo from './Components/Logo/Logo'
function App() {


  return (
    <>
      <NavBar />
      <ItemListContainer greeting="Bienvenidos a RR&apos;s Grill Store" message="Todo para tu Parrilla"/>
      <Logo width={350} height={500}/>
    </>
  )
}

export default App
