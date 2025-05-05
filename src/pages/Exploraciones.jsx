import exploracionesList from './jsonmodules/exploraciones.json'

export default function Exploraciones() {
  return (
    <>
    <h1>EXPLORACIONES</h1>

    {exploracionesList.map((exploracion) => (
    <div key={exploracion.id}>
      <p>{exploracion.id}</p>
    </div>
  ) )}
    </>
  )
}