import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Home from './assets/components/Home.jsx'
 
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Home />
      </div>
    </>
  )
}

export default App
