import React from 'react';
import {FlatList, Platform, Button} from 'react-native';
import ProductItem from '../components/ProductItem';
import {useSelector, useDispatch} from 'react-redux';
import HeaderBTN from '../components/HeaderButton';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import Colors from '../constants/Colors';
import {deleteProduct} from '../store/actions/product';

const UserProductScreen = (props) =>{
    const userProducts = useSelector(state => state.products.userProducts);
    const dispatch = useDispatch();

    return <FlatList
            data={userProducts}
            keyExtractor={item => item.id}
            renderItem={itemData =>{
                <ProductItem 
                title={itemData.item.title}
                price={itemData.item.price}
                viewCart={() =>{}}
                image={itemData.item.imageUrl}
                >
                <Button color={Colors.primary} 
                title="Edit" onPress={() =>
                {
                    
                }} />
                <Button color={Colors.primary} 
                title="Delete" onPress={()=>
                    {dispatch(deleteProduct(itemData.item.id));
                }} /> 
                </ProductItem>
            }} />
};
UserProductScreen.navigationOptions=(data) =>{
    return {
    headerTitle: 'Users products',
    headerLeft:() =>{
        return <HeaderButtons HeaderButtonComponent={HeaderBTN}>
        <Item title="Menu" 
        iconName={Platform.OS === 'android' ? 'md-menu': 'ios-menu'}
        onPress={() =>{
            data.navigation.toggleDrawer();
        }} />
    </HeaderButtons>
    }}
};
export default UserProductScreen;