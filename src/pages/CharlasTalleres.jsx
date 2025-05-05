import charlasList from './jsonmodules/charlastalleres.json';

export default function CharlasTalleres() {
  return (
    <>
    <h1>CHARLAS Y TALLERES</h1>

    {charlasList.map((charlas) => (
    <div key={charlas.id}>
      <p>{charlas.id}</p>
    </div>
  ) )}
    </>
  )
}