import React from 'react';
import {FlatList, View, Text, StyleSheet} from 'react-native';
import {useSelector, useDispatch}  from 'react-redux';
import ProductItem from '../components/ProductItem';
import * as allAction from '../store/actions/cart';

const ProductOverviewScreen = (props) =>{
    const products = useSelector(state => state.products.availableProducts);
    const dispatch = useDispatch();
    return (
        <FlatList
        data={products}
        keyExtractor={item=> item.id}
        renderItem={itemData=>{
        return <ProductItem 
        image={itemData.item.imageUrl} 
        title={itemData.item.title}
        viewDetails={() => {
            props.navigation.navigate('ProductsDetails',{
                productId: itemData.item.id,
                productTitle: itemData.item.title
            });
        }}
        viewCart={() => {
            dispatch(allAction.addToCart(itemData.item));
        }} />
        }} />
    );
}
ProductOverviewScreen.navigationOptions={
    headerTitle: 'Products Overview'
} ;

export default ProductOverviewScreen;