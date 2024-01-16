// import { StyleSheet, Text, View } from 'react-native'
// import React from 'react'

// const NewTrendScreen = () => {
//   return (
//     <View>
//       <Text>NewTrendScreen</Text>
//     </View>
//   )
// }

// export default NewTrendScreen

// const styles = StyleSheet.create({})




import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Button, ScrollView ,Image} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import {Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

import NeftyHeader from '../components/NeftyHeader';
import KycScreen from './KycScreen';

const NewTrendScreen= () => {
  const navigation = useNavigation();

  const [contest, setContest] = useState([
    {
     
    },
  ]);
  
  const [selectedTab, setSelectedTab] = useState('Winnings');

  // Function to handle tab selection
  const handleTabSelect = (tabName) => {
    setSelectedTab(tabName);
  };


  

  const handlebuttonPress = (item) => {
    // Handle item press
    navigation.navigate("KycScreen");
  };
  const cardData = [
        {
          id: '1',
          title: 'Overall Win Rate',
          title2:<AntDesign name="infocirlceo" size={24} color="black" /> ,
          content: ' 100%',
          text1:"contest Player",
          text2:" contests Won",
          text3:1,
          text4:1,
          
        
        },
        {
          id: '2',
          title: 'Trend Split',
          title2:<AntDesign name="infocirlceo" size={24} color="black" /> ,
          content: '............................................................',
          text1:<Ionicons name="arrow-up-circle-outline" size={24} color="green" />,
          text2:" 100%",
          text3:<Ionicons name="arrow-down-circle-outline" size={24} color="red" />,
          text4:"Na%",
        },
        {
          id: '3',
          title: 'Win split',
          title2:<AntDesign name="infocirlceo" size={24} color="black" /> ,
          content: ' 100%',
          text1:<Ionicons name="arrow-up-circle-outline" size={24} color="green" />,
          text2:" 100%",
          text3:<Ionicons name="arrow-down-circle-outline" size={24} color="red" />,
          text4:"Na%",
        },
      ];

  const  renderCard = ({ item }) => (
     <TouchableOpacity>
    <View style={styles.cardContainer}>
      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <Text style={styles.cardTitle}>{item.title}</Text>
          <Text style={styles.cardTitle}>{item.title2}</Text>
        
        </View>
        <Text style={styles.cardContent}>{item.content}</Text>
         

        {/* New Section */}
        <View style={styles.cardFooter}>
          <Text style={styles.text1}>{item.text1}</Text>
          <Text style={styles.text2}>{item.text2}</Text>
        </View>
        <View style={styles.cardFooter2}>
          <Text style={styles.text1}>{item.text3}</Text>
          <Text style={styles.text2}>{item.text4}</Text>
        </View>
      </View>
    </View>
  </TouchableOpacity>
  );
    //  
  const cardDatas = [
       {
          id: '1',
          title: 'Overall Win Rate',
          title2:<AntDesign name="infocirlceo" size={24} color="black" /> ,
          content: ' Na%',
          text1:"contest Player",
          text2:" contests Won",
          text3:1,
          text4:1,
          
        
        },
        {
            id: '2',
            title: 'Trend Split',
            title2:<AntDesign name="infocirlceo" size={24} color="black" /> ,
            text1:<Ionicons name="arrow-up-circle-outline" size={24} color="green" />,
            text2:" 100%",
            text3:<Ionicons name="arrow-down-circle-outline" size={24} color="red" />,
            text4:"Na%",
          },
          {
            id: '3',
            title: 'Win split',
            title2:<AntDesign name="infocirlceo" size={24} color="black" /> ,
            content: ' 100%',
            text1:<Ionicons name="arrow-up-circle-outline" size={24} color="green" />,
            text2:" 100%",
            text3:<Ionicons name="arrow-down-circle-outline" size={24} color="red" />,
            text4:"Na%",
          },
      ];

       const renderSessionItem = ({ item }) => (
          <TouchableOpacity>
              <View style={styles.sessionItem}>
            {/* Left Content */}
            <View style={styles.leftContent}>
                <Image
                    source={require('../assets/imgs/bull.png')}
                    style={styles.image}
                />
            </View>
             <View>
              {/* Two Text Elements */}
              <Text style={styles.price}>{item.price}COUJCXKNIGHT</Text>
              <Text style={styles.marketTitle}>{item.market}joined</Text>
              </View>

            {/* Right Content */}
            <View style={styles.rightContent}>
             {/* <TouchableOpacity onPress={() => handleEditOption(item)}>
                <Text style={styles.editOption}>Edit</Text>
              </TouchableOpacity> */}
              {/* Block */}
            
            </View>
          </View>
          <View style={styles.sessionItem1}>
          <View style={styles.leftContent1}>
          
               <Text ><FontAwesome5 name="lock-open" size={9} color="green" />instance withdrawal</Text>
            </View>
                
                <View style={styles.rightContent}>
             <TouchableOpacity onPress={handlebuttonPress}>
                <Text style={styles.editOption}>VERIFY PROFILE</Text>
              </TouchableOpacity>
         </View>
         </View>
    </TouchableOpacity>
    
  );

 

  const  renderCard1 = ({ item }) => (
     <TouchableOpacity>
    <View style={styles.cardContainer}>
      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <Text style={styles.cardTitle}>{item.title}</Text>
          <Text style={styles.cardTitle}>{item.title2}</Text>
        </View>
        <Text style={styles.cardContent}>{item.content}</Text>

        {/* New Section */}
        <View style={styles.cardFoote3}>
          <Text style={styles.text1}>{item.text1}</Text>
          <Text style={styles.text2}>{item.text2}</Text>
        </View>
        <View style={styles.cardFooter4}>
          <Text style={styles.text1}>{item.text3}</Text>
          <Text style={styles.text2}>{item.text4}</Text>
        </View>
      </View>
    </View>
  </TouchableOpacity>
  );
//   const handleItemPress = (item) => {
//     // Handle item press
//     navigation.navigate("NewStockScreen");
//   };
  const onIconTouch=()=>{
    navigation.goBack();


  }

  const [winnings, setWinnings] = useState([
    
  ]);

  return (
    <View >
       <NeftyHeader  leftIcon='arrowleft' onIconPress={onIconTouch} />
         <View  style={styles.container}>
         <FlatList data={contest} renderItem={ renderSessionItem} />
  
         <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <TouchableOpacity onPress={() => handleTabSelect('Winnings')}>
          <Text style={[styles.tab, selectedTab === 'Winnings' && styles.selectedTab]}>NIFTY50</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => handleTabSelect('Contest Lobby')}>
          <Text style={[styles.tab, selectedTab === 'Contest Lobby' && styles.selectedTab]}>DOW30</Text>
        </TouchableOpacity>

        
      </ScrollView>
      {selectedTab === 'Winnings' && (
       
        <View style={styles.content}>
          {/* Completed content */}
          <Text style={styles.live}>NIFTY50</Text>
          
           <FlatList data={cardData} renderItem={renderCard} keyExtractor={(item) => item.id} />
          {/* Add your completed sessions content here */}
        </View>
      )}
     
     

      {selectedTab === 'Contest Lobby' && (
        <View style={styles.content}>
          {/* Completed content */}
          <Text style={styles.live}>DOW30</Text>
           <FlatList data={cardDatas} renderItem={renderCard1} keyExtractor={(item) => item.id} />
          
          {/* Add your completed sessions content here */}
        </View>
      )}
     
    </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    padding: 10,
      elevation: 4,
      
    
  },
 

  tab: {
    justifyContent: 'space-between',
    padding: 12,
    //paddingRight: 20,
    //marginLeft:5,
    marginLeft:50,
    marginRight:20,
    fontSize: 22,
    borderBottomWidth: 0.5,
    borderColor: 'grey',
  },
  selectedTab: {
    color: 'blue',
  },
  content: {
    justifyContent: 'center',
    padding:10,
  },
  cardContainer: {
        flexDirection: 'column',
      },
      card: {
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 8,
        padding: 20,
        // margin: 8,
        backgroundColor: '#fff',
      },
      cardHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      },
      cardTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 8,
      },
      
      cardContent: {
        fontSize: 14,
      },
   
     
      
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  cardFooter2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  cardFoote3: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  cardFooter4: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  sessionItem: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 10,
    // marginBottom: 16,
    elevation: 4,
  },
  leftContent: {
    flex: 1,
  },
  image: {
    width: 50, // Adjust the width as needed
    height: 50, // Adjust the height as needed
    borderRadius: 25, // Assuming a circular image, adjust as needed
    // marginRight: 10,
  },
  marketTitle: {
    fontSize: 12,
    fontWeight: 'bold',
    
    // marginBottom: 5,
  },
  price: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  editOption: {
    color: 'green', // Adjust the color as needed
    // fontWeight:"bold"
    // marginTop: 5,
  },
  rightContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
 },
 sessionItem1: {
    flexDirection: 'row',
    backgroundColor: 'white',
 
    // borderRadius: 5,
    padding: 8,
    // marginBottom: 16,
    elevation: 3,
  },
  leftContent1:{
    color:"green"
  },
  live:{
  
    color:"blue",
  }
 

      
});

export default NewTrendScreen
