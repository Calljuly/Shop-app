import PRODUCTS from '../../data/dummy-data';

const initalState = {
    availableProducts : PRODUCTS,
    userProducts: PRODUCTS.filter(item => item.ownerId === 'u1')
};

export default (state = initalState) =>{
    return state;
};