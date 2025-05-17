import { isValidObjectId } from 'mongoose'
import Post from '../src/posts/posts.model.js'

export const objectIdValid = async(objectId)=>{
    if(!isValidObjectId(objectId)){
        throw new Error(`The id is not objectId valid`)
    }
}

const posts = [
  {
    title: "Calculadora Gráfica",
    description: "Calculadora que cumple con todas las funciones de la calculadora gráfica hecha en java",
    course: "TALLER",
    creationDate: new Date("2023-04-15"),
    link: "https://github.com/dhernandez-2020416/Calculadora-Grafica.git"
  },
  {
    title: "Ejercicios básicos hechos en Java",
    description: "Creación de funciones que realizan suma, resta, división y multiplicación en java",
    course: "TECNOLOGIA",
    creationDate: new Date("2023-05-18"),
    link: "https://github.com/dhernandez-2020416/Ejercicios-B-sicos-de-Java.git"
  },
  {
    title: "Proyecto final de mySql 2024",
    description: "Diseño de base de datos que maneja una empresa con departamentos, empleados, clientes y cuentas en mysql",
    course: "PRACTICA SUPERVISADA",
    creationDate: new Date("2023-07-18"),
    link: "https://github.com/dhernandez-2020416/Proyecto-Final-de-Base-de-Datos-2024.git"
  },
  {
    title: "Library Final",
    description: "Crud que maneja una libreria donde se hace prestamos de libros hechos en java",
    course: "TECNOLOGIA",
    creationDate: new Date("2024-04-10"),
    link: "https://github.com/dhernandez-2020416/Library-Final.git"
  },
  {
    title: "Kinal Store",
    description: "Aplicación hecha con java SE que maneja las ventas y manejo de inventario de una empresa",
    course: "TALLER",
    creationDate: new Date("2024-08-18"),
    link: "https://github.com/dhernandez-2020416/Kinal-Store.git"
  },
  {
    title: "Java EE Ventas",
    description: "Aplicación hecha con java EE que maneja las ventas y manejo de inventario de una empresa",
    course: "PRACTICA SUPERVISADA",
    creationDate: new Date("2024-07-14"),
    link: "https://github.com/dhernandez-2020416/Java-EE-Ventas.git"
  },
  {
    title: "Caso Proyecto Coperex",
    description: "Software que maneja empresas y sus categorias mediante una autenticación donde solo los admin pueden ver estos datos que se manejan a través de mongoDB",
    course: "PRACTICA SUPERVISADA",
    creationDate: new Date("2025-02-14"),
    link: "https://github.com/dhernandez-2020416/Proyecto-Coperex-Daniel-Hernandez.git"
  },
  {
    title: "Gestor de Opiniones",
    description: "Software que maneja publicaciones, sus categorias y comentarios de usuarios a estas, los datos se manejan a través de mongoDB",
    course: "TALLER",
    creationDate: new Date("2025-02-20"),
    link: "https://github.com/dhernandez-2020416/Proyecto-Coperex-Daniel-Hernandez.git"
  },
  {
    title: "Primer Página Web 2025",
    description: "Página web que habla sobre mi pasatiempo favorito, mi biografia y una replica de la página principal de kinal",
    course: "TECNOLOGIA",
    creationDate: new Date("2025-03-11"),
    link: "https://github.com/dhernandez-2020416/Primer-Pagina-Web-2025.git"
  }
]

export const addPostsToDB = async () => {
  try {
    for (let i = 0; i < posts.length; i++) {
      const postData = posts[i]

      const post = new Post(postData)
      await post.save()

      console.log(`Post "${post.title}" añadido correctamente.`)
    }
    console.log('Todos los posts fueron añadidos correctamente.')
  } catch (error) {
    console.error('Error añadiendo posts:', error)
  }
}