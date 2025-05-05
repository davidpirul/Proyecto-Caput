import accionesList from './jsonmodules/acciones.json';
import './css/container-year.css'
import { Container } from 'react-bootstrap';

export default function Acciones() {



  return (
    <>
      <h1>ACCIONES</h1>

      <Container>
        <div className='years-container'>
          {accionesList.map((accion) => (
            <div key={accion.id} className='acciones'>
              <p>{accion.id}</p>
            </div>
          ))}
        </div>
      </Container>
    </>
  )
}