import React, {useEffect} from 'react';
import {View, Text, Image, StyleSheet, ScrollView, Button} from 'react-native'; 
import {useSelector, useDispatch} from 'react-redux';
import Colors from '../constants/Colors';
import * as allAction from '../store/actions/cart';

const ProductDetailsScreen = (props) =>{
    const productIt = props.navigation.getParam('productId');
    const SelectedProduct = useSelector(state => 
        state.products.availableProducts.find(item =>
        item.id === productId));
    const dispatch = useDispatch();
    
    return 
        (
        <ScrollView  >
           <Image style={styles.image} source={{uri: SelectedProduct.imageUrl}} />
           <View style={styles.content}>
                <Button color={Colors.primary} title='Add to cart' onPress={() =>{
                    dispatch(allAction.addToCart(SelectedProduct));
                }} />
            </View>
            <Text style={styles.price}>${SelectedProduct.price.toFixed(2)}</Text>
            <Text style={styles.description}>{SelectedProduct.description}</Text>
        </ScrollView>

        );
};

const styles = StyleSheet.create({
    content:{
        marginVertical: 10,
        alignItems: 'center'
    },
    image: {
        width: '100%',
        height: 300
    },
    price:{
        fontFamily:'open-sans-bold' ,
        fontSize: 20,
        color: '#888',
        textAlign: 'center',
        marginVertical: 20
    },
    description:{
        fontFamily:'open-sans' ,
        fontSize: 14,
        textAlign: 'center',
        marginHorizontal: 20
    }

});

ProductDetails.navigationOptions = (data) =>{
    
    return {
        headerTitle: data.navigation.getParam('productTitle')
    };
};

export default ProductDetailsScreen;