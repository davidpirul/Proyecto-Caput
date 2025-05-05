import presentacionesList from './jsonmodules/presentaciones.json'

export default function Presentaciones() {
  return (
    <>
    <h1>PRESENTACIONES</h1>

    {presentacionesList.map((presentacion) => (
    <div key={presentacion.id}>
      <p>{presentacion.id}</p>
    </div>
  ) )}
    </>
  )
}