import { body } from 'express-validator'
import { validateErrors } from './validate.error.js'
import { objectIdValid } from './db.validators.js'

/* -------------------------- POSTS --------------------------- */
export const validateAddPost = [
    body('title', 'Title cannot be empty')
        .notEmpty()
        .isLength({max: 50})
        .withMessage('Title cannot be overcome 50 characters'),
    body('description', 'Description cannot be empty')
        .notEmpty()
        .isLength({max: 50})
        .withMessage('Description cannot be overcome 50 characters'),
    body('course', 'Course cannot be empty')
        .notEmpty()
        .isIn(['TECNOLOGIA', 'TALLER', 'PRACTICA SUPERVISADA'])
        .withMessage('Course must be valid'),   
    body('creationDate', 'Creation date cannot be empty')
        .notEmpty()
        .isISO8601()
        .withMessage('Creation Date must be a valid date'),
    body('link', 'Link is required')
        .notEmpty(),
    validateErrors
]

/* --------------------------- COMMENTS -------------------------- */
export const validateAddComment = [
    body('username', 'Username cannot be empty')
        .notEmpty()
        .isLength({ min: 5, max: 25 })
        .withMessage('Username cannot exceed 25 characters and be less than 5 characters'),
    body('content', 'Content cannot be empty')
        .notEmpty()
        .isLength({max: 200})
        .withMessage('Content cannot exceed 200 characters'),
    body('post', 'Post cannot be empty')
        .notEmpty()
        .custom(objectIdValid),
    validateErrors
]