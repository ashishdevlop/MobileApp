// import React from 'react';
// import { View, Text, ScrollView, FlatList, StyleSheet, ImageBackground } from 'react-native';

// const Carousel = ({ data }) => (
//   <FlatList
//     horizontal={true}
//     data={data}
//     keyExtractor={(item) => item.id}
//     renderItem={({ item }) => (
     
//         <View style={styles.background}>
//           <Text style={styles.text}>{item.text}</Text>
//         </View>
//     )}
//     contentContainerStyle={styles.carouselContainer}
//   />
// );

// const styles = StyleSheet.create({
//   carouselContainer: {
   
//     padding:20,
//     borderWidth: 1,
//     borderRadius: 15,
//     elevation: 8,
//   },
//   text: {
//     fontWeight: 'bold',
//     fontSize:18,
//     color: 'white',
//   },
//   background: {
//     backgroundColor:'blue',
//     width:290,
//     height:80,
//     justifyContent:'center',
//     alignItems:'center',
//     padding:10,
//     borderWidth: 1,
//     borderColor:'blue',
//     borderRadius: 30,
//     elevation: 10,
//   }
// });

// export default Carousel;




import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { FlatList } from "react-native-gesture-handler";

const Carousel = () => {
  return (
    
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.carouselContainer}
    >
      <View style={styles.carousel}>
        <Text style={styles.text}>
          Earn ₹ 250 Per Invite!  
        </Text>
      </View>
      <View style={styles.carousel}>
        <Text style={styles.text}>
          Earn ₹ 250 Per Invite! 
        </Text>
      </View>
      <View style={styles.carousel}>
        <Text style={styles.text}>
          Earn ₹ 250 Per Invite!
          
        </Text>
      </View>
    </ScrollView>
  );
};

export default Carousel;

const styles = StyleSheet.create({
  carouselContainer: {
    paddingLeft: 50, // Adjust the initial padding as needed
  },
  carousel: {
    width: 300,
    height: 70, // Adjust the height as needed
    backgroundColor: "blue",
    marginLeft: 10,
    marginTop:5, // Adjust the margin as needed
    marginRight: 10, // Adjust the margin as needed
    borderRadius: 25,
    padding: 7,
    // alignItems: "center", // Center content horizontally
    justifyContent: "center", // Center content vertically
    paddingBottom:10,
  },
  text: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
  },
});
