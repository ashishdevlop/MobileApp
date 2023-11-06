import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import NewHeader from '../components/NewHeader';
import NewHead from '../components/Head';
const PaymentOptionsScreen = () => {
  const navigation = useNavigation();
  const title="Payment Options";

  const handleItemPress = () => {
    navigation.navigate('PaymentSuccessScreen');
  };
  const onIconTouch=()=>{
    navigation.goBack();

  }
  

  return (
    <View style={styles.container}>
    <NewHead title={title}  showImage={false} leftIcon="arrowleft" onLeftPress={onIconTouch}/>
      <View style={styles.row1}>
        <Text style={styles.amountLabel}>Amount to be added</Text>
        <Text style={styles.amount}>$39</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.optionText}>UPI</Text>
      </View>
      <TouchableOpacity style={styles.optionButton} onPress={handleItemPress}>
        <View style={styles.optionContent}>
          <Image
            source={{ uri: "https://cdn.uxhack.co/product_logos/bhim_logo_2.png" }}
            style={styles.optionIcon}/>
        
          <Text style={styles.optionLabel}>UPI</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.row}>
        <Text style={styles.optionText}>Debit/Credit Cards</Text>
      </View>
      <TouchableOpacity style={styles.optionButton} onPress={handleItemPress}>
        <View style={styles.optionContent}>
          <Ionicons name="wallet-outline" size={30} color="black" />
          <Text style={styles.optionLabel}>Add New Card</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  header: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: 'blue',
  },
  title: {
    fontSize: 20,
    color: 'white',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderBottomWidth: 0.5,
    borderBottomColor: '#ccc',
    backgroundColor: '#d3d3d3',
  },
  row1: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderBottomWidth: 0.5,
    borderBottomColor: '#ccc',
  },
  amountLabel: {
    fontWeight: 'bold',
  },
  amount: {
    fontSize: 18,
  },
  optionText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  optionButton: {
    padding: 16,
    borderRadius: 1,
    borderWidth: 0.1,
  },
  optionContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  optionIcon: {
    width: 30,
    height: 30,
  },
  optionLabel: {
    fontSize: 18,
  },
});

export default PaymentOptionsScreen;
