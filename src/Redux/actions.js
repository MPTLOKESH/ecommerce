//actions.jsx
export const addToCart = (item) => ({
  // THIS IS THE FUNCTION NAME TO EXPORT IN OUR COMPONENT addToCart OK VA ? kk next we will go to add to cart...

  //THIS IS ACTION addToCart.......this will go to reducer
  type: "ADD_TO_CART", //THIS IS ACTION.TYPE
  payload: item, // THIS IS ACTION.PAYLOAD
});

export const removeFromCart = (id) => ({
  type: "REMOVE_FROM_CART",
  payload: id,
});

export const increaseQuantity = (id) => ({
  type: "INCREASE",
  payload: id,
});

export const decreaseQuantity = (id) => ({
  type: "DECREASE",
  payload: id,
});

export const searchProduct = (query) => ({
  type: "SEARCH",
  payload: query,
});
