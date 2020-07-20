import React from 'react';
import {View, Text, StyleSheet, Image, Button, TouchableOpacity, TouchableNativeFeedback,Platform} from 'react-native';
import Colors from '../constants/Colors';

const ProductItem = (props) =>{
    let Touchable = TouchableOpacity;
    if(Platform.OS ==='android' && Platform.Version >= 21){
        Touchable = TouchableNativeFeedback;
    }
    return (
        <View style={styles.product}>
            <View style={styles.touchable}>
            <Touchable useForeground onPress={
            props.viewDetails
            }>
            <View>
            <Image style={styles.image} source={{uri: props.image}} />
            <Text style={styles.headerTitle}>{props.title}</Text>
            <Text style={styles.price}>{props.price.toFixed(2)}</Text>
            <View style={styles.buttonContainer}>
                <Button color={Colors.primary} title="View Details" onPress={props.viewDetails} />
                <Button color={Colors.primary} title="Add To Cart" onPress={props.viewCart} />
            </View>
            </View>
            </Touchable>
            </View>
        </View>
        

    );
};
const styles = StyleSheet.create({
    buttonContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '25%',
        paddingHorizontal: 20 
    },
    button:{

    },
    details:{
        alignItems: 'center',
        height: '15%',
        padding: 10
    },
    headerTitle:{
        fontFamily:'open-sans-bold' ,
        fontSize: 18,
        marginVertical: 2,
    },
    price:{
        fontFamily:'open-sans' ,
        fontSize: 14,
        color: '#888'
    },
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
        height: 300,
        margin: 20,
        overflow: 'hidden'
    },
    image:{
        width: '100%',
        height: '60%'
    },
    touchable:{
        overflow: 'hidden',
        borderRadius: 10
    }
});
export default ProductItem;