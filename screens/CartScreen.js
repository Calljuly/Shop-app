import React from 'react';
import {View , Text, StyleSheet, FlatList, Button} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import Colors from '../constants/Colors';
import CartItem from '../components/CartItem';
import * as cartAction from '../store/actions/cart';
import * as orderAction from '../store/actions/order';

const CartScreen = (props) =>{
    const cartTotalAmount = useSelector(state => state.cart.totalAmount);
    const dispatch = useDispatch();

    const cartItem = useSelector(state =>
        {
            const transformedItems =[];
            for(const key in state.cart.items){
                transformedItems.push({
                    productId : key,
                    productTitle: state.cart.items[key].productTitle,
                    productPrice: state.cart.items[key].productPrice,
                    quantity : state.cart.items[key].quantity,
                    sum : state.cart.items[key].sum
                });
            }
            
            return transformedItems.sort((a,b) => a.productId > b.productId ? 1 : -1);
        });
    return (
        <View style={styles.screen}>
            <View style={styles.summary}>
                <Text style={styles.summaryText}>
                    Total : 
                    <Text style={styles.amount}>
                        ${Math.round(cartTotalAmount.toFixed(2) * 100) / 100}</Text> 
                </Text>
                <Button 
                title="Order Now" 
                disabled={cartItem.length === 0}
                onPress={() =>{
                    dispatch(orderAction.addOrder(cartItem, cartTotalAmount));
                }} />

            </View>
            <View>
                <FlatList
                data={cartItem} 
                keyExtractor={item => item.productId} 
                renderItem={itemData =>{
                    return (
                    <CartItem
                    quantity={itemData.item.quantity}
                    title={itemData.item.title}
                    amount={itemData.item.sum}
                    deletable
                    onRemove={() =>{
                        dispatch(cartAction.removeFromCart(itemData.item.productId));
                    }} />
                    );
                }
                } />
            </View>
        </View>
    );
};

CartScreen.navigationOptions = (data) => {
    return {
        headerTitle: 'Your Cart '
    }
}

const styles = StyleSheet.create({
    screen: {
        flex:1,
        margin: 20
    },
    summary:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
        padding: 10,
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset:{
            width:0, height: 2
        },
        shadowRadius: 8,
        elevation: 5,
        borderRadius: 10,
        backgroundColor: 'white'
    },
    summaryText:{
        fontSize: 18
    },
    amount:{
        color: Colors.primary
    }
});
export default CartScreen;
