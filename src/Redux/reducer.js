//reducer.jsx
import List from "../components/data/List";

const initialState = {
  cart: [],
  totalCost: 0,
  cartLength: 0,
  initialProducts: List,
  filteredProducts: List,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART": //THIS IS ACTION.TYPE
      const addedProduct = action.payload; //THIS IS FUNCTION
      const updatedCart = state.cart.find(
        (product) => product.id === addedProduct.id
      )
        ? state.cart.map((product) =>
            product.id === addedProduct.id
              ? { ...product, quantity: product.quantity + 1 }
              : product
          )
        : [...state.cart, { ...addedProduct, quantity: 1 }];

      return {
        ...state,
        cart: updatedCart,
        totalCost: state.totalCost + addedProduct.price,
        cartLength: state.cartLength + 1,
      };

    case "REMOVE_FROM_CART":
      const removedProduct = state.cart.find((p) => p.id === action.payload);
      const updatedCartAfterRemove = state.cart.filter(
        (p) => p.id !== action.payload
      );
      return {
        ...state,
        cart: updatedCartAfterRemove,
        totalCost:
          state.totalCost - removedProduct.price * removedProduct.quantity,
        cartLength: state.cartLength - 1,
      };

    case "INCREASE":
      const increasedProduct = state.cart.find((p) => p.id === action.payload);
      return {
        ...state,
        totalCost: state.totalCost + increasedProduct.price,
        cart: state.cart.map((product) =>
          product.id === action.payload
            ? { ...product, quantity: product.quantity + 1 }
            : product
        ),
      };

    case "DECREASE":
      const decreasedProduct = state.cart.find((p) => p.id === action.payload);
      return {
        ...state,
        totalCost: state.totalCost - decreasedProduct.price,
        cart: state.cart.map((product) =>
          product.id === action.payload
            ? {
                ...product,
                quantity: product.quantity > 1 ? product.quantity - 1 : 1,
              }
            : product
        ),
      };

    case "SEARCH":
      const searchQuery = action.payload.toLowerCase();
      const filtered =
        searchQuery === ""
          ? state.initialProducts
          : state.filteredProducts.filter(
              (product) =>
                product.title.toLowerCase().includes(searchQuery) ||
                product.description.toLowerCase().includes(searchQuery)
            );

      return {
        ...state,
        filteredProducts: filtered,
      };

    default:
      return state;
  }
};

export default cartReducer;
