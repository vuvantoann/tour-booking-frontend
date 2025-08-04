export const addToCart = (item) => {
  return {
    type: 'ADD_TO_CART',
    payload: item,
  }
}

export const updateQuantity = (_id, quantity = 1) => {
  return {
    type: 'UPDATE_QUANTITY',
    payload: { _id, quantity },
  }
}
