import PRODUCTS from '../../data/dummy-data';
import { DELETE_PRODUCT, CREATE_PRODUCT, UPDATE_PRODUCT } from '../actions/product';
import Product from '../../models/products';

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
        case CREATE_PRODUCT:
            const newProduct = new Product(
                new Date().toString(),
                'u1',
                action.productData.title, 
                action.productData.image, 
                action.productData.description, 
                action.productData.price);
            return {
                ...state,
                availableProducts: state.availableProducts.concat(newProduct),
                userProducts : state.userProducts.concat(newProduct)
            }

        case UPDATE_PRODUCT:
            const productIndex = state.userProducts.findIndex(
                prod => prod.id === action.pid);
            const updatedProduct = new Product(
                action.pid,
                state.userProducts[productIndex].ownerId,
                action.productData.title, 
                action.productData.image, 
                action.productData.description, 
                state.userProducts[productIndex.price]);

             const updatedUserProd = {...state.userProducts};
            updatedUserProd[productIndex] = updatedProduct;
            const availableProductsIndex = state.availableProducts.findIndex(
                prod => prod.id === action.pid);
            const updatadeAvailable = {...state.availableProducts};
            updatadeAvailable[availableProductsIndex] = updatedProduct;

            return {
                ...state,
                availableProducts: updatedUserProd ,
                userProducts : updatadeAvailable
            }
    }


    return state;
};