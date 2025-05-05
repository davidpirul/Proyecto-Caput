import charlasList from './jsonmodules/charlastalleres.json';
import './css/container-year.css'
import { Container } from 'react-bootstrap';

export default function CharlasTalleres() {
  return (
    <>
      <h1>CHARLAS Y TALLERES</h1>

      <Container>
        <div className='years-container'>
          {charlasList.map((charlas) => (
            <div key={charlas.id}>
              <p>{charlas.id}</p>
            </div>

          ))}
        </div>
      </Container>
    </>
  )
}