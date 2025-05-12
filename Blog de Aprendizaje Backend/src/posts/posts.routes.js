import { Router } from 'express'
import { addPost, getPost } from './posts.controller.js'
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

export default api