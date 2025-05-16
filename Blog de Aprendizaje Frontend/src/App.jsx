import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Course from './pages/Course'

const App = () => (
  <div>
    {/* Barra de Navegación */}
    <nav>
      <div className="nav-container">
        <Link to="/"><h1>Blog de Aprendizaje - Daniel Hernández</h1></Link>
        <div className="nav-links">
          <Link to="/TECNOLOGIA">Tecnología</Link>
          <Link to="/TALLER">Taller</Link>
          <Link to="/PRACTICA SUPERVISADA">Práctica Supervisada</Link>
        </div>
      </div>
    </nav>

    {/* Contenido Principal */}
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/TECNOLOGIA" element={<Course course="TECNOLOGIA" />} />
        <Route path="/TALLER" element={<Course course="TALLER" />} />
        <Route path="/PRACTICA SUPERVISADA" element={<Course course="PRACTICA SUPERVISADA" />} />
      </Routes>
    </main>
  </div>
)

export default App
