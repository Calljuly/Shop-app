import React, {useState, useEffect, useCallback} from 'react';
import {View, Text, StyleSheet, ScrollView, TextInput, Platform, Alert} from 'react-native';
import { FadeOutToBottomAndroidSpec } from 'react-navigation-stack/lib/typescript/src/vendor/TransitionConfigs/TransitionSpecs';
import {useSelector, useDispatch} from 'react-redux';
import HeaderBTN from '../components/HeaderButton';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import * as prodAction from '../store/actions';

const EditScreen = (props) => {
    const prodId = props.navigation.getParam('productId');
    const editedProduct = useSelector(state => 
        state.products.userProducts.find(prod => prod.id === prodId));


    const [title, setTitle] = useState(editedProduct ? editedProduct.title:'');
    const [image, setImage] = useState(editedProduct ? editedProduct.imageUrl:'');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState(editedProduct ? editedProduct.description:'');
    const dispatch = useDispatch();

    const submitHandler = useCallback(() =>{
        if(editedProduct){
            dispatch(prodAction.updateProduct(prodId, title,description, image));
        }else{
            dispatch(prodAction.createProduct( title,description, image, +price));
        }
        props.navigation.goBack();
    },[dispatch, prodId, title, image, description, price]);
    
    useEffect(() =>{
        props.navigation.setParams({
            submit : submitHandler
        });
    }, [submitHandler]);

    return(
        <ScrollView>
            <View style={styles.form}>
            <View style={styles.formControll}>
                <Text style={styles.label}>Title</Text>
                <TextInput 
                style={styles.input} 
                value={title} 
                onTextChange={text => setTitle(text)} />
            </View>
            <View style={styles.formControll}>
                <Text style={styles.label}>Image Url</Text>
                <TextInput style={styles.input}
                value={image}
                onTextChange={text => setImage(text)} />
            </View>
            {editedProduct ? null : (<View style={styles.formControll}>
                <Text style={styles.label}>Price</Text>
                <TextInput style={styles.input}
                value={price}
                onTextChange={text => setPrice(text)} />
            </View>)}
            <View style={styles.formControll}>
                <Text style={styles.label}>Description</Text>
                <TextInput style={styles.input}
                value={description}
                onTextChange={text => setDescription(TextDecoderStream)} />
            </View>
            </View>
        </ScrollView>
    );
};

EditScreen.navigationOptions =(data) =>{
    const submithandler = data.navigation.getParam('submit');

    return {
        headerTitle: FadeOutToBottomAndroidSpec.navigation.getParam('productIt')?
        'Edit Product' : 'Add Product',
        headerRight:() =>{
            return <HeaderButtons HeaderButtonComponent={HeaderBTN}>
            <Item title="Save" 
            iconName={Platform.OS === 'android' ? 'md-checkmark': 'ios-checkmark'}
            onPress={submithandler} />
        </HeaderButtons>
    }
}}
const styles = StyleSheet.create({
    form:{
        margin: 20
    },
    formControll:{
        width:'100%'
    },
    label:{
        fontFamily: 'open-sans-bold',
        marginVertical: 8
    },
    input:{
        paddingHorizontal: 2,
        paddingVertical: 5,
        borderBottomColor: '#ccc',
        borderBottomWidth: 1
    }
});

export default EditScreen;