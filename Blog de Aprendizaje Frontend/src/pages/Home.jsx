import { Link } from 'react-router-dom'

export const Home = () => {
  return (
    <div className='principalPage'>
        <div className='courses'>
            <Link to='/TECNOLOGIA' className='course'>
              <h2>Tecnología</h2>
              <p>Haz click para ver las publicaciones!</p>
            </Link>
            <Link to='/TALLER' className='course'>
              <h2>Taller</h2>
              <p>Haz click para ver las publicaciones!</p>
            </Link>
            <Link to='/PRACTICA SUPERVISADA' className='course'>
              <h2>Practica Supervisada</h2>
              <p>Haz click para ver las publicaciones!</p>
            </Link>
        </div>
    </div>
  )
}

export default Home