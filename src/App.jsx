import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Header from './assets/components/Header.jsx';
import Home from './assets/components/Home.jsx'
import { Route, Routes } from 'react-router-dom'
import Proyectos from '../src/pages/Proyectos.jsx'
import Residencias from '../src/pages/Residencias.jsx'
import Exploraciones from '../src/pages/Exploraciones.jsx'
import { motion } from 'framer-motion';

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
        </Routes>
      </div>
    </>
  )
}

export default App
