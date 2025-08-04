import { IoBagOutline } from 'react-icons/io5'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

function CartIcon() {
  const cart = useSelector((state) => state.cartReducer)

  const total = cart.reduce((sum, item) => {
    return sum + item.quantity
  }, 0)

  return (
    <>
      <Link to="/cart" className=" header__icon--cart">
        <IoBagOutline />
        <span className="header__cart-count">{total}</span>
      </Link>
    </>
  )
}

export default CartIcon
