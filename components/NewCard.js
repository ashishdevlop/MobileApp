import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity, ScrollView } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
const NewCard = () => {
    const navigation=useNavigation();

  const [sessions, setSessions] = useState([
    {
      market: 'NIFTY50',
      timer: '4h 9m',
      format: 'UP',
      duration: '30 minutes',
      timeLeft: '1:30 PM',
      timeRight: '2:00 PM',
      date: 'Fri, 11 Aug',
      price: 'MEGA 1 LAKH',
    },
    {
      market: 'NIFTY51',
      timer: '6h 3m',

      format: 'UP',
      duration: '30 minutes',
      timeLeft: '2:30 PM',
      timeRight: '3:00 PM',
      date: 'Fri, 11 Aug',
      price: 'MEGA 21 LAKH',
    },
    {
      market: 'DOW30',
      timer: '8h 3m',

      format: 'UP',
      duration: '30 minutes',
      timeLeft: '7:00 PM',
      timeRight: '8:30 PM',
      date: 'Fri, 11 Aug',
      price: 'MEGA 1.5 LAKHS',
    },
  ]);
  const handleItemPress = () => {
    navigation.navigate('ContestScreen');
  };
  

  const renderSessionItem = ({ item }) => (
    <TouchableOpacity onPress={handleItemPress}>
      
    <View style={styles.sessionItem}>
    <Text style={styles.timer}>{item.timer}</Text>

      <View style={styles.marketFormatContainer}>
          <View style={styles.leftContent}>
          <View style={styles.row}>
            <Image  source={{uri: 'https://media.istockphoto.com/id/1300548408/vector/growth-arrow-icon-green-arrow-up.jpg?s=170667a&w=0&k=20&c=1D_IyJHEfFwaW_u9Gvd9mA0cuMkt4iUSE-36nP3ND7Y=' }} style={styles.first}></Image>
            <Text style={styles.marketTitle}>{item.market}</Text>
            </View>
             <Text style={styles.timeLeft}>{item.timeLeft}</Text>
            <Text style={styles.date}>{item.date}</Text>
          </View>
 
       <View style={styles.duration}>
        <Entypo name="arrow-long-left" style={styles.images} color="gray" />
 
        <Text style={{color:'red'}} >
        {item.duration} 
      
      </Text>
      <Entypo name="arrow-long-right" style={styles.images1}  color="gray" />
      </View>
        <View style={styles.rightContent}>
        <View style={styles.row}>
            <Image  source={{uri: 'https://atlas-content-cdn.pixelsquid.com/stock-images/arrow-directional-G9y43r6-600.jpg' }} style={styles.first1}></Image>
            <Text style={styles.format}>{item.format}</Text>
            </View>

          
          <Text style={styles.timeRight}>{item.timeRight}</Text>
          <Text style={styles.date}>{item.date}</Text>
        </View>
      </View>
      <View style={styles.Price}>
      <Text style={styles.text} >
         {item.price}
      </Text>
      </View>
    </View>
    </TouchableOpacity>

  );
 

  return (

     <View style={{padding:20}}>
          <FlatList 
           data={sessions}
           renderItem={renderSessionItem}
            keyExtractor={(item) => item.market 
            }/>
      </View>
  );
}
    
  const styles = StyleSheet.create({
  
 
  sessionItem: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    paddingLeft: 20,
    paddingRight:20,
    marginBottom: 20,
    elevation: 4,
  },
  timer:{
    marginLeft: 134,
    marginRight: 134,
    borderEndWidth:0.2,
    paddingLeft:2,
    paddingRight:2,
borderColor:'gray',
//borderLeftWidth:0.2,
//borderRightWidth:0.2,
//borderBottomWidth:0.2,
//borderRadius:4

  },
  marketFormatContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',

  },
  first:
  {
   height: 40,
    width: 20,
    marginRight:10
  },
  first1:{
    height: 20,
     width: 25,
     //marginRight:10
   },
  leftContent: {
    flex: 1,
    alignItems:'flex-start',
    

  },
  rightContent: {
    flex: 1,
    alignItems: 'flex-end',
    paddingTop: 12,
  

  },
  row:{

flexDirection:'row',

  },
  marketTitle: {
    fontSize: 16,
    //marginBottom:5,
    marginTop:10,
    marginLeft:5,
    
    
  },
  images:{
height: 10,
width: 25,

  },
  images1:{
    height: 10,
    marginLeft: 10,
    width: 25,
      },
     
  format: {
    fontSize: 16,
    fontWeight:'bold',
    marginBottom:5,
    color: 'green',
  },
  timeLeft: {
    fontSize: 20,
    padding:5,
    fontWeight: 'bold',
  },
  timeRight: {
    fontSize: 20,
    padding: 5,
    fontWeight: 'bold',
  },
  date: {
    fontSize: 15,
    padding:6,
  },
  Price: {
    alignItems:'center',
    justifyContent:'center',
    paddingTop:5,
   borderTopWidth:0.5,
    borderTopColor: '#ccc',
},
  text:{
      color: 'skyblue',
      fontWeight:'bold',
      fontSize: 15,
      justifyContent:'center',
      padding:8,
     
  },
  duration: {
    flexDirection:'row',
    color:'red',
    fontSize: 15,
    fontWeight: 'bold',
    marginTop:15,
    textAlign: 'center',
    alignItems:'center',
    justifyContent: 'center',
   
    color: '#FF4500',
  },
  
 
});

export default NewCard;



