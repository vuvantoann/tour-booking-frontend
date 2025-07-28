import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
function BlogDetail() {
  const params = useParams()

  const [post, setPost] = useState()

  useEffect(() => {
    fetch(`http://localhost:3000/api/v1/posts/detail/${params._id}`)
      .then((res) => res.json())
      .then((data) => {
        setPost(data)
      })
  }, [])

  return (
    <>
      {post && (
        <div>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      )}
    </>
  )
}

export default BlogDetail
