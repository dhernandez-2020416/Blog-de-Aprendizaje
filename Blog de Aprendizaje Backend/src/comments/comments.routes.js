import { Router } from 'express'
import { addComment, getComments, getCommentsByPost } from './comments.controller.js'
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

api.get(
    '/getComments/:postId',
    getCommentsByPost
)


export default api