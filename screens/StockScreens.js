import React ,{useState}from 'react';
import {View, StyleSheet, Text} from 'react-native';
import NeftyHeader from '../components/NeftyHeader';
import StockScreen from '../components/Stocks';
import { useNavigation } from '@react-navigation/native';


const NewStockScreen = () => {
  const navigation = useNavigation();

const onIconTouch=()=>{
  navigation.goBack();
    }
    return (
        <View style={{flex:1}}>
        <NeftyHeader leftIcon='arrowleft' onIconPress={onIconTouch} />
        <StockScreen /> 
        </View>
    );
}

const styles = StyleSheet.create({})

export default NewStockScreen;
