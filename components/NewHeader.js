import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { FontAwesome5 } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

import { argonTheme } from "../constants";
import { Entypo } from '@expo/vector-icons';
import { TouchableOpacity } from "react-native-gesture-handler";

const NewHeader = ({ title, leftIcon, rightIcon, image,showImage, imageUrl ,onLeftIconPress, onRightIconPress }) => {
  
  return (
    <View style={styles.header}>
    {leftIcon && (
      <TouchableOpacity onPress={onLeftIconPress}>
        <Entypo name="menu" size={30} color="black" />
      </TouchableOpacity>
    )}
    <View style={styles.mainHeader}>
    {showImage && (
      <FontAwesome name="trophy" size={30} color="black"  />
    )}
    <Text style={styles.headerText}>{title}</Text>
    </View>
    {rightIcon && (
      <TouchableOpacity onPress={onRightIconPress}>
        <Ionicons name="wallet" size={30} color="black" style={styles.right}/>

      </TouchableOpacity>
    )}
  </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: argonTheme.COLORS.PRIMARY,
    padding: 20,
  },
  left:{
    alignItems:'flex-start',
   
   height:35,
   width:35,
  },
  right:{
    alignItems: 'flex-end',

  },
  mainHeader:{
    alignItems:'center',
textAlign:'center',
flexDirection:'row',
marginLeft:'auto',
marginRight:'auto',
  },
  headerText: {
    color: "white",
    fontSize: 25,
    fontWeight: "bold",
    marginLeft:5,
  },
  
});

export default NewHeader;
