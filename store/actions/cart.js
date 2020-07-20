export const ADD_TO_CART = 'ADD_TO_CART';
export const REVOME_FROM_CART = 'REMOVE_TO_CART';

export const addToCart = product =>{
    return {
        type: ADD_TO_CART,
        product: product
    }
};
export const removeFromCart = (productId) =>{
    return {
        type: REVOME_FROM_CART,
        pid: productId
    }
}