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

    case 'DELETE__ITEM':
      return state.filter((item) => item._id !== action.id)

    default:
      return state
  }
}

export default cartReducer
