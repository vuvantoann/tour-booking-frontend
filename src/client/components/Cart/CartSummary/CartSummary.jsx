import { useSelector } from 'react-redux'

function CartSummary() {
  const cart = useSelector((state) => state.cartReducer)

  const total = cart.reduce((sum, item) => {
    return sum + ((item.price * (100 - item.discount)) / 100) * item.quantity
  }, 0)

  return (
    <div className="cart-summary">
      <h3>Summary</h3>

      <div className="cart-summary__total">
        <span>Tổng tiền:</span>
        <span className="cart-summary__amount">{total.toLocaleString()}₫</span>
      </div>
      <p className="cart-summary__note">
        Vui lòng để lại thông tin, nhân viên tư
        <br />
        vấn sẽ gọi lại cho bạn.
      </p>
      <button className="summary-checkout">ĐẶT TOUR NGAY</button>
    </div>
  )
}

export default CartSummary
