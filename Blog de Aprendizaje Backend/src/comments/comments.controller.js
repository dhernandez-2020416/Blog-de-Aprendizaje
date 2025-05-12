import Comment from './comments.model.js'
import Post from '../posts/posts.model.js'

export const addComment = async(req, res) => {
    try {
        const {username, content, post} = req.body

        const createdPost = await Post.findById(post)

        if(!createdPost){
            return res.status(404).send(
                {
                    satatus: false,
                    message: 'Post not found'
                }
            )
        }

        const addComment = new Comment(
            {
                username,
                content,
                post
            }
        )

        await addComment.save()

        return res.send(
            {
                status: true,
                message: 'Comment created successfully',
                comment: addComment
            }
        )
    } catch (err) {
        console.error(err)
        return res.status(500).send(
            {
                status: false,
                message: 'General Error'
            }
        )
    }
}

export const getComments = async(req, res) =>{
    try {
        const comments = await Comment.find()

        return res.send(
            {
                status: true,
                message: 'Comments found',
                comments
            }
        )
    } catch (err) {
        console.error(err)
        return res.status(500).send(
            {
                status: false,
                message: 'General error',
                err
            }
        )
    }
}