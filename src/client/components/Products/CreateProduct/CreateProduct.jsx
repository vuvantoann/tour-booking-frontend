import { useEffect, useState } from 'react'
import Modal from 'react-modal'
import './CreateProduct.scss'
import { Notyf } from 'notyf'
import 'notyf/notyf.min.css' // for React, Vue and Svelte

Modal.setAppElement('#root')

const initialFormData = {
  title: '',
  tour_category_id: '',
  code: '',
  images: [''],
  price: '',
  discount: '',
  information: '',
  schedule: '',
  timeStart: '',
  stock: '',
  position: '',
}

function CreateTour(props) {
  const { onReload } = props
  const [formData, setFormData] = useState(initialFormData)
  const [modalIsOpen, setIsOpen] = useState(false)

  const openModal = () => setIsOpen(true)
  const closeModal = () => setIsOpen(false)

  const [dataCategory, setDataCategory] = useState([])

  useEffect(() => {
    const fetchApi = async () => {
      fetch('http://localhost:3000/api/v1/categories')
        .then((res) => res.json())
        .then((data) => {
          setDataCategory(data)
        })
    }

    fetchApi()
  }, [])

  const handleChange = (e) => {
    const { name, value } = e.target
    if (name === 'images') {
      setFormData({
        ...formData,
        images: value.split(',').map((i) => i.trim()),
      })
    } else {
      setFormData({ ...formData, [name]: value })
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    fetch('http://localhost:3000/api/v1/tours/create', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        setFormData(initialFormData)
        closeModal()
        onReload()
        if (data.code === 200) {
          const notyf = new Notyf({
            duration: 2000,
            position: { x: 'right', y: 'top' },
          })
          notyf.success(data.message)
        } else if (data.code === 400) {
          const notyf = new Notyf({
            duration: 3000,
            position: { x: 'right', y: 'top' },
          })
          notyf.error(data.message)
        }
      })
  }

  return (
    <div className="create-tour-wrapper">
      <button className="open-modal-btn" onClick={openModal}>
        + Tạo Tour Mới
      </button>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="modal-content"
        overlayClassName="modal-overlay"
        contentLabel="Create Tour"
      >
        <h2 className="modal-title">Tạo Tour Mới</h2>

        <form className="tour-form" onSubmit={handleSubmit}>
          <div className="form-grid">
            <input
              name="title"
              placeholder="Tên Tour"
              required
              onChange={handleChange}
            />

            <select name="tour_category_id" id="" onChange={handleChange}>
              {dataCategory.map((item) => {
                return (
                  <option value={item._id} key={item._id}>
                    {item.title}
                  </option>
                )
              })}
            </select>

            <input
              name="code"
              placeholder="Mã Tour"
              required
              onChange={handleChange}
            />
            <input
              name="price"
              type="number"
              placeholder="Giá (VND)"
              required
              onChange={handleChange}
            />
            <input
              name="discount"
              type="number"
              placeholder="Giảm giá (%)"
              onChange={handleChange}
            />
            <input
              name="stock"
              type="number"
              placeholder="Số lượng"
              required
              onChange={handleChange}
            />
            <input
              name="position"
              type="number"
              placeholder="Vị trí hiển thị"
              onChange={handleChange}
            />
            <input
              name="timeStart"
              type="datetime-local"
              required
              onChange={handleChange}
            />
            <input
              name="images"
              placeholder="Image URLs (cách nhau bởi dấu phẩy)"
              required
              onChange={handleChange}
            />
          </div>

          <textarea
            name="information"
            placeholder="Thông tin tour"
            rows="3"
            onChange={handleChange}
          />
          <textarea
            name="schedule"
            placeholder="Lịch trình tour"
            rows="3"
            onChange={handleChange}
          />

          <div className="modal-actions">
            <button type="button" className="cancel-btn" onClick={closeModal}>
              Hủy
            </button>
            <button type="submit" className="submit-btn">
              Tạo Tour
            </button>
          </div>
        </form>
      </Modal>
    </div>
  )
}

export default CreateTour
