import { Link } from 'react-router-dom'
import CartItem from '../CartItem/CartItem'
import CartSummary from '../CartSummary/CartSummary'
import './CartList.scss'
import { useSelector } from 'react-redux'

function CartList() {
  const cart = useSelector((state) => state.cartReducer)

  return (
    <div className="cart">
      <div className="cart__grid">
        <div className="cart__content">
          <div className="cart__items">
            {cart.map((item) => (
              <CartItem key={item._id} item={item} />
            ))}
            <Link to="/tours" className="cart__continue">
              ← Continue Shopping
            </Link>
          </div>
        </div>
        <CartSummary />
      </div>
    </div>
  )
}

export default CartList
