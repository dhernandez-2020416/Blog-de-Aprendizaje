import { Router } from 'express'
import { addPost, getPost, getPostByCourse } from './posts.controller.js'
import { validateAddPost } from '../../helpers/validators.js'

const api = Router()

api.post(
    '/addPost',
    [
        validateAddPost
    ], 
    addPost
)

api.get(
    '/getPosts',
    getPost
)

api.get(
    '/getPosts/:course',
    getPostByCourse
)

export default api