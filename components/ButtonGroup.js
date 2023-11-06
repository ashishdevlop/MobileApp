// ButtonGroup.js
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { argonTheme } from '../constants';

const ButtonGroup = ({ buttons, onButtonPress }) => {
  return (
    <View style={styles.buttonRow}>
      {buttons.map((button, index) => (
        <TouchableOpacity
          key={index}
          style={styles.button}
          onPress={() => onButtonPress(button.name)}
        >
          <Text style={styles.buttonText}>{button.name}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = {
    buttonRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 20,
        marginRight: 140,
        marginLeft: 20,
      },
      button: {
      // flex: 1,
      backgroundColor: '#FFFFE0', // Background color
       borderColor: 'black', // Border color
       borderWidth: 0.5, // Border width
      borderRadius: 10,
      //borderRadiusStart:10,
      //   elevation:4, // Border radius
        //paddingVertical: 9,
      //   //color:'blue',
      //justifyContent: 'space-between',
        padding: 10,
      //   paddingHorizontal:2,

      //   //marginStart: 10,
      //   //marginEnd: 40,
        
      //  //marginRight:40,
      //   marginLeft: 5,
      },
      buttonText: {
        textAlign: 'center',
        color: 'black', // Text color
        fontWeight: 'bold',
        fontSize:15,
      },
};

export default ButtonGroup;
