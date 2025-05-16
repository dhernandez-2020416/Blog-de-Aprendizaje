import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Post = ({ post }) => {
    const [comments, setComments] = useState([])
    const [newComment, setNewComment] = useState({ username: '', content: '' })
    const [isSubmitting, setIsSubmitting] = useState(false)

    useEffect(() => {
        const fetchComments = async() => {
            try {
                const response = await axios.get(`http://localhost:3200/v1/comment/getComments/${post._id}`)
                setComments(response.data.comments || [])
            } catch (err) {
                console.error('Error fetching comments', err)
            }
        }
        fetchComments()
    }, [post._id])

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!newComment.username || !newComment.content) {
            alert('Por favor, completa todos los campos')
            return
        }

        setIsSubmitting(true)
        try {
            const response = await axios.post('http://localhost:3200/v1/comment/addComment',
                {
                    username: newComment.username,
                    content: newComment.content,
                    post: post._id,
                }
            )
            console.log('Comentario añadido:', response.data.newComment)
            
            setComments((prevComments) => [response.data.comment, ...prevComments])
            setNewComment({ username: '', content: '' })
            return 
        } catch (err) {
            console.error('Error adding comment', err)
            alert('Error al añadir el comentario')
        }
        finally{
            setIsSubmitting(false)
        }
    }

    return (
    <div className="post">
      <h2>{post.title}</h2>
      <p>{post.description}</p>
      <div className="post-meta">
        <p><strong>Curso:</strong> {post.course}</p>
        <p><strong>Fecha:</strong> {new Date(post.creationDate).toLocaleDateString('es-ES', { day: 'numeric', month: 'long', year: 'numeric' })}</p>
        <a href={post.link} className="post-link" target="_blank">Haz click para ver el proyecto!</a>
      </div>
      <div className="comments-section">
        <h3>Comentarios</h3>
        {comments.length == 0 ? (
          <p className="no-comments">No hay comentarios aún</p>
        ) : (
          comments.map((comment) => (
            <div key={comment._id} className="comment">
              <p className="comment-meta">{comment.username} <span>({new Date(comment.createDate).toLocaleDateString('es-ES', { day: 'numeric', month: 'long', year: 'numeric' })})</span></p>
              <p>{comment.content}</p>
            </div>
          ))
        )}
      </div>
      <div className="form-section">
        <h3>Añadir Comentario</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Tu nombre"
            value={newComment.username}
            onChange={(e) => setNewComment({ ...newComment, username: e.target.value })}
            disabled={isSubmitting}
          />
          <textarea
            placeholder="Escribe tu comentario"
            value={newComment.content}
            onChange={(e) => setNewComment({ ...newComment, content: e.target.value })}
            disabled={isSubmitting}
          />
          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Enviando...' : 'Enviar'}
          </button>
        </form>
      </div>
    </div>
    )
}

export default Post