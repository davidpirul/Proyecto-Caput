import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { Route, Routes } from 'react-router-dom'
import { motion } from 'framer-motion';
import Header from './assets/components/Header.jsx';
import Home from './assets/components/Home.jsx'
import Proyectos from '../src/pages/Proyectos.jsx'
import Residencias from '../src/pages/Residencias.jsx'
import Exploraciones from '../src/pages/Exploraciones.jsx'
import CharlasTalleres from '../src/pages/CharlasTalleres.jsx';
import Acciones from '../src/pages/Acciones.jsx';
import Presentaciones from '../src/pages/Presentaciones.jsx';

function App() {

  const linkVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  return (
    <>
      <div>
        <motion.div
        initial="hidden"
        animate="visible"
        variants={linkVariants}
        >
        <Header />
        </motion.div>
        
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/proyectos' element={<Proyectos />} />
          <Route path='/residencias' element={<Residencias />} />
          <Route path='/exploraciones' element={<Exploraciones />} />
          <Route path='/charlasytalleres' element={<CharlasTalleres />} />
          <Route path='/acciones' element={<Acciones />} />
          <Route path='/presentaciones' element={<Presentaciones />} />
        </Routes>
      </div>
    </>
  )
}

export default App
