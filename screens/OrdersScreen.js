import React from 'react';
import {FlatList, Platform, Text, StyleSheet,View} from 'react-native';
import {useSelector} from 'react-redux';
import HeaderBTN from '../components/HeaderButton';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import OrderItem from '../components/OrderItem';

const OrdersScreen = (props) =>{
    const orders = useSelector(state => state.orders.orders);
    
    if(orders.length === 0){
        return (<View style={styles.product}>
            <Text style={styles.headerText}>No orders</Text>
            <Text style={styles.text}>Please start adding products to your cart and place a order!</Text>
            </View>);
    }
    return (
    <FlatList
        data={orders}
        keyExtractor={item => item.id}
        renderItem={(itemData)=>
             ( <OrderItem 
                amount={itemData.item.totalAmount}
                date={itemData.item.date} 
                items={itemData.item.items} />)} />
    );
};
const styles = StyleSheet.create({
    product:{
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset:{
            width:0, height: 2
        },
        shadowRadius: 8,
        elevation: 5,
        borderRadius: 10,
        backgroundColor: 'white',
        height: 100,
        margin: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    headerText:{
        fontSize: 16
    },
    text:{
        marginHorizontal: 20,
        marginTop: 10,
        textAlign: 'center'
    }
});
OrdersScreen.navigationOptions = (data) => {
    
    return {
        headerTitle: 'Your Orders',
        headerLeft:() =>{
            return <HeaderButtons HeaderButtonComponent={HeaderBTN}>
            <Item title="Menu" 
            iconName={Platform.OS === 'android' ? 'md-menu': 'ios-menu'}
            onPress={() =>{
                data.navigation.toggleDrawer();
            }} />
        </HeaderButtons>
        }
    }
}
export default OrdersScreen;