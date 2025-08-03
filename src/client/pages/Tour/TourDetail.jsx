import { useEffect, useState } from 'react'

import ProductDetail from '../../components/Products/ProductDetail'
import { useParams } from 'react-router-dom'
import { getProductDetail } from '../../services/productService'

function TourDetail() {
  const { slug } = useParams()
  console.log(slug)
  const [tourDetail, setTourDetail] = useState(null)

  useEffect(() => {
    const fetchApi = async () => {
      const result = await getProductDetail(slug)
      setTourDetail(result)
    }

    fetchApi()
  }, [slug])

  console.log(tourDetail)
  return (
    <>
      {tourDetail ? (
        <ProductDetail tourDetail={tourDetail} />
      ) : (
        <div>Đang tải dữ liệu tour...</div>
      )}
    </>
  )
}

export default TourDetail
