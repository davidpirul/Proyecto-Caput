import exploracionesList from './jsonmodules/exploraciones.json'
import './css/container-year.css'
import { Container } from 'react-bootstrap'

export default function Exploraciones() {
  return (
    <>
    <h1>EXPLORACIONES</h1>
<Container>
  <div className='years-container'>
    {exploracionesList.map((exploracion) => (
    <div key={exploracion.id}>
      <p>{exploracion.id}</p>
    </div>
  ) )}
  </div>
  </Container>
    </>
  )
}