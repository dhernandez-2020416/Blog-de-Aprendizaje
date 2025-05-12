'use strict'

import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import morgan from 'morgan'
import postRoutes from '../src/posts/posts.routes.js'
import commentRoutes from '../src/comments/comments.routes.js'

const configs = (app) => {
    app.use(express.json())
    app.use(express.urlencoded({extended: false}))
    app.use(cors())
    app.use(helmet())
    app.use(morgan('dev'))
}

const routes = (app) =>{
    app.use('/v1/post', postRoutes)
    app.use('/v1/comment', commentRoutes)
}

export const initServer = async() =>{
    const app = express()
    try {
        configs(app)
        routes(app)
        app.listen(process.env.PORT) 
        console.log(`Server running in port ${process.env.PORT}`)
    } catch (err) {
        console.error('Server init failed', err)
    }
}