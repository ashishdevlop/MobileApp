import React from 'react';
import { View, Text, ScrollView, FlatList, StyleSheet, ImageBackground } from 'react-native';

const Carousel = ({ data }) => (
  <FlatList
    horizontal
    data={data}
    keyExtractor={(item) => item.id}
    renderItem={({ item }) => (
     
        <View style={styles.background}>
          <Text style={styles.text}>{item.text}</Text>
        </View>
    )}
    contentContainerStyle={styles.carouselContainer}
  />
);

const styles = StyleSheet.create({
  carouselContainer: {
   
    padding:20,
    borderWidth: 1,
    borderRadius: 15,
    elevation: 8,
  },
  text: {
    fontWeight: 'bold',
    fontSize:18,
    color: 'white',
  },
  background: {
    backgroundColor:'blue',
    width:290,
    height:80,
    justifyContent:'center',
    alignItems:'center',
    padding:10,
    borderWidth: 1,
    borderColor:'blue',
    borderRadius: 30,
    elevation: 10,
  }
});

export default Carousel;
