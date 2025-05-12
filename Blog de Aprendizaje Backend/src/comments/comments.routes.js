import { Router } from 'express'
import { addComment, getComments } from './comments.controller.js'
import { validateAddComment } from '../../helpers/validators.js'

const api = Router()

api.post(
    '/addComment',
    [
        validateAddComment
    ],
    addComment
)

api.get(
    '/getComments',
    getComments
)

export default api