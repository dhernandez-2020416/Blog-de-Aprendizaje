import { Schema, model } from 'mongoose'

const commentModel = new Schema(
    {
        username: {
            type: String,
            required: [true, 'Username is required'],
            maxLength: [25, 'Username cannot exceed 25 characters'],
            minLength: [5, 'Username cannot be less than 5 characters']
        },
        content: {
            type: String,
            required: [true, 'Content is required'],
            maxLength: [200, 'Content cannot exceed 200 characters']
        },
        createDate: {
            type: Date,
            default: Date.now
        },
        post: {
            type: Schema.Types.ObjectId,
            ref: 'Post',
            required: [true, 'Comment is required']
        }
    }
)

export default model('Comment', commentModel)