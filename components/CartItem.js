import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Platform} from 'react-native';
import {Ionicons} from '@expo/vector-icons';


const CartItem = (props) =>{
    return (
        <View style={styles.card}>
            <View style={styles.itemData}>
                <Text style={styles.quantity}>{props.quantity} </Text>
                <Text style={styles.mainText}>{props.title}</Text>
            </View>
            <View style={styles.itemData}>
                <Text style={styles.mainText}>{props.amount.toFixed(2)}</Text>
               {props.deletable && 
               ( <TouchableOpacity onPress={props.onRemove} style={styles.deleteBTN}>
                    <Ionicons name={Platform.OS === 'android' ? 'md-trash': 'ios-trash'}
                    size={23}
                    color="red" />
                </TouchableOpacity>)}
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    card:{
        padding: 10,
        backgroundColor: 'white',
        justifyContent: 'space-between',
        flexDirection:'row',
        marginHorizontal: 20
    },
    itemData: {
        flexDirection: 'row',
        alignItems: 'center',

    },
    quantity:{
        color: '#888',
        fontSize: 16
    },
    mainText:{
        fontSize: 16
    },
    deleteBTN:{
        marginLeft: 20
    }
});
export default CartItem;