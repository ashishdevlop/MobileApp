import React from 'react';
import {View, Text,StyleSheet, TouchableOpacity} from 'react-native';
import { argonTheme } from '../constants';
import { AntDesign } from '@expo/vector-icons';

const NewHelpHeader = ({title,subtitle,leftIcon,onIconPress}) => {
    return (
       
            <View style={styles.header}>
            {leftIcon && ( 
              <TouchableOpacity onPress={onIconPress}>
            <AntDesign name="arrowleft" size={30} color="white" style={{marginTop:12}} />
            </TouchableOpacity>
            )}
           
            <View>
        <Text style={styles.title}>How To Play </Text>
        {/* <Text style={styles.subtitle}>Guide</Text> */}
        </View>
      </View> 
    );
}

const styles = StyleSheet.create({
    header: {
      flexDirection:'row',
        padding: 16,
        //alignItems: 'center',
        backgroundColor: argonTheme.COLORS.HEADER,
      },
      title: {
        textAlign: 'center',
        alignItems:'center',
        marginLeft:'30%',
        fontSize: 24,
        fontWeight: 'bold',
        color:'white',
      },
    //   subtitle: {
    //     textAlign: 'center',
    //     alignItems:'center',
    //     marginLeft:"15%",

    //     fontSize: 16,
    //     color:'white',

    //   },
})

export default NewHelpHeader;
