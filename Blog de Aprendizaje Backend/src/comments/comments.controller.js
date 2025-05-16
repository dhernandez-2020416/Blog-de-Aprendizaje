import Comment from './comments.model.js'
import Post from '../posts/posts.model.js'

export const addComment = async(req, res) => {
    try {
        const {username, content, post} = req.body

        const createdPost = await Post.findById(post)

        if(!createdPost){
            return res.status(404).send(
                {
                    success: false,
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
                success: true,
                message: 'Comment created successfully',
                comment: addComment
            }
        )
    } catch (err) {
        console.error(err)
        return res.status(500).send(
            {
                success: false,
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
                success: true,
                message: 'Comments found',
                comments
            }
        )
    } catch (err) {
        console.error(err)
        return res.status(500).send(
            {
                success: false,
                message: 'General error',
                err
            }
        )
    }
}

export const getCommentsByPost = async(req, res) => {
    try {
        const { postId } = req.params

        const comments = await Comment.find({ post: postId }).sort({ post: -1 })

        if(comments.length == 0){
            return res.status(404).send(
                {
                    success: false,
                    message: 'There is no comments yet'
                }
            )
        }

        return res.send(
            {
                success: true,
                message: 'Comments found',
                comments
            }
        )
    } catch (err) {
        console.error(err)
        return res.status(500).send(
            {
                success: false,
                message: 'General error',
                err
            }
        )
    }
}