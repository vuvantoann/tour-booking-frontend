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

export const deleteItem = (_id) => {
  return {
    type: 'DELETE__ITEM',
    id: _id,
  }
}
