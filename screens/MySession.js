import { View, Text, StyleSheet, TouchableOpacity, ScrollView, FlatList,Image } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

import NewHeader from '../components/NewHeader';
import NewFooter from '../components/NewFooter';
import NewCard from '../components/NewCard';

const MySession = () => {
  const navigation = useNavigation();
  const title = 'INVESTRO';
  const imageUrl = { uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjh5BjTHKhab6XV0LS-2MzIGItymE-sA33RA&usqp=CAU' };

  // State to track the currently selected tab
  const [selectedTab, setSelectedTab] = useState('Upcoming');

    
  const [sessions, setSessions] = useState([
    {
      market: 'NIFTY50',
      timer: '4h9m',
      format: 'UP',
      // duration: '30 minutes',
      timeLeft: '1:30 PM',
      timeRight: '2:00 PM',
      date: 'Fri, 11 Aug',
      price: '1 Basket .2 contest',
    },
    {
      market: 'NIFTY51',
      timer: '6h3m',

      format: 'UP',
      // duration: '30 minutes',
      timeLeft: '2:30 PM',
      timeRight: '3:00 PM',
      date: 'Fri, 11 Aug',
      price: '1 Basket .2 contest',
    },
    {
      market: 'DOW30',
      timer: '8h3m',

      format: 'UP',
      // duration: '30 minutes',
      timeLeft: '7:00 PM',
      timeRight: '8:30 PM',
      date: 'Fri, 11 Aug',
      price: '1 Basket .2 contest',
    },
    
  ]);
    
  const [sessional, setSessional] = useState([
    {
      market: 'NIFTY50',
      timer: '4h9m',
      format: 'UP',
      // duration: '30 minutes',
      timeLeft: '1:30 PM',
      timeRight: '2:00 PM',
      date: 'Fri, 11 Aug',
      price: '1 Basket .2 contest',
    },
    {
      market: 'NIFTY51',
      timer: '6h3m',

      format: 'UP',
      // duration: '30 minutes',
      timeLeft: '2:30 PM',
      timeRight: '3:00 PM',
      date: 'Fri, 11 Aug',
      price: '1 Basket .2 contest',
    },
    // {
    //   market: 'DOW30',
    //   timer: '8h3m',

    //   format: 'UP',
    //   // duration: '30 minutes',
    //   timeLeft: '7:00 PM',
    //   timeRight: '8:30 PM',
    //   date: 'Fri, 11 Aug',
    //   price: '1 Basket .2 contest',
    // },
    
  ]);

  
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
        {/* <Entypo name="arrow-long-left" style={styles.images} color="gray" /> */}
 
        <Text style={{color:'red'}} >
        {item.duration} 
      
      </Text>
      {/* <Entypo name="arrow-long-right" style={styles.images1}  color="gray" /> */}
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

  
  const renderSessionalItems = ({ item }) => (
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
        {/* <Entypo name="arrow-long-left" style={styles.images} color="gray" /> */}
 
        <Text style={{color:'red'}} >
        {item.duration} 
      
      </Text>
      {/* <Entypo name="arrow-long-right" style={styles.images1}  color="gray" /> */}
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

  // Function to handle tab selection
  const handleTabSelect = (tabName) => {
    setSelectedTab(tabName);
  };

  const handlelivecoming = () => {
    navigation.navigate('NewHomeScreen');
  };

  const handleItemPress = () => {
    navigation.navigate('ContestScreen');
  };
  

  return (
    <View style={styles.container}>
      <NewHeader title={title} showImage={true} imageUrl={imageUrl} />

      {/* Horizontal tab navigation */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <TouchableOpacity onPress={() => handleTabSelect('Upcoming')}>
          <Text style={[styles.tab, selectedTab === 'Upcoming' && styles.selectedTab]}>Upcoming</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => handleTabSelect('Live')}>
          <Text style={[styles.tab, selectedTab === 'Live' && styles.selectedTab]}>Live</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => handleTabSelect('Completed')}>
          <Text style={[styles.tab, selectedTab === 'Completed' && styles.selectedTab]}>Completed</Text>
        </TouchableOpacity>
      </ScrollView>

      {/* Content based on the selected tab */}
      {selectedTab === 'Upcoming' && (
        <View style={styles.content}>
         <FlatList
         data={sessions}
         renderItem={renderSessionItem}
         keyExtractor={(item)=> item.market}/>
        </View>
     
      )}
       
      {selectedTab === 'Live' && (
        <View style={styles.content}>
        <Text style={styles.upcomingTitle}>You haven't joined a contest yet.</Text>
          <Text style={styles.upcomingSubtitle}>Find a contest to join and start winning</Text>

          <TouchableOpacity style={styles.viewUpcomingButton} onPress={handlelivecoming}>
            <Text style={styles.viewUpcomingButtonText}>VIEW UPCOMING CONTESTS</Text>
          </TouchableOpacity>
          {/* Live content */}
        
          
          {/* Add your live sessions content here */}
        </View>
      )}

      {selectedTab === 'Completed' && (
        <View style={styles.content}>
         <FlatList
         data={sessional}
         renderItem={renderSessionalItems}
         keyExtractor={(item)=> item.market}/>
        </View>
      )}

      <NewFooter />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tab: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    marginRight:50,
    borderBottomWidth: 0.5,
    borderColor: 'gray',
    // padding: 20,
    //paddingRight: 20,
    fontSize: 20,
    // borderBottomWidth: 0.5,
    // borderColor: 'gray',
  },
  selectedTab: {
    color: 'blue',
  },
  content: {
    justifyContent: 'center',
    padding: 20,
  },
  upcomingTitle: {
    fontSize: 20,
    color: '#666',
    //marginBottom: 5,
  },
  upcomingSubtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 20,
  },
  viewUpcomingButton: {
    backgroundColor: 'blue',
    padding: 20,
    borderRadius: 1,
    marginBottom:"100%",
  },
  viewUpcomingButtonText: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
  },
  live:{
    marginBottom: '100%',
    marginLeft:'39%',
    //marginRight:50,
    paddingRight:70,

    //justifyContent: 'center',
    //alignItems:'center',
  },
  
  sessionItem: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    paddingLeft: 20,
    paddingRight:20,
    marginBottom: 20,
    elevation: 4,
  },
  timer:{

      fontSize: 20,
      textAlign: "center",
      marginBottom: 18,
      fontWeight:'bold',
    // marginLeft: 150,
    // marginRight: 110,
    // borderEndWidth:0.2,
    // flexDirection: 'row',
    // fontSize:9,
    // paddingLeft:1,
    // paddingRight:1,
    // textAlign:"center",
    // borderColor:'gray',
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
    fontSize: 15,
    // padding:3,
    fontWeight: 'bold',
  },
  timeRight: {
    fontSize: 15,
    // padding: 4,
    fontWeight: 'bold',
  },
  date: {
    fontSize: 15,
    // marginLeft:15,
    // marginRight:15,
    // padding:5,
    fontWeight:'bold',
  },
  Price: {
    // alignItems:'center',
    borderRadius: 8,
    justifyContent:'center',
    paddingTop:5,
   borderTopWidth:0.5,
    borderTopColor: '#ccc',
    // backgroundColor:"grey",
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
    marginTop:10,
    textAlign: 'center',
    alignItems:'center',
    justifyContent: 'center',
   
    color: '#FF4500',
  },
});

export default MySession;
