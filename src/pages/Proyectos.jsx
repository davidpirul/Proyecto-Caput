import proyectosList from './jsonmodules/proyectos.json'
import './css/container-year.css'
import { Container } from 'react-bootstrap'

export default function Proyectos() {
  return (
    <>
    <h1>PROYECTOS</h1>

<Container>
  <div className='years-container'>
    {proyectosList.map((proyecto) => (
    <div key={proyecto.id}>
      <p>{proyecto.id}</p>
    </div>
  ) )}
  </div>
</Container>

    </>
  )
}