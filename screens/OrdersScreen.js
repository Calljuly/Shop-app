import Recat from 'react';
import {FlatList, Platform} from 'react-native';
import {useSelector} from 'react-redux';
import HeaderBTN from '../components/HeaderButton';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import OrderItem from '../components/OrderItem';

const OrdersScreen = () =>{
    const orders = useSelector(state => state.orders.orders);

    return (
    <FlatList
        data={orders}
        keyExtractor={item => item.id}
        renderItem={(itemData)=>{
            return (
                <OrderItem 
                amount={itemDate.item.totalAmount}
                date={itemDate.item.readableDate} 
                items={itemDate.item.items} />
            );
        }} />
    );
};
OrdersScreen.navigationOptions = (data) => {
    
    return {
        headerTitle: 'Your Orders',
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
}
export default OrdersScreen;