import { useEffect, useState } from 'react'
import { getProductList } from '../../../services/productService'
import ProductList from '../../components/Products/ProductList/ProductList'

function TourAll() {
  const [tours, setTours] = useState([])

  useEffect(() => {
    const fetchApi = async () => {
      const result = await getProductList()
      setTours(result.reverse())
    }

    fetchApi()
  }, [])
  return (
    <>
      <ProductList tours={tours} />
    </>
  )
}

export default TourAll
