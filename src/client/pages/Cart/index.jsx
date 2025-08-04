import { useSelector } from 'react-redux'
function Cart() {
  const cart = useSelector((state) => state.cartReducer)

  return <> Page Cart</>
}

export default Cart
