import PRODUCTS from '../../data/dummy-data';
import { ActionSheetIOS } from 'react-native';
import { DELETE_PRODUCT } from '../actions/product';

const initalState = {
    availableProducts : PRODUCTS,
    userProducts: PRODUCTS.filter(item => item.ownerId === 'u1')
};

export default (state = initalState, action) =>{
    switch(action.type){
        case DELETE_PRODUCT:
            return {
                ...state,
                userProducts: state.userProducts.filter(
                    product => product.id !== action.pid),
                availableProducts: state.availableProducts.filter(
                    product=> product.id !== action.pid)
            };

    }


    return state;
};