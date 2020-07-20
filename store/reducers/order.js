import Orders from '../../models/orders';
import {ADD_ORDER} from '../actions/order';
import Order from '../../models/orders';

const initialState ={
    orders:[]
}

export default (state = initialState, action) =>{
    switch(action.type){
        case ADD_ORDER:
            const newOrder = new Order(
                new Date().toDateString(),
                action.orderData.item,
                action.orderData.totalSum,
                 new Date().toString()
            );
            return {
                ...state,
                orders: state.orders.concat(newOrder)
            }
    }
}