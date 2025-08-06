import { FaTimes } from 'react-icons/fa'
import QuantityControl from '../../QuantityControl/QuantityControl'
import { deleteItem } from '../../../actions/cart'
import { useDispatch } from 'react-redux'

function CartItem({ item }) {
  const dispatch = useDispatch()
  const handleDelete = () => {
    dispatch(deleteItem(item._id))
    console.log(item._id)
  }
  return (
    <div className="cart-item">
      <img src={item.images[0]} alt={item.title} className="cart-item__image" />
      <div className="cart-item__details">
        <div className="cart-item__name">{item.title}</div>
        <div className="cart-item__information">
          information: {item.information}
        </div>
      </div>
      <QuantityControl item={item} />
      <div className="cart-item__price">
        {(
          ((item.price * (100 - item.discount)) / 100) *
          item.quantity
        ).toLocaleString()}
        ₫
      </div>
      <FaTimes className="cart-item__remove" onClick={handleDelete} />
    </div>
  )
}

export default CartItem
