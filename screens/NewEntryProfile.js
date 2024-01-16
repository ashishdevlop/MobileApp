import React, { useState } from 'react';

import { useNavigation } from '@react-navigation/native'
import { View, Text, Image, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import NeftyHeader from '../components/NeftyHeader';

const NewEntryProfile = () => {
    const navigation = useNavigation();
  const [userData, setUserData] = useState({
    name: 'John Doe',
    team: 'Team A',
    mobile: '1234567890',
    dob: '1990-01-01',
  });

  const [selectedGender, setSelectedGender] = useState(''); // 'Male', 'Female', or ''

  const handleUpdateProfile = () => {
    // Implement logic to update user data (e.g., call API to save changes)
    // This is a placeholder; replace it with your actual update logic
    console.log('Updating user data:', { ...userData, gender: selectedGender });
  };

  const handleGenderChange = (gender) => {
    setSelectedGender(gender);
  };

  const onIconTouch=()=>{
    navigation.goBack();


  }

  return (
    <View style={styles.container}>
      {/* User Image */}
      <NeftyHeader leftIcon='arrowleft' onIconPress={onIconTouch} />

      {/* User Information */}
      <View style={styles.userImageContainer}>
        {/* User Image */}
        <Image
          source={require('../assets/imgs/bull.png')} // Replace with your actual image source
          style={styles.userImage}
        />
      </View>
      <View style={styles.userInfo}>
        <Text style={styles.label}>Name:</Text>
        <TextInput
          style={styles.input}
          value={userData.name}
          onChangeText={(name) => setUserData({ ...userData, name })}
        />
         <Text style={styles.desc}>As per PAN Card</Text>

        <Text style={styles.label}>Team:</Text>
        <TextInput
          style={styles.input}
          value={userData.team}
          onChangeText={(team) => setUserData({ ...userData, team })}
        />
        <Text style={styles.desc}>Email Address:</Text>
        <Text style={styles.label}>Mobile Number:</Text>
        <TextInput
          style={styles.input}
          value={userData.mobile}
          onChangeText={(mobile) => setUserData({ ...userData, mobile })}
        />

        <Text style={styles.label}>Date of Birth:</Text>
        <TextInput
          style={styles.input}
          value={userData.dob}
          onChangeText={(dob) => setUserData({ ...userData, dob })}
        />
         <Text style={styles.desc}>As per PAN Card</Text>

        <Text style={styles.label}>Gender:</Text>
        <View style={styles.radioContainer}>
          <TouchableOpacity
            style={[styles.radioOption, selectedGender === 'Male' && styles.selectedOption]}
            onPress={() => handleGenderChange('Male')}
          >
            <Text>Male</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.radioOption, selectedGender === 'Female' && styles.selectedOption]}
            onPress={() => handleGenderChange('Female')}
          >
            <Text>Female</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.radioOption, selectedGender === 'other' && styles.selectedOption]}
            onPress={() => handleGenderChange('other')}
          >
            <Text>other</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Update Button */}
      <TouchableOpacity style={styles.updateButton} onPress={handleUpdateProfile}>
        <Text style={styles.buttonText}>Update Profile</Text>
      </TouchableOpacity>
      </View>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"white"
 
  },
  userImageContainer: {
    marginTop:6,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    paddingLeft: 20, // Left side gap
    paddingRight: 20, // Right side gap
  },
  userImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
  },
  userInfo: {
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    marginLeft:16,
    marginRight:20,
  
  },
  infoText: {
    fontSize: 16,
    marginBottom: 10,
  },
  input: {
    width: '90%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 8,
    borderRadius: 8,
    marginLeft:16,
   
  },
  radioContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 10,
    // marginLeft:16,
    marginright:50,
  },
  radioOption: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    borderWidth: 1,
    borderColor: '#3498db',
    padding: 10,
    borderRadius: 8,
    marginLeft:16,
    marginRight:20,
  },
  selectedOption: {
    backgroundColor: '#3498db',
  },
  updateButton: {
    backgroundColor: '#3498db',
    padding: 10,
    borderRadius: 8,
    marginLeft:16,
    marginRight:20,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign:"center"
  },
  desc:{
    marginLeft:16,
    marginRight:20,
  }
});

export default NewEntryProfile;