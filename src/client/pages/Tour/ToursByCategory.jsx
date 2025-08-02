import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getProductListByCategory } from '../../../services/productService'
import ProductList from '../../components/Products/ProductList/ProductList'

function ToursByCategory() {
  const { slug } = useParams()
  const [tours, setTours] = useState([])

  useEffect(() => {
    const fetchApi = async () => {
      const result = await getProductListByCategory(slug)
      setTours(result.reverse())
    }

    fetchApi()
  }, [slug])
  return (
    <>
      <ProductList tours={tours} />
    </>
  )
}

export default ToursByCategory
