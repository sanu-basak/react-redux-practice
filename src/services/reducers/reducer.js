import { ADD_TO_CART,REMOVE_TO_CART } from "../constants";
const initialState = {
  cartData: [],
};
export const cartItems = (state=[], action) => {
  switch (action.type) {
    case ADD_TO_CART:
        // console.log('reducer',action);
      return [
        ...state,
        {cartData: action.data}
      ];
      break;
      case REMOVE_TO_CART:
        // console.log('reducer',action);
        state.pop();
      return [
        ...state,
      ];
      break;
    default:
      return state;
  }
};
