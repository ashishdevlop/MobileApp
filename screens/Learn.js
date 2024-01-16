import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import NewHeader from '../components/NewHeader';
import NewFooter from '../components/NewFooter';
import { MaterialIcons } from '@expo/vector-icons'; // Make sure to import the correct icon library

const LearnScreen = () => {
  const title = 'INVESTRO';
  const imageUrl = {
    uri:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjh5BjTHKhab6XV0LS-2MzIGItymE-sA33RA&usqp=CAU',
  };
  const cardData = [
        {
          id: '1',
          title: 'Financial Courses',
          content: ' 6 Courses             3hrs 28 mins',
          icon: '📘', // You can replace it with a relevant icon
          image: 'book_image_url', // Replace 'book_image_url' with the actual image URL
        },
        {
          id: '2',
          title: 'Curated Videos',
          content: '4 hours                3hrs  35mins',
          icon: '📺', // You can replace it with a relevant icon
          image: 'lcd_image_url', // Replace 'lcd_image_url' with the actual image URL
        },
        {
          id: '3',
          title: 'Additional Content',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          icon: '📚', // You can replace it with a relevant icon
          image: 'additional_image_url', // Replace 'additional_image_url' with the actual image URL
        },
      ];
      
  const renderCard = ({ item }) => (
    <View style={styles.cardContainer}>
      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <Text style={styles.cardTitle}>{item.title}</Text>
          <Image source={{ uri: item.image }} style={styles.cardImage} />
        </View>
        <Text style={styles.cardContent}>
          {item.icon} {item.content}
        </Text>
      </View>
      {item.id === '2' && (
        <View style={styles.block}>
          <MaterialIcons name="system-update-tv" size={24} color="black" />
          <View>
            <Text style={styles.textt}>Update Available</Text>
            <Text style={{ marginLeft: 11, color: 'gray' }}>Update to 2.15.0</Text>
          </View>
          <TouchableOpacity style={styles.share1}>
            <Text style={styles.code}>UPDATE NOW</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );

  return (
    <View style={styles.container}>
      <NewHeader title={title} imageUrl={imageUrl} showImage={true} />
      <View style={styles.learn}>
        <Text style={styles.learnText}>Hi! DJULNU COBRAS</Text>
        <Text style={styles.learnText}>
          Level up your financial literacy and walk away with everything you need to unlock your financial freedom!
        </Text>
      </View>
      <FlatList data={cardData} renderItem={renderCard} keyExtractor={(item) => item.id} />
      <NewFooter />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, // Make the main content take up the entire available space
    // Add padding or other styling as needed
    backgroundColor:"white"
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
  cardContainer: {
        flexDirection: 'column',
      },
      card: {
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 8,
        padding: 16,
        margin: 8,
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
      cardImage: {
        width: 50,
        height: 50,
        resizeMode: 'cover',
      },
      cardContent: {
        fontSize: 14,
      },
      block: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        padding: 10,
        margin: 8,
        borderRadius: 8,
      },
      textt: {
        marginLeft: 11,
        fontWeight: 'bold',
        fontSize: 16,
      },
      share1: {
        backgroundColor: '#1E90FF',
        padding: 10,
        borderRadius: 8,
        marginLeft: 'auto',
      },
      code: {
        color: 'white',
        fontWeight: 'bold',
      },
});

export default LearnScreen;


// import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
// import React from 'react';
// import NewHeader from '../components/NewHeader';
// import NewFooter from '../components/NewFooter';
// import { MaterialIcons } from '@expo/vector-icons'; // Make sure to import the correct icon library



// const LearnScreen = () => {
//   const title = 'INVESTRO';
//   const imageUrl = {
//     uri:
//       'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjh5BjTHKhab6XV0LS-2MzIGItymE-sA33RA&usqp=CAU',
//   };

//   // Updated data for 3 cards
//   const cardData = [
//     {
//       id: '1',
//       title: 'Financial Courses',
//       content: ' 6 Courses             3hrs 28 mins',
//       icon: '📘', // You can replace it with a relevant icon
//       image: 'book_image_url', // Replace 'book_image_url' with the actual image URL
//     },
//     {
//       id: '2',
//       title: 'Curated Videos',
//       content: '4 hours                3hrs  35mins',
//       icon: '📺', // You can replace it with a relevant icon
//       image: 'lcd_image_url', // Replace 'lcd_image_url' with the actual image URL
//     },
//     {
//       id: '3',
//       title: 'Additional Content',
//       content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
//       icon: '📚', // You can replace it with a relevant icon
//       image: 'additional_image_url', // Replace 'additional_image_url' with the actual image URL
//     },
//   ];

//   const renderCard = ({ item }) => (
//     <View style={styles.cardContainer}>
//       <View style={styles.card}>
//         <View style={styles.cardHeader}>
//           <Text style={styles.cardTitle}>{item.title}</Text>
//           <Image source={{ uri: item.image }} style={styles.cardImage} />
//         </View>
//         <Text style={styles.cardContent}>
//           {item.icon} {item.content}
//         </Text>
//       </View>
//       {item.id === '2' && (
//         <View style={styles.block}>
//           <MaterialIcons name="system-update-tv" size={24} color="black" />
//           <View>
//             <Text style={styles.textt}>Update Available</Text>
//             <Text style={{ marginLeft: 11, color: 'gray' }}>Update to 2.15.0</Text>
//           </View>
//           <TouchableOpacity style={styles.share1}>
//             <Text style={styles.code}>UPDATE NOW</Text>
//           </TouchableOpacity>
//         </View>
//       )}
//     </View>
//   );

//   return (
//     <View style={styles.container}>
//      <NewHeader title={title} imageUrl={imageUrl} showImage={true} />
//       <View style={styles.learn}>
//         <Text style={styles.learnText}>Hi! DJULNU COBRAS</Text>
//         <Text style={styles.learnText}>
//           Level up your financial literacy and walk away with everything you need to unlock your financial freedom!
//         </Text>
//       </View>
//       {/* FlatList to render the 3 cards */}
//       <FlatList data={cardData} renderItem={renderCard} keyExtractor={(item) => item.id} />
//       <NewFooter />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 10,
//   },
//   learn: {
//     justifyContent: 'center',
//   },
//   learnText: {
//     fontSize: 15,
//     marginBottom: 10,
//   },
//   cardContainer: {
//     flexDirection: 'column',
//   },
//   card: {
//     borderWidth: 1,
//     borderColor: '#ddd',
//     borderRadius: 8,
//     padding: 16,
//     margin: 8,
//     backgroundColor: '#fff',
//   },
//   cardHeader: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//   },
//   cardTitle: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginBottom: 8,
//   },
//   cardImage: {
//     width: 50,
//     height: 50,
//     resizeMode: 'cover',
//   },
//   cardContent: {
//     fontSize: 14,
//   },
//   block: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: 'gray',
//     padding: 10,
//     margin: 8,
//     borderRadius: 8,
//   },
//   textt: {
//     marginLeft: 11,
//     fontWeight: 'bold',
//     fontSize: 16,
//   },
//   share1: {
//     backgroundColor: '#1E90FF',
//     padding: 10,
//     borderRadius: 8,
//     marginLeft: 'auto',
//   },
//   code: {
//     color: 'white',
//     fontWeight: 'bold',
//   },
// });

// export default LearnScreen;

