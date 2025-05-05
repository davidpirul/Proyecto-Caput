import residenciasList from './jsonmodules/residencias.json'
import './css/container-year.css'
import { Container } from 'react-bootstrap'

export default function Residencias() {

  return (
    <>
    <h1>RESIDENECIAS</h1>

<Container>
  <div className='years-container'>
    {residenciasList.map((residencia) => (
    <div key={residencia.id}>
      <p>{residencia.id}</p>
    </div>
  ) )}
  </div>
  </Container>
</>
  )
}