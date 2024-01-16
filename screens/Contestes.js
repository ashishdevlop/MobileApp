import { useNavigation } from '@react-navigation/native';
import React , {useState} from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Button , ScrollView} from 'react-native';
import NeftyHeader from '../components/NeftyHeader';
import FilterOptions from '../components/FilterOptions';
import { Ionicons } from '@expo/vector-icons'; 
const ContestScreen = () => {
  const navigation = useNavigation();
const title="NIFTY50"
  const sessions = [
    {
      timeLeft: '1:30 PM',
      timeRight: '2:00 PM',
      date: 'Fri, 11 Aug',
    },
    // Add more session data here
  ];
  const handleMyContestsPress = () => {
    // Handle the 'Contests' press
    navigation.goBack();
 
  };
  
  const handleContestsPress = () => {
    // Handle the 'My Contests' press
   
  };
  
  const handleMyBasketsPress = () => {
    // Handle the 'My Baskets' press
    navigation.navigate('NewStockScreen');
  };

  const contest = [
    {
      market: 'Guaranteed',
      format: 'UP',
      duration: '30 minutes',
      price: '$1 Lakh',
      sportsLeft: '2678 spots left',
      sportsRight: '3590 spots',
      title: '$39',
      text1: '$10,000',
      text2: '57%',
      text3: 'Upto 11',
    },
    {
      market: 'Guaranteed',
      format: 'UP',
      duration: '30 minutes',
      price: '$1.50 Lakh',
      sportsLeft: '19 spots left',
      sportsRight: '19 spots',
      title: '$9,999',
      text1: '$30,000',
      text2: '63%',
      text3: 'Upto 6',
    },
    {
      market: 'Guaranteed',
      format: 'UP',
      duration: '30 minutes',
      price: '$2 Lakh',
      sportsLeft: '27 spots left',
      sportsRight: '25 spots',
      title: '$2,999',
      text1: '$40,00',
      text2: '70%',
      text3: 'Upto 8',
    },
    // Add more contest data here
  ];

  const handleItemPress = () => {
    navigation.navigate('EntryScreen');
  };
  //filter options
  const [selectedOption, setSelectedOption] = useState('Option 1');
  const options = ['Entry', 'Spots', 'Prize Pool', '%Winnings',<Ionicons name="filter" size={24} color="black" />];

  const handleOptionChange = (newOption) => {
    setSelectedOption(newOption); }
    //which section is selected
    const [selectedTab, setSelectedTab] = useState('Contests');

  // Function to handle tab selection
  const handleTabSelect = (tabName) => {
    setSelectedTab(tabName);
  };

  // const handleContest = () => {
  //    navigation.navigate('Contestes');
  // };

const onIconTouch=()=>{
  navigation.goBack();
}
  const renderSessionItem = ({ item }) => (
    <TouchableOpacity>
      <View style={styles.sessionItem}>
        <View style={styles.marketFormatContainer}>
          <View style={styles.leftContent}>
            <Text style={styles.timeLeft}>{item.timeLeft}</Text>
            <Text style={styles.date}>{item.date}</Text>
          </View>
          <View style={styles.rightContent}>
            <Text style={styles.timeRight}>{item.timeRight}</Text>
            <Text style={styles.date}>{item.date}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );

  const renderSessionContest = ({ item }) => (
    <TouchableOpacity onPress={handleItemPress}>
      <View style={styles.sessionItem}>
        <View style={styles.marketFormatContainer}>
          <View style={styles.leftContent}>
            <Text style={styles.marketTitle}>{item.market}</Text>
            <Text style={styles.price}>{item.price}</Text>
          </View>
          <View style={styles.rightContent}>
            <Text>Entry</Text>
            <Button 
              title={item.title}
              onPress={handleItemPress}
            />
          </View>
        </View>
        <View style={styles.sportsContainer}>
          <Text style={styles.timeLeft2}>{item.sportsLeft}</Text>
          <Text style={styles.timeRight2}>{item.sportsRight}</Text>
        </View>
        <View style={styles.statsContainer}>
          <Text>{item.text1}</Text>
          <Text>{item.text2}</Text>
          <Text>{item.text3}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View>
   <NeftyHeader  leftIcon='arrowleft' onIconPress={onIconTouch}/>
   <View style={styles.container}>
      <FlatList
        data={sessions}
        renderItem={renderSessionItem}
        keyExtractor={(item) => item.timeLeft}
      />
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <TouchableOpacity onPress={() => handleTabSelect('Contests')}>
          <Text style={[styles.tab, selectedTab === 'Contests' && styles.selectedTab]}>Contests</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => handleTabSelect('My Contests')}>
          <Text style={[styles.tab, selectedTab === 'My Contests' && styles.selectedTab]}>My Contests</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => handleTabSelect('My Basket')}>
          <Text style={[styles.tab, selectedTab === 'My Basket' && styles.selectedTab]}>My Basket</Text>
        </TouchableOpacity>
      </ScrollView>
      <View style={styles.filter}>
      <FilterOptions  options={options}
        selectedOption={selectedOption}
        onOptionChange={handleOptionChange}/>
        </View>
        {selectedTab === 'Contests' && (
          <View style={styles.container}>
        <FlatList data={contest}
        renderItem={renderSessionContest}
        keyExtractor={(item) => item.price}
          />
      </View>
      )}

      {selectedTab === 'My Contests' && (
        <View style={styles.content}>
          {/* Completed content */}
          <Text style={styles.live}>My Contests</Text>
          <Text style={styles.upcomingTitle}>You haven't joined a contest yet.</Text>
          <Text style={styles.upcomingSubtitle}>Find a contest to join and start winning</Text>

          <TouchableOpacity style={styles.viewUpcomingButton} onPress={ handleMyContestsPress}>
            <Text style={styles.viewUpcomingButtonText}>JOIN A CONTEST</Text>
          </TouchableOpacity>
          {/* Add your completed sessions content here */}
          
        </View>
      )}
      {selectedTab === 'My Basket' && (
        <View style={styles.content}>
          {/* Completed content */}
          <Text style={styles.live}>My Basket Content here</Text>
          <Text style={styles.upcomingTitle}>You haven't joined a Basket yet.</Text>
          <Text style={styles.upcomingSubtitle}>Find a contest to join and start winning</Text>

          <TouchableOpacity style={styles.viewUpcomingButton} onPress={handleMyBasketsPress}>
            <Text style={styles.viewUpcomingButtonText}>JOIN A BASKET</Text>
          </TouchableOpacity>
          {/* Add your completed sessions content here */}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding:15,
  },
 
  top: {
    color: 'red',
    textAlign: 'center',
  },
  middle: {
    flexDirection: "row",
    justifyContent: 'space-between',
    borderTopWidth: 0.5,
    borderColor: '#d3d3d3',
    padding:10,
    //fontSize: 30 ,
    //marginTop: 10,
    marginBottom:5,
    //marginLeft: 20,
    //marginRight: 20,
  },
 
  tab: {
    padding: 20,
    paddingRight: 20,
    fontSize: 20,
    borderBottomWidth: 0.5,
    borderColor: 'gray',
  },
  selectedTab: {
    color: 'blue',
  },
  sessionItem: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    padding: 20,
    marginBottom: 16,
    elevation: 4,
    marginTop: 10,
  },
  marketFormatContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  leftContent: {
    flex: 1,
  },
  rightContent: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'space-around'
  },
  marketTitle: {
    fontSize: 18,
    marginBottom: 5,
  },
  price: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 5,
    color: '#FF4500',
  },
 
  sportsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    fontSize: 20,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    fontSize: 20,
    //backgroundColor: '#d3d3d3',
  },
  timeLeft: {
    fontSize: 20,
    marginBottom: 5,
    fontWeight: 'bold',
  },
  timeRight: {
    fontSize: 20,
    marginBottom: 5,
    fontWeight: 'bold',
  },
  timeLeft2: {
    fontSize: 15,
    marginBottom: 5,
    marginTop: 10,
  },
  timeRight2: {
    fontSize: 15,
    marginBottom: 5,
    marginTop: 10,
  },
  date: {
    fontSize: 18,
  },
  duration: {
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
    color: '#FF4500',
  },
  filter :{
    //flex: 1,
   // padding: 0,
  }
  , upcomingTitle: {
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
    padding: 10,
    borderRadius: 1,
    marginBottom:"50%",
    marginLeft:10,
    marginRight:10,
  },
  viewUpcomingButtonText: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
  },
});

export default ContestScreen;
