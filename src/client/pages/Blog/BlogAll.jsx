import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function BlogAll() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/api/v1/posts')
      .then((res) => res.json())
      .then((data) => {
        setPosts(data)
      })
  }, [])

  return (
    <>
      <h1>Blog Travel</h1>
      <ul>
        {posts.map((item) => {
          return (
            <li key={item._id}>
              <Link to={'/blog/' + item._id}>{item.title}</Link>
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default BlogAll
