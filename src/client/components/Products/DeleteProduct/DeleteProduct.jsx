import Modal from 'react-modal'
Modal.setAppElement('#root')
import { TbAlertTriangle } from 'react-icons/tb'
import './DeleteProduct.scss'
import { useState } from 'react'
import { Notyf } from 'notyf'
import 'notyf/notyf.min.css' // for React, Vue and Svelte
import { deleteProduct } from '../../../services/productService'

function DeleteProduct(props) {
  const { item, onReload } = props
  const [modalIsOpen, setIsOpen] = useState(false)

  const openModal = () => setIsOpen(true)
  const closeModal = () => setIsOpen(false)

  const handleDelete = async () => {
    const result = await deleteProduct(item._id)
    console.log(result)
    if (result) {
      closeModal()
      onReload()
      if (result.code === 200) {
        const notyf = new Notyf({
          duration: 2000,
          position: { x: 'right', y: 'top' },
        })
        notyf.success(result.message)
      } else if (result.code === 400) {
        const notyf = new Notyf({
          duration: 3000,
          position: { x: 'right', y: 'top' },
        })
        notyf.error(result.message)
      }
    }
  }

  return (
    <>
      <div className="delete-tour-wrapper">
        <button className="open-modal-btn" onClick={openModal}>
          Xóa
        </button>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          className="modal-content"
          overlayClassName="modal-overlay"
          contentLabel="Delete Tour"
        >
          <div className="modal-header">
            <TbAlertTriangle className="modal-icon" />
            <h2 className="modal-title">Xác nhận xóa Tour?</h2>
            <p className="modal-desc">Bạn sẽ không thể hoàn tác sau khi xóa!</p>
          </div>

          <div className="modal-actions">
            <button className="btn cancel-btn" onClick={closeModal}>
              Hủy
            </button>
            <button className="btn confirm-btn" onClick={handleDelete}>
              Xác nhận
            </button>
          </div>
        </Modal>
      </div>
    </>
  )
}

export default DeleteProduct
