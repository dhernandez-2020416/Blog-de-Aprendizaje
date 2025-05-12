import { Schema, model } from 'mongoose'

const postModel = new Schema(
    {
        title: {
            type: String,
            required: [true, 'Title is required'],
            maxLength: [50, 'Cannot exceed 50 characters']
        },
        description: {
            type: String,
            required: [true, 'Description is required'],
            maxLength: [200, 'Cannot exceed 200 characters']
        },
        course: {
            type: String,
            required: [true, 'Course is required'],
            maxLength: [50, 'Cannot exceed 50 characters'],
            enum: ['TECNOLOGIA', 'TALLER', 'PRACTICA SUPERVISADA']
        },
        creationDate: {
            type: Date,
            required: [true, 'Creation date is required']
        },
        link: {
            type: String,
            required: [true, 'Link is required']    
        }
    }
)

export default model('Post', postModel)