import Post from './posts.model.js'

export const addPost = async(req, res) =>{
    try {
        const {title, description, course, creationDate, link} = req.body

        const addPost = new Post(
            {
                title,
                description,
                course,
                creationDate,
                link
            }
        )

        await addPost.save()

        return res.send(
            {
                status: true,
                message: 'Post created successfully',
                post: addPost
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

export const getPost = async(req, res) => {
    try {
        const posts = await Post.find()

        return res.send(
            {
                success: true,
                message: 'Posts found',
                posts
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