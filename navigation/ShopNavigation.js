import {createAppContainer} from 'react-navigation';
import {createStackNavigator } from 'react-navigation-stack';
import ProductOverviewScreen from '../screens/ProductsOverviewScreen';
import ProductDetailsScreen from '../screens/ProductDetailsScreen';
import CartScreen from '../screens/CartScreen';
import Colors from '../constants/Colors';
import {Platform} from 'react-native';

const ProductsNavigation = createStackNavigator({
    ProductsOverview : ProductOverviewScreen,
    ProductDetails: ProductDetailsScreen,
    Cart : CartScreen
},{
    defaultNavigationOptions:{
        headerStyle:{
            backgroundColor: Platform.OS === 'android' ? Colors.primary : ''
        },
        headerTitleStyle:{
            fontFamily:'open-sans-bold'
        },
        headerBackTitle:{
            fontFamily:'open-sans'
        },
        headerTintColor: Platform.OS ==='android' ?  'white' : Colors.primary
    }
});

export default createAppContainer(ProductsNavigation);