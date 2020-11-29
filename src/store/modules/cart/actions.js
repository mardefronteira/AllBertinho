export function addToCartRequest(products) {
  return {
      type: 'ADD_PRODUCTS_TO_CART_REQUEST',
      products,
  };
}

export function addToCartSuccess(products) {
  return {
      type: 'ADD_PRODUCTS_TO_CART_SUCCESS',
      products,
  };
}

export function removeToCart(products) {
  return {
      type: 'REMOVE_PRODUCTS_TO_CART',
      id: products.id,
  };
}