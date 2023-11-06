import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Button, ScrollView } from 'react-native';
import NeftyHeader from '../components/NeftyHeader';

const EntryScreen = () => {
  const navigation = useNavigation();

  const [contest, setContest] = useState([
    {
      market: 'Guaranteed',
      format: 'UP',
      duration: '30 minutes',
      price: '$1 Lakh',
      sportsLeft: '2678',
      sportsRight: '3590',
    },
  ]);
  const [selectedTab, setSelectedTab] = useState('Winnings');

  // Function to handle tab selection
  const handleTabSelect = (tabName) => {
    setSelectedTab(tabName);
  };

  const renderSessionItem = ({ item }) => (
    <TouchableOpacity>
      <View style={styles.sessionItem}>
        <View style={styles.marketFormatContainer}>
          <View style={styles.leftContent}>
            <Text style={styles.marketTitle}>{item.market}</Text>
            <Text style={styles.price}>{item.price}</Text>
            <View style={styles.timeContainer}>
              <Text style={styles.sportsCount}>{item.sportsLeft}</Text>
              <Text style={styles.sportsCount}>{item.sportsRight}</Text>
            </View>
            <Button title="ENTRY $39" onPress={() => handleItemPress(item)} />
            <View style={styles.bottomInfoContainer}>
              <Text style={styles.bottomInfoText}>$10,000</Text>
              <Text style={styles.bottomInfoText}>57%</Text>
              <Text style={styles.bottomInfoText}>Upto 11</Text>
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );

  const handleItemPress = (item) => {
    // Handle item press
    navigation.navigate("NewStockScreen");
  };
  const onIconTouch=()=>{
    navigation.goBack();


  }

  const [winnings, setWinnings] = useState([
    { rank: 1, prize: '₹10,000' },
    { rank: 2, prize: '*5,000' },
    { rank: 3, prize: '€2,500' },
    { rank: 4, prize: '$1,000' },
    { rank: 5, prize: '7500' },
    { rank: 6, prize: '200' },
    { rank: 7, prize: '200' },
    { rank: 8, prize: '200' },
    { rank: 9, prize: '200' },
    { rank: 10, prize: '200' },
  ]);

  return (
    <View >
         <NeftyHeader  leftIcon='arrowleft' onIconPress={onIconTouch} />
         <View  style={styles.container}>
         <FlatList data={contest} renderItem={renderSessionItem} />
         <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <TouchableOpacity onPress={() => handleTabSelect('Winnings')}>
          <Text style={[styles.tab, selectedTab === 'Winnings' && styles.selectedTab]}>Winnings</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => handleTabSelect('Contest Lobby')}>
          <Text style={[styles.tab, selectedTab === 'Contest Lobby' && styles.selectedTab]}>Contest Lobby</Text>
        </TouchableOpacity>

        
      </ScrollView>
      {selectedTab === 'Winnings' && (
        <View style={styles.winningsList}>
        {winnings.map((winning, index) => (
          <View
      key={index}
      style={[
        styles.winningItem,
        winning.rank <= 3 ? styles.topContest : styles.participationContest,
      ]}
    >
      <Text style={styles.rank}>{winning.rank}</Text>
      <Text style={styles.prize}>{winning.prize}</Text>
    </View>
        ))}
      </View>
      )}

      {selectedTab === 'Contest Lobby' && (
        <View style={styles.content}>
          {/* Completed content */}
          <Text style={styles.live}>Raw data</Text>
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
    padding: 20,
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
    //marginLeft:5,
    marginRight:35,
    fontSize: 22,
    borderBottomWidth: 0.5,
    borderColor: 'gray',
  },
  selectedTab: {
    color: 'blue',
  },
  content: {
    justifyContent: 'center',
    padding: 20,
  },
});

export default EntryScreen;
