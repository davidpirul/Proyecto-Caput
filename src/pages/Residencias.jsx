import residenciasList from './jsonmodules/residencias.json'

export default function Residencias() {

  return (
    <>
    <h1>RESIDENECIAS</h1>

    {residenciasList.map((residencia) => (
    <div key={residencia.id}>
      <p>{residencia.id}</p>
    </div>
  ) )}
</>
  )
}