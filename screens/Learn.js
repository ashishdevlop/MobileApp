import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import NewHeader from '../components/NewHeader';
import NewFooter from '../components/NewFooter';

const LearnScreen = () => {
  const title = 'INVESTRO';
  const imageUrl = {
    uri:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjh5BjTHKhab6XV0LS-2MzIGItymE-sA33RA&usqp=CAU',
  };

  return (
    <View style={styles.container}>
      <NewHeader title={title} imageUrl={imageUrl} showImage={true} />
      <View style={styles.learn}>
        <Text style={styles.learnText}>Hi! DJULNU COBRAS</Text>
        <Text style={styles.learnText}>
          Level up your financial literacy and walk away with everything you need to unlock your financial freedom!
        </Text>
      </View>
      <NewFooter />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, // Make the main content take up the entire available space
    // Add padding or other styling as needed
  },
  learn: {
    // Add styling for the learn content as needed
    padding: 10,
    flex: 1,
    justifyContent: 'center',
  },
  learnText: {
    fontSize: 15,
    marginBottom: 10,
  },
});

export default LearnScreen;
