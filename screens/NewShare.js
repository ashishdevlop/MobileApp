// import { StyleSheet, Text, View } from 'react-native'

// import React from 'react'

// const NewShare = () => {
//   
//   return (
//     <View>
//       <Text>NewShare</Text>
//     </View>
//   )
// }

// export default NewShare

// const styles = StyleSheet.create({})



import { useNavigation } from '@react-navigation/native';

import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet,Image,Dimensions, Button,Share } from 'react-native';
import NeftyHeader from '../components/NeftyHeader';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

const NewShare = () => {
    const navigation=useNavigation();
  const [inviteCode, setInviteCode] = useState('');

  // const handleShare = () => {
  //   // Handle share logic here
  //   console.log('Sharing invite code:', inviteCode);
  // };

  
  const onIconTouch=()=>{
    navigation.goBack();


  }

  const handleTextSelectionChange = (event) => {
    const { selection } = event.nativeEvent;

    // Check if text is selected (selection type is 'Range')
    if (selection.start !== selection.end) {
      // Do something when text is selected (e.g., copy text)
      const selectedText = inviteCode.substring(selection.start, selection.end);
      console.log('Selected text:', selectedText);
    }
  };


  const handleShare = async () => {
    try {
      // Share invite code
      await Share.share({
        message: inviteCode,
        title: 'Invite Code',
      });

      console.log('Shared successfully');
    } catch (error) {
      console.log('Sharing failed:', error.message);
    }
  };

  return (
    <View style={styles.container}>
     <NeftyHeader leftIcon='arrowleft' onIconPress={onIconTouch} />

     <View style={styles.userImageContainer}>
        {/* User Image */}
        <Image
          source={require('../assets/imgs/invite.png')} // Replace with your actual image source
          style={styles.userImage}
        />
         </View>
      <Text style={styles.heading}>   <MaterialCommunityIcons name="cash-100" size={24} color="green" />   Invite & Earn Unlimited</Text>
      <Text style={styles.description}>Get Them Successfully Registered & Both of you get Reward to Shair the invite Code </Text>

      <Text style={styles.content}>₹250 Discount  Bonus .It's that easy!</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter code..."
        value={inviteCode}
        onChangeText={(text) => setInviteCode(text)}
        onSelectionChange={handleTextSelectionChange}
      />
      <Text style={styles.text}> ------------------or share ---------------</Text>
           {/* <Button  style={styles.shareButton}  title="More Option"  onPress={handleShare}   />  */}
           <TouchableOpacity onPress={handleShare} style={styles.shareButton}>
                     <Entypo   name="share" size={35} color="blue" />
      </TouchableOpacity>
  
    
    </View>
  );
};

const { width, height } = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
   backgroundColor:"white",
    
  },
  userImageContainer: {
 
    
},
userImage: {
    width: 420,
    height: 160,
    marginBottom:10,
   
},
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft:50,
    marginRight:25,
    marginBottom:15,
  
  },
  input: {
    fontSize: 18,
    fontWeight: "bold",
    borderWidth: 1,
    borderColor: "blue", // Change border color as needed
    borderRadius: 8,
    padding:18,
    marginLeft:25,
    marginRight:10,
    marginBottom:25,
  
  },
  shareButton: {
    fontSize: 18,
    fontWeight: "bold",
    borderWidth: 1,
    borderColor: "blue", // Change border color as needed
    borderRadius: 8,
    padding: 18,
    marginLeft:25,
    marginRight:10,
    marginBottom:25,

  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
  },
  description:{
    marginLeft:25,
    marginRight:10,
    fontSize:17,
    marginBottom:5,
    // fontWeight:"bold"
  },
  content:{
  marginLeft:75,
  marginRight:10,
  fontSize:15,
  marginBottom:25,
  fontWeight:"bold"
  },
  Descontainer: {
    flexDirection: "row", // Arrange items in a row
    justifyContent: "space-between", // Add this to evenly space items
  },
  DesitemContainer: {
    margin: 16,
  },
  live: {
    fontSize: 18,
    fontWeight: "bold",
    borderWidth: 1,
    borderColor: "blue", // Change border color as needed
    borderRadius: 8,
    padding: 18,
    paddingVertical:9,
    paddingHorizontal:9,

  },
  // button:{
  //   fontSize: 18,
  //   fontWeight: "bold",
  //   borderWidth: 1,
  //   borderColor: "blue", // Change border color as needed
  //   borderRadius: 8,
  //   padding:4,
  //   marginLeft:25,
  //   marginRight:10,
  //   marginBottom:25,

  // }
  text:{
    fontSize:20,
    fontWeight:"bold",
    marginLeft:25,
    marginRight:10,
    marginBottom:25,
  }
 
});

export default NewShare;
