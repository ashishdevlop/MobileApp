import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { argonTheme } from "../constants";
import { TouchableOpacity } from "react-native-gesture-handler";

const NewHead = ({ title, leftIcon, rightIcon, showImage,onLeftPress, onRightPress }) => {
  
  return (
    <View style={styles.header}>
    {leftIcon && (
      <TouchableOpacity onPress={onLeftPress}>
        <AntDesign name="arrowleft" size={30} color="white" />
    </TouchableOpacity>
    )}
    <View style={styles.mainHeader}>
    {showImage && (
      <FontAwesome name="trophy" size={30} color="black"  />
    )}
    <Text style={styles.headerText}>{title}</Text>
    </View>
    {rightIcon && (
      <TouchableOpacity onPress={onRightPress}>
        <Ionicons name="settings" size={30} color="white" style={styles.right}/>
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
//textAlign:'right',
//marginLeft: 50,

  },
  mainHeader:{
    alignItems:'center',
textAlign:'center',
flexDirection:'row',
marginLeft:'auto',
marginRight:'auto',
//marginRight:"21%",
//marginLeft:'21%',
  },
  headerText: {
    color: "white",
    fontSize: 25,
    fontWeight: "bold",
    marginLeft:5,
  },
  
});

export default NewHead;
