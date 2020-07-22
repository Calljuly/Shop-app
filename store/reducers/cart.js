import {ADD_TO_CART, REVOME_FROM_CART} from '../actions/cart';
import {ADD_ORDER} from '../actions/order';
import CartItem from '../../models/cart-item';
import { DELETE_PRODUCT } from '../actions/product';

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
            let updatedCartItem;
            if(state.items[addedProduct.id]){
                updatedCartItem = new CartItem(
                    state.items[addedProduct.id].quantity +1,
                    productPrice,
                    productTitle,
                    state.items[addedProduct.id].sum + productPrice 
                );
                
            }
            else{
                updatedCartItem = new CartItem(
                    1,productPrice, productTitle,productPrice );
            }
            return {
                ...state, items:{...state.items, [addedProduct.id] : updatedCartItem},
                totalAmount: state.totalAmount + productPrice
            };
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
            totalAmount: state.totalAmount - selectedItem.productPrice
        }
        case ADD_ORDER:
            return initialState;
        case DELETE_PRODUCT:

            if(!state.items[action.pid]){
                return state;
            }
            const updatedItems = {...state.items};
            const totalSum = state.items[action.pid].sum; 
            delete updatedItems[action.pid];
            return {
                ...state,
                items: updatedItem,
                totalAmount : state.totalAmount - totalSum
            }
    }
    return state;
};
