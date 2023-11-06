import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import NewHeader from '../components/NewHeader';
import NewFooter from '../components/NewFooter';

const MySession = () => {
  const navigation = useNavigation();
  const title = 'INVESTRO';
  const imageUrl = { uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjh5BjTHKhab6XV0LS-2MzIGItymE-sA33RA&usqp=CAU' };

  // State to track the currently selected tab
  const [selectedTab, setSelectedTab] = useState('Upcoming');

  // Function to handle tab selection
  const handleTabSelect = (tabName) => {
    setSelectedTab(tabName);
  };

  const handleUpcoming = () => {
    navigation.navigate('NewHomeScreen');
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
          {/* Upcoming content */}
          <Text style={styles.upcomingTitle}>You haven't joined a contest yet.</Text>
          <Text style={styles.upcomingSubtitle}>Find a contest to join and start winning</Text>

          <TouchableOpacity style={styles.viewUpcomingButton} onPress={handleUpcoming}>
            <Text style={styles.viewUpcomingButtonText}>VIEW UPCOMING CONTESTS</Text>
          </TouchableOpacity>
        </View>
      )}

      {selectedTab === 'Live' && (
        <View style={styles.content}>
          {/* Live content */}
          <Text style={styles.live}>Live Sessions</Text>
          {/* Add your live sessions content here */}
        </View>
      )}

      {selectedTab === 'Completed' && (
        <View style={styles.content}>
          {/* Completed content */}
          <Text style={styles.live}>Completed Sessions</Text>
          {/* Add your completed sessions content here */}
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
  }
});

export default MySession;
