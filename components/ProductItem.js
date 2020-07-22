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
            <Touchable onPress={props.viewDetails} useForeground>
            <View>
            <Image style={styles.image} source={{uri: props.image}} />
            <Text style={styles.headerTitle}>{props.title}</Text>
            <Text style={styles.price}>{props.price}</Text>
            <View style={styles.buttonContainer}>
               {props.children}
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
        height: '23%',
        paddingHorizontal: 20 
    },
    button:{

    },
    details:{
        alignItems: 'center',
        height: '17%',
        padding: 10
    },
    headerTitle:{
        fontSize: 18,
        marginVertical: 2,
        textAlign: 'center'
    },
    price:{
        fontSize: 14,
        color: '#888',
        textAlign: 'center'
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