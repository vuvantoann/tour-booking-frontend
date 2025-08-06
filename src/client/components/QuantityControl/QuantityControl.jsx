import './QuantityControl.scss'
import { FiMinus, FiPlus } from 'react-icons/fi'
import { useDispatch } from 'react-redux'
import { updateQuantity } from '../../actions/cart'

function QuantityControl({ item }) {
  const dispatch = useDispatch()

  const handleDecrease = () => {
    if (item.quantity > 1) {
      dispatch(updateQuantity(item._id, -1))
    }
  }

  const handleIncrease = () => {
    if (item.quantity < item.stock) {
      dispatch(updateQuantity(item._id))
    }
  }

  const handleInputChange = (e) => {
    const value = parseInt(e.target.value, 10)
    if (!isNaN(value) && value >= 1 && value <= item.stock) {
      dispatch(updateQuantity(item.id, value))
    }
  }
  return (
    <div className="quantity-control">
      <button
        className="quantity-control__btn"
        onClick={handleDecrease}
        type="button"
      >
        <FiMinus />
      </button>
      <input
        className="quantity-control__display"
        type="number"
        name="quantity"
        value={item.quantity}
        min="1"
        max={item.stock}
        onChange={handleInputChange}
      />
      <button
        className="quantity-control__btn"
        onClick={handleIncrease}
        type="button"
      >
        <FiPlus />
      </button>
    </div>
  )
}

export default QuantityControl
