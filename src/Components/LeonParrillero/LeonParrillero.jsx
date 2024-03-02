import leonParrillero from '/leonParrillero.jpeg'
import './LeonParrillero.css'

const LeonParrillero = () => {
  return (
<>
    <h2 className='titulo'>Estamos preparando tus productos</h2>

    <div className="LeonContainer">
    <img src={leonParrillero} alt="Image" className="LeonImage" />
    <div className="smoke"></div>
  </div>
  </>
  )
}

export default LeonParrillero