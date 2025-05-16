import { useState, useEffect } from 'react'
import axios from 'axios'
import Post from '../components/Post'

export const Course = ({ course }) => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await axios.get(`http://localhost:3200/v1/post/getPosts/${course}`)
                setPosts(response.data.posts || [])
            } catch (err) {
                console.error('Error fetching posts', err)
            }
        }
        fetchPosts()
    }, [course])

  return (
    <div className="course-page">
      <h1>{course}</h1>
      {posts.length === 0 ? (
        <p className="no-posts">No hay publicaciones disponibles</p>
      ) : (
        posts.map((post) => <Post key={post._id} post={post} />)
      )}
    </div>
  )
}

export default Course