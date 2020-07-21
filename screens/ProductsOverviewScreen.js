import React from 'react';
import {Button,FlatList, Platform} from 'react-native';
import {useSelector, useDispatch}  from 'react-redux';
import ProductItem from '../components/ProductItem';
import * as allAction from '../store/actions/cart';
import HeaderBTN from '../components/HeaderButton';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import Colors from '../constants/Colors';

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
        >
            <Button color={Colors.primary} title="View Details" onPress={() =>{props.navigation.navigate('ProductsDetails',{
                productId: itemData.item.id,
                productTitle: itemData.item.title
            });}} />
            <Button color={Colors.primary} title="Add To Cart" onPress={()=>{dispatch(allAction.addToCart(itemData.item));
                }} /> 
                
        </ProductItem>
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
    },
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
} ;

export default ProductOverviewScreen;