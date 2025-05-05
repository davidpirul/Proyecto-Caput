import presentacionesList from './jsonmodules/presentaciones.json'
import './css/container-year.css'
import { Container } from 'react-bootstrap'

export default function Presentaciones() {
  return (
    <>
      <h1>PRESENTACIONES</h1>

      <Container>
        <div className='years-container'>
          {presentacionesList.map((presentacion) => (
            <div key={presentacion.id}>
              <p>{presentacion.id}</p>
            </div>
          ))}
        </div>
      </Container>
    </>
  )
}