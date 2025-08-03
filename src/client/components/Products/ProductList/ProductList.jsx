import { Link } from 'react-router-dom'
import './ProductList.scss'

function ProductList(props) {
  const { tours } = props

  return (
    <>
      <div className="product-wrapper">
        <h4 className="product_title">Danh sách Tous</h4>
        <div className="product-list">
          {tours.map((tour) => (
            <div className="product-card" key={tour._id}>
              <Link to={`/tours/detail/${tour.slug}`}>
                <div className="product-card__image">
                  <img src={tour.images[0]} alt={tour.title} />
                </div>
                <div className="product-card__info">
                  <h3 className="product-card__title">{tour.title}</h3>
                  <p className="product-card__desc">{tour.information}</p>
                  <div className="product-card__bottom">
                    <div className="product-card__price">
                      <span className="product-card__price--current">
                        ₹{' '}
                        {(
                          (tour.price * (100 - tour.discount)) /
                          100
                        ).toLocaleString()}
                      </span>
                      <span className="product-card__price--old">
                        ₹ {tour.price.toLocaleString()}
                      </span>
                    </div>
                    {tour.discount > 0 && (
                      <span className="product-card__discount">
                        -{tour.discount}%
                      </span>
                    )}
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default ProductList
