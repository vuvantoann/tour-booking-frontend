import { useState } from 'react'
import { FaCalendarAlt, FaUsers } from 'react-icons/fa'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import './ProductDetail.scss'
function ProductDetail({ tourDetail }) {
  const images =
    typeof tourDetail.images === 'string'
      ? JSON.parse(tourDetail.images)
      : tourDetail.images

  const [selectedImage, setSelectedImage] = useState(images[0])

  return (
    <div className="tour-detail">
      <div className="tour-detail__left">
        <div className="tour-detail__main-image">
          <img src={selectedImage} alt="Main tour" />
        </div>
        <div className="tour-detail__thumbnail-slider">
          <Swiper slidesPerView={4} spaceBetween={10}>
            {images.map((img, idx) => (
              <SwiperSlide key={idx}>
                <img
                  src={img}
                  alt={`Slide ${idx}`}
                  onClick={() => setSelectedImage(img)}
                  className={
                    img === selectedImage
                      ? 'tour-detail__thumbnail tour-detail__thumbnail--active'
                      : 'tour-detail__thumbnail'
                  }
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <div className="tour-detail__right">
        <h2 className="tour-detail__title">{tourDetail.title}</h2>
        <p className="tour-detail__code">Mã tour: {tourDetail.code}</p>
        <p className="tour-detail__date">
          <FaCalendarAlt /> Lịch khởi hành:{' '}
          {new Date(tourDetail.timeStart).toLocaleDateString('vi-VN')}
        </p>
        <p className="tour-detail__seats">
          <FaUsers /> Còn lại: {tourDetail.stock}
        </p>
        <div className="tour-detail__price">
          Giá chỉ còn:{' '}
          <span className="tour-detail__price--current">
            {(
              (tourDetail.price * (100 - tourDetail.discount)) /
              100
            ).toLocaleString()}
            đ
          </span>{' '}
          <span className="tour-detail__price--old">
            {tourDetail.price.toLocaleString()}đ
          </span>
        </div>

        <p className="tour-detail__discount">Giảm tới {tourDetail.discount}%</p>
        <div className="tour-detail__add-to-cart">
          <input type="number" min="1" defaultValue={1} />
          <button>Thêm vào giỏ hàng</button>
        </div>

        <div className="tour-detail__section">
          <h3 className="tour-detail__section-title">Thông tin tour</h3>
          <p className="tour-detail__section-content">
            {tourDetail.information}
          </p>
        </div>

        <div className="tour-detail__section">
          <h3 className="tour-detail__section-title">Lịch trình tour</h3>
          <p className="tour-detail__section-content">{tourDetail.schedule}</p>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail
