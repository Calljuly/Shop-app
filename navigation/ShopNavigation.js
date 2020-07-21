import {createAppContainer, createDrawerNavigator} from 'react-navigation';
import {createStackNavigator } from 'react-navigation-stack';
import ProductOverviewScreen from '../screens/ProductsOverviewScreen';
import ProductDetailsScreen from '../screens/ProductDetailsScreen';
import OrdersScreen from '../screens/OrdersScreen';
import CartScreen from '../screens/CartScreen';
import Colors from '../constants/Colors';
import {Platform} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import React from 'react';
import UserProductScreen from '../screens/UserProductScreen';

const defaultStyles = { 
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
};

const ProductsNavigation = createStackNavigator({
    ProductsOverview : ProductOverviewScreen,
    ProductDetails: ProductDetailsScreen,
    Cart : CartScreen
},{
    navigationOptions:{
        drawerIcon: drawerConfig => (
        <Ionicons
         name={Platform.OS ==='android' ? 'md-cart' : 'ios-cart'}
         color={drawerConfig.tintColor}
         size={23} />)
    },
    defaultNavigationOptions: defaultStyles
    
});
const OrdersNavigation = createStackNavigator({
    Orders : OrdersScreen
},{
    navigationOptions:{
        drawerIcon: drawerConfig => (
        <Ionicons
         name={Platform.OS ==='android' ? 'md-list' : 'ios-list'}
         color={drawerConfig.tintColor}
         size={23} />)
    },
    defaultNavigationOptions: defaultStyles
});
const AdminNavigation = createStackNavigator({
    UserProducts : UserProductScreen
},{
    navigationOptions:{
        drawerIcon: drawerConfig => (
        <Ionicons
         name={Platform.OS ==='android' ? 'md-create' : 'ios-create'}
         color={drawerConfig.tintColor}
         size={23} />)
    },
    defaultNavigationOptions: defaultStyles
});
const ShopNavigator = createDrawerNavigator({
    Products: ProductsNavigation,
    Orders: OrdersNavigation,
    Admin: AdminNavigation
},{
    contentOptions:{
        activeTintColor: Colors.primary
    }
});


export default createAppContainer(ShopNavigator);