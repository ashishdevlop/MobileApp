import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { argonTheme } from '../constants';

const NewFooter = () => {
  const navigation = useNavigation();

  // State to track the currently selected tab
  const [selectedTab, setSelectedTab] = useState('Home');

  // Function to handle tab selection
  const handleTabSelect = (tabName) => {
    setSelectedTab(tabName);
  };

  // Define navigation routes for each tab
  const tabRoutes = {
    Home: 'NewHomeScreen',
    'My Session': 'MySession',
    Learn: 'LearnScreen',
  };

  const handleTabPress = (tabName) => {
    setSelectedTab(tabName);
    navigation.navigate(tabRoutes[tabName]);
  };

  const getTabStyle = (tabName) => {
    return selectedTab === tabName ? styles.selectedTab : {};
  };

  return (
    <View style={styles.bottom}>
      <TouchableOpacity onPress={() => handleTabPress('Home')} style={[styles.tabItem, getTabStyle('Home')]}>
        <Entypo name="home" size={20} color="black" />
        <Text style={styles.tabText}>Home</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => handleTabPress('My Session')} style={[styles.tabItem, getTabStyle('My Session')]}>
        <AntDesign name="Trophy" size={20} color="black" />
        <Text style={styles.tabText}>My Session</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => handleTabPress('Learn')} style={[styles.tabItem, getTabStyle('Learn')]}>
        <Image style={styles.img} source={{ uri: 'https://static.thenounproject.com/png/3030217-200.png' }} />
        <Text style={styles.tabText}>Learn</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  bottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    //backgroundColor: argonTheme.COLORS.
    padding: 8,
    borderTopWidth: 0.2,
    borderColor: 'gray',
  },
  selectedTab: {
   // backgroundColor: 'blue', // Change the background color of the selected tab
  },
  tabItem: {
    marginLeft: 15,
    marginRight: 15,

    alignItems: 'center', // Center align items vertically
  },
  tabText: {
    fontSize: 15,
  },
  img: {
    height: 20,
    width: 20,
  },
});

export default NewFooter;
