import React , {useState} from 'react';
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import productReducers from './store/reducers/product';
import CartReducer from './store/reducers/cart';
import OrdersReducer from './store/reducers/order';
import ShopNavigation from './navigation/ShopNavigation';
import {AppLoading} from 'expo';

const rootReducers = combineReducers({
  products: productReducers,
  cart : CartReducer,
  orders : OrdersReducer 
});

const store = createStore(rootReducers);

export default function App() {

  const [fontLoaded, setLoaded] = useState(false);

  return (
    <Provider store={store}>
        <ShopNavigation />
    </Provider>
  );
}

