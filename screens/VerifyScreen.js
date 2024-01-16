// import { StyleSheet, Text, View } from 'react-native'
// import React from 'react'

// const VerifyScreen = () => {
//   return (
//     <View>
//       <Text>VerifyScreen</Text>
//     </View>
//   )
// }

// export default VerifyScreen

// const styles = StyleSheet.create({})

import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react';
import { Text } from 'react-native';
import { View, TextInput, Button, StyleSheet, Alert } from 'react-native';
import NeftyHeader from '../components/NeftyHeader';




const VerifyScreen = () => {
    const navigation = useNavigation();
  const [email, setEmail] = useState('');

  const handleVerify = () => {
    // Basic email validation
    if (email.trim() === '') {
      Alert.alert('Error', 'Please enter a valid email.');
      return;
    }

    // Perform verification logic here (e.g., send verification email)
    console.log(`Verifying email: ${email}`);

    // Display success message or navigate to the next screen
    Alert.alert('Success', `Verification email sent to ${email}`);
  };


  const onIconTouch=()=>{
    navigation.goBack();


  }
  return (
    <View style={styles.container}>
     <NeftyHeader leftIcon='arrowleft' onIconPress={onIconTouch} />
      <Text style={styles.text1}> EMAIL</Text>
      <View style>
      <TextInput
        style={styles.input}
        placeholder="Enter your email"
        keyboardType="email-address"
        autoCapitalize="none"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <View style={styles.block}>
       
      </View>
      <View style={styles.text}>
        <Text> Since investro is used a transaction that is mandatory to verify details</Text>
      </View>
      
      <Button title="Verify Email" onPress={handleVerify} />
      </View>
      {/* Add more components or styles as needed */}
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        // alignItems: 'center', // Center items horizontally
        // padding: 16,
        backgroundColor:"white"
      },
      input: {
        width: '80%', // Use a percentage to make it responsive
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 16,
        paddingLeft: 8,
        borderRadius: 8, // Add some border radius
      },
      block: {
        height: 20, // Adjust height as needed for spacing
      },
      text: {
        marginBottom: "80%",
      },
      buttonContainer: {
        width: '80%',
        justifyContent: 'flex-end', // Align items at the bottom
      },
});

export default VerifyScreen;
