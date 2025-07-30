import { useEffect, useState } from 'react'
import './ProductList.scss'
import EditProduct from '../EditProduct/EditProduct'
import DeleteProduct from '../DeleteProduct/DeleteProduct'
function ProductList(props) {
  const { reload } = props
  const [dataTours, setDataTours] = useState([])

  const [editReload, setEditReload] = useState(false)

  const handleReload = () => {
    setEditReload(!editReload)
  }
  useEffect(() => {
    const fetchApi = async () => {
      fetch('http://localhost:3000/api/v1/tours')
        .then((res) => res.json())
        .then((data) => {
          setDataTours(data.reverse())
        })
    }

    fetchApi()
  }, [reload, editReload])

  return (
    <>
      <div className="product-list">
        {dataTours.map((tour) => (
          <div className="product-card" key={tour._id}>
            <div className="product-card__image">
              <img src={tour.images[0]} alt={tour.title} />
            </div>
            <div className="product-card__info">
              <h3 className="product-card__title">{tour.title}</h3>
              <p className="product-card__desc">{tour.information}</p>
              <div className="product-card__bottom">
                <span className="product-card__price">
                  ₹ {tour.price.toLocaleString()}
                </span>
                {tour.discount > 0 && (
                  <span className="product-card__discount">
                    -{tour.discount}%
                  </span>
                )}
              </div>
            </div>
            <EditProduct item={tour} onReload={handleReload} />
            <DeleteProduct item={tour} onReload={handleReload} />
          </div>
        ))}
      </div>
    </>
  )
}

export default ProductList
