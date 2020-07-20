import {ADD_TO_CART, REVOME_FROM_CART} from '../actions/cart';
import CartItem from '../../models/cart-item';

const initialState ={
    items: {},
    totalAmount: 0
};
export default (state = initialState, action) =>{
    switch(action.type){
        case ADD_TO_CART:
            const addedProduct = action.product;
            const productPrice= addedProduct.price;
            const productTitle = addedProduct.title;
            
            if(state.items[addedProduct.id]){
                const updatedCartItem = new CartItem(
                    state.items[addedProduct.id].quantity +1,
                    productPrice,
                    productTitle,
                    state.items[addedProduct.id].sum + productPrice 
                );
                return {
                    ...state, items:{...state.items, [addedProduct.id] : updatedCartItem},
                    totalAmount: state.totalAmount + productPrice
                };
            }
            else{
                const newCartItem = new CartItem(1,productPrice, productTitle,productPrice );
                return {
                    ...state , 
                    items: {...state.items, [addedProduct.id] : newCartItem }
                }
            }
        case REVOME_FROM_CART:
            const currentQuantity = state.items[action.pid].quantity;
            const selectedItem = state.items[action.pid];
            let updatedItem;

            if(currentQuantity >= 1){
                updatedItem = new CartItem(
                    selectedItem.quantity-1,
                    selectedItem.productPrice,
                    selectedItem.productPrice,
                    selectedItem.sum- selectedItem.productPrice
                );
                updatedItem = {...state.items, [action.pid]: updatedItem};
            }
            else{
                updatedItem = {...state.items};
                delete updatedItem[action.pid];
            }
        return {
            ...state,
            items: updatedItem,
            totalAmount: state.totalAmount - selectedItem.productPrice;
        }
    }
    return state;
};
