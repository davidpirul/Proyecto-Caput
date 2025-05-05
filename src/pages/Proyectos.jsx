import proyectosList from './jsonmodules/proyectos.json'

export default function Proyectos() {
  return (
    <>
    <h1>PROYECTOS</h1>

    {proyectosList.map((proyecto) => (
    <div key={proyecto.id}>
      <p>{proyecto.id}</p>
    </div>
  ) )}
    </>
  )
}