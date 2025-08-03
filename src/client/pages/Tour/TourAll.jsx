import { useEffect, useState } from 'react'

import ProductList from '../../components/Products/ProductList/ProductList'
import { getProductList } from '../../services/productService'

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
