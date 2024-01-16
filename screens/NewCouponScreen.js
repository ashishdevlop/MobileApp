
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Button, ScrollView } from 'react-native';
import NewCouponHeader from '../components/NewCouponHeader';
// NewHelpHeader
// import NeftyHeader from '../components/NeftyHeader';
// hel
// NewFantansyHeader


const NewCouponScreen = () => {
  const navigation = useNavigation();

  const [downtrend, setDowntrend] = useState([
    //  
  ]);
  const [selectedTab, setSelectedTab] = useState('uptrend');

  // Function to handle tab selection
  const handleTabSelect = (tabName) => {
    setSelectedTab(tabName);
  };

  const renderSessionItem = ({ item }) => (
    <TouchableOpacity>
    //   // <View style={styles.sessionItem}>
    //   //   <View style={styles.marketFormatContainer}>
    //   //     <View style={styles.leftContent}>
    //   //       <Text style={styles.marketTitle}>{item.market}</Text>
    //   //       <Text style={styles.price}>{item.price}</Text>
    //   //       <View style={styles.timeContainer}>
    //   //         <Text style={styles.sportsCount}>{item.sportsLeft}</Text>
    //   //         <Text style={styles.sportsCount}>{item.sportsRight}</Text>
    //   //       </View>
    //   //       <Button title="ENTRY $39" onPress={() => handleItemPress(item)} />
    //   //       <View style={styles.bottomInfoContainer}>
    //   //         <Text style={styles.bottomInfoText}>$10,000</Text>
    //   //         <Text style={styles.bottomInfoText}>57%</Text>
    //   //         <Text style={styles.bottomInfoText}>Upto 11</Text>
    //   //       </View>
    //   //     </View>
    //   //   </View>
    //   // </View>
    </TouchableOpacity>
  );

  const handleItemPress = (item) => {
    // Handle item press
    navigation.navigate("NewCouponScreen");
  };
  const onIconTouch=()=>{
    navigation.goBack();


  }

  const [uptrend, setUptrend] = useState([
  ]);

  return (
    <View >
        <NewCouponHeader leftIcon='arrowleft' onIconPress={onIconTouch} />
        
         <View  style={styles.container}>
         <FlatList renderItem={renderSessionItem} />
         <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <TouchableOpacity onPress={() => handleTabSelect('uptrend')}>
          <Text style={[styles.tab, selectedTab === 'uptrend' && styles.selectedTab]}>Used</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => handleTabSelect('downtrend')}>
          <Text style={[styles.tab, selectedTab === 'downtrend' && styles.selectedTab]}>New</Text>
        </TouchableOpacity>

        
      </ScrollView>
      {selectedTab === 'uptrend' && (
        <View style={styles.uptrend}>
          {/* Completed content */}
          <Text style={styles.live}>Coupon 1
          </Text>
          {/* Add your completed sessions content here */}
        </View>
      )}

      {selectedTab === 'downtrend' && (
        <View style={styles.downtrend}>
          {/* Completed content */}
          <Text style={styles.live}>Coupon 2</Text>
        

          
          {/* Add your completed sessions content here */}
        </View>
      )}
     
    </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    marginTop:5,
    padding: 20,
    backgroundColor:"white",
  },
 
  duration: {
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
    //padding:10,
    color: '#FF4500',
  },
  sessionItem: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    padding: 15,
    marginBottom: 16,
    elevation: 4,
  },
  marketFormatContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  leftContent: {
    flex: 1,
  },
  marketTitle: {
    fontSize: 18,
    marginBottom: 5,
  },
  price: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  timeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  sportsCount: {
    fontSize: 18,
    padding:5
  },
  bottomInfoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop:10,
    //padding:10
  },
  bottomInfoText: {

    fontSize: 15,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'green',
  },
  winningsList: {
    padding: 10,
  },
  topContest: {
    backgroundColor: 'gold', // Style for the top contests
  },
  participationContest: {
    backgroundColor: 'lightgray', // Style for the participation contests
  },
  winningItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  rank: {
    fontSize: 20,
    fontWeight: 'bold',
    padding:5,
  },
  prize: {
    fontSize: 20,
    padding:5,

  },
  tab: {
    justifyContent: 'space-between',
    padding: 20,
    //paddingRight: 20,
    marginLeft:25,
    marginRight:20,
    marginTop:5,
    fontSize: 22,
    borderBottomWidth: 0.5,
    borderColor: 'gray',
  },
  selectedTab: {
    color: 'blue',
    // fontSize:12,
  },
  content: {
    justifyContent: 'center',
    padding: 20,
  },

  title:{
    backgroundColor:"",
  
    alignItems:"center",
    padding:5,
  },
  text:{
    fontsize:50,
    fontWeight:"bold",
    color:"black",
  }
  
});

export default NewCouponScreen;





