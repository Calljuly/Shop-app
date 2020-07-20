import React , {useState} from 'react';
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import productReducers from './store/reducers/product';
import CartReducer from './store/reducers/cart';
import ShopNavigation from './navigation/ShopNavigation';
import {AppLoading} from 'expo';
import * as Font from './assets/fonts';

const fetchFonts = () =>
{
  return Font.loadAsync({
    'open-sans' : require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold' : require('./assets/fonts/OpenSans-Bold.ttf')
  });
}
const rootReducers = combineReducers({
  products: productReducers,
  cart : CartReducer
});

const store = createStore(rootReducers);

export default function App() {

  const [fontLoaded, setLoaded] = useState(false);

  if(fontLoaded){
    return <AppLoading startAsync={fetchFonts} onFinish={() =>{setLoaded(true)}} />
  }

  return (
    <Provider store={store}>
        <ShopNavigation />
    </Provider>
  );
}

