import React from 'react';
import {FlatList, Platform} from 'react-native';
import {useSelector, useDispatch}  from 'react-redux';
import ProductItem from '../components/ProductItem';
import * as allAction from '../store/actions/cart';
import HeaderBTN from '../components/HeaderButton';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';

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
ProductOverviewScreen.navigationOptions= data =>{
   return { 
       headerTitle: 'Products Overview',
        headerRight: () =>{
        return <HeaderButtons HeaderButtonComponent={HeaderBTN}>
            <Item title="Cart" 
            iconName={Platform.OS === 'android' ? 'md-cart': 'ios-cart'}
            onPress={() =>{
                data.navigation.navigate('Cart');
            }} />
        </HeaderButtons>
    }}
} ;

export default ProductOverviewScreen;