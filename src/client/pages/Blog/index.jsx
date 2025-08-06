import { Outlet } from 'react-router-dom'
import PageHeader from '../../components/PageHeader/PageHeader'

function Blog() {
  return (
    <>
      <PageHeader title="PAGE BLOG" />
      <Outlet />
    </>
  )
}

export default Blog
