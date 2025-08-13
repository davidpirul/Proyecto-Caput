import proyectosList from './jsonmodules/proyectos.json'
import './css/container-year.css'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function Proyectos() {
  return (
    <>
      <h1>PROYECTOS</h1>
      <button onClick={() => navigate(-1)} className="btn btn-secondary">
        Volver
      </button>
      <Container>
        <div className='years-container'>

          {proyectosList.map((proyecto) => (
            <div key={proyecto.id}>
              <Link to={`/proyectos/${proyecto.id}`}>{proyecto.id}</Link>
            </div>
          ))}

        </div>
      </Container>

    </>
  )
}