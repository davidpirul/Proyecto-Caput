import accionesList from './jsonmodules/acciones.json'

export default function Acciones() {

 
  
  return (
    <>
<h1>ACCIONES</h1>

  {accionesList.map((accion) => (
    <div key={accion.id} className='acciones'>
      <p>{accion.id}</p>
    </div>
  ) )}
    
    </>
  )
}