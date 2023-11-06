import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import NewHead from '../components/Head';
import { useNavigation } from '@react-navigation/native';
const PaymentSuccessScreen = () => {
  const navigation=useNavigation();
  const title="Booking Conformation"
  const trackingNumber = generateTrackingNumber();
  const onIconTouch=()=>{
    navigation.goBack();

  }

  return (
    <View style={styles.container1}>
    <NewHead title={title}  showImage={false} leftIcon="arrowleft" onLeftPress={onIconTouch}/>

      <View style={styles.container}>
        <Image
          source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ41WxJEQMhD5Hm50qt3wgJoID32sxB721PM_Qj4wtoWL57yGAmGQ_HVlYI1LOb-MePOGI&usqp=CAU" }}
          style={{ width: 100, height: 100 }}
        />

        <Text style={styles.heading}>Ticket Payment Successful</Text>
        <View style={styles.trackingNumber}>
          <Text style={styles.text}>Transaction Number:</Text>
          <Text style={styles.trackingNumberText}>{trackingNumber}</Text>
        </View>
        <Text style={styles.text}>Amount paid: $45.25</Text>
        <Text style={styles.text}>Paid by Paytm</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container1: {
    flex: 1,
  },
  header: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'blue',
    padding: 20,
  },
  title: {
    fontSize: 20,
    color: 'white',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  text: {
    fontSize: 16,
    marginBottom: 10,
  },
  
  trackingNumber: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1, 
    borderBottomColor: '#ccc',
  },
  trackingNumberText: {
    fontSize: 16,
    marginLeft: 5, 
  },
});

function generateTrackingNumber() {
  // Generate a random tracking number here
  return Math.random().toString(36).substring(7);
}

export default PaymentSuccessScreen;
