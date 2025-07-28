import { useEffect, useState } from 'react'

function BlogAll() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/api/v1/posts')
      .then((res) => res.json())
      .then((data) => {
        setPosts(data)
      })
  }, [])

  console.log(posts)
  return (
    <>
      <ul>
        {posts.map((item) => {
          return <li key={item._id}>{item.title}</li>
        })}
      </ul>
    </>
  )
}

export default BlogAll
