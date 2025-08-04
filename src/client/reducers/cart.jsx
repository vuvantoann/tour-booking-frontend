function cartReducer(state = [], action) {
  switch (action.type) {
    case 'ADD_TO_CART':
      return [
        ...state,
        {
          ...action.payload,
          quantity: 1,
        },
      ]

    case 'UPDATE_QUANTITY':
      return state.map((item) =>
        item._id === action.payload._id
          ? { ...item, quantity: item.quantity + action.payload.quantity }
          : item
      )

    default:
      return state
  }
}

export default cartReducer
