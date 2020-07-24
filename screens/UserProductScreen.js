import React from 'react';
import {FlatList, Platform, Button,Alert} from 'react-native';
import ProductItem from '../components/ProductItem';
import {useSelector, useDispatch} from 'react-redux';
import HeaderBTN from '../components/HeaderButton';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import Colors from '../constants/Colors';
import {deleteProduct} from '../store/actions/product';

const UserProductScreen = (props) =>{
    const userProducts = useSelector(state => state.products.userProducts);
    const dispatch = useDispatch();
    const editProductHandler = (id) =>{
        props.navigation.navigate('EditProducts',{productId: id});
    }
    const deleteHandler = (id) =>
    {
        //Alert doesn not work but without I can delete products
        Alert.alert('Du you really want to delete this item ?', [
            {text: 'No', style: 'default'}, 
            {text:'Yes', style: 'destructive', onPress: ()=>{
                dispatch(deleteProduct(id))}}]);
    }
    return (<FlatList
            data={userProducts}
            keyExtractor={item => item.id}
            renderItem={itemData =>(
                <ProductItem 
                title={itemData.item.title}
                price={itemData.item.price}
                viewCart={()=>editProductHandler(itemData.item.id)}
                image={itemData.item.imageUrl}
                >
                <Button color={Colors.primary} 
                title="Edit" onPress={()=>editProductHandler(itemData.item.id)} />
                <Button color={Colors.primary} 
                title="Delete" onPress={deleteHandler.bind(this, itemData.item.id)} /> 
                </ProductItem>
    )} />)
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
    },
    headerRight:
        ( <HeaderButtons HeaderButtonComponent={HeaderBTN}>
        <Item title="Add" 
        iconName={Platform.OS === 'android' ? 'md-create': 'ios-create'}
        onPress={() =>{
            data.navigation.navigate('EditProducts');
        }} />
    </HeaderButtons>)
    
}
};
export default UserProductScreen;