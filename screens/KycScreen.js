
// import { useNavigation } from '@react-navigation/native'
// import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
// import React from 'react';
// // import NewHeader from '../components/NewHeader';
// // import NewFooter from '../components/NewFooter';
// import { MaterialIcons } from '@expo/vector-icons'; // Make sure to import the correct icon library

// const KycScreen = () => {
//     const navigation = useNavigation();
//   const title = 'INVESTRO';
//   const imageUrl = {
//     uri:
//       'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjh5BjTHKhab6XV0LS-2MzIGItymE-sA33RA&usqp=CAU',
//   };


  
// //   const [contest, setContest] = useState([
// //     {
     
// //     },
// //   ]);
//   const cardData = [
//         { title: '9571619402', content: 'Mobile number', icon: 'Icon 1' },
//         { title: 'Card 2', content: 'Content 2', icon: 'Icon 2' },
//         { title: 'Card 3', content: 'Content 3', icon: 'Icon 3' },
//         { title: 'Card 4', content: 'Content 4', icon: 'Icon 4' },
//         { title: 'Card 5', content: 'Content 5', icon: 'Icon 5' },
//       ];
      
//   const renderCard = () => (
//     <View style={styles.cardContainer}>
//       <View style={styles.card}>
//          <View style={styles.cardHeader}>
//                 <View style={styles.leftContainer}>
//                 <Text style={styles.cardIcon}>{item.icon}</Text>
//                 </View>
//                 <View style={styles.centerContainer}>
//                 <Text style={styles.cardTitle}>{item.title}</Text>
//                 <Text style={styles.cardContent}>{item.content}</Text>
//                 </View>
//                 <View style={styles.rightContainer}>
//                 <TouchableOpacity onPress={() => onEdit(index)}>
//                     <Text style={styles.editButton}>verify</Text>
//                 </TouchableOpacity>
//                 </View>
//             </View>
//       </View>
      
    
         
         
//         </View>
   
 
//   );
  
  
//     return (
//       <View style={styles.container}>
//         <View style={styles.learn}>
//           <Text style={styles.learnText}>Get 1-click winnings!</Text>
//            <View style={styles.rightContent}>
                 
//               </View>
//           <Text style={styles.learnText1}>
//             withdraw winning directly to your bank account
//           </Text>
//         </View>
//          <FlatList data={cardData} renderItem={renderCard}  />
//          {/* <FlatList data={item} renderItem={ renderSessionItem} /> */}
//       </View>
//     );
//   };
//  const renderSessionItem = ({ item }) => (
//           <TouchableOpacity>
//               <View style={styles.sessionItem}>
//             {/* Left Content */}
//             <View style={styles.leftContent}>
              
//             </View>
//              <View>
//               {/* Two Text Elements */}
//               <Text style={styles.price}>{item.price}COUJCXKNIGHT</Text>
//               <Text style={styles.marketTitle}>{item.market}joined</Text>
//               </View>

//             {/* Right Content */}
//             <View style={styles.rightContent}>
//                <TouchableOpacity onPress={() => handleEditOption(item)}>
//                  <Text style={styles.editOption}>Edit</Text>
//                </TouchableOpacity> 
//               {/* Block */}
            
//             </View>
//           </View>
         
//     </TouchableOpacity>
    
//   );

// const styles = StyleSheet.create({
//   container: {
//     flex: 1, // Make the main content take up the entire available space
//     // Add padding or other styling as needed
//     backgroundColor:"white"
//   },
//   learn: {
//     // Add styling for the learn content as needed
//     padding: 5,
   
//     flex: 1,
//     justifyContent: 'center',
//   },
//   learnText: {
//     fontSize: 15,
//     marginBottom: 5,
//      color:"blue",
//      fontWeight:'bold'
//   },
//   cardContainer: {
//         flexDirection: 'column',
//         margin:2,
//       },
//       card: {
//         borderWidth: 1,
//         borderColor: '#ddd',
//         borderRadius: 8,
//         padding: 8,
        
//         backgroundColor: '#fff',
//       },
//       cardHeader: {
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//         alignItems: 'center',
//       },
//       cardTitle: {
//         fontSize: 18,
//         fontWeight: 'bold',
//         marginBottom: 8,
//       },
//       cardImage: {
//         width: 50,
//         height: 50,
//         resizeMode: 'cover',
//       },
//       cardContent: {
//         fontSize: 14,
//       },
//        rightContent: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'flex-end',
//  },
//   cardHeader: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//   },
//   leftContainer: {
//     marginRight: 10,
//   },
//   centerContainer: {
//     flex: 1,
//   },
//   rightContainer: {
//     marginLeft: 10,
//   },
//   cardIcon: {
//     fontSize: 20,
//     fontWeight: 'bold',
//   },
//   cardTitle: {
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   cardContent: {
//     fontSize: 16,
//   },
//   editButton: {
//     color: '#3498db',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
//   learn: {
//     // Add styling for the learn content as needed
//     padding: 5,
   
//     flex: 1,
//     justifyContent: 'center',
//   },
//   learnText: {
//     fontSize: 15,
//     marginBottom: 5,
//      color:"blue",
//      fontWeight:'bold'
//   },
     
// });

// export default KycScreen;


import { useNavigation } from '@react-navigation/native'
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

import NeftyHeader from '../components/NeftyHeader';
// import NewFooter from '../components/NewFooter';
import { MaterialIcons } from '@expo/vector-icons'; // Make sure to import the correct icon library

// NewVerifyEmail



const KycScreen = ({ item, index }) => {
    const navigation = useNavigation();
//   const title = 'INVESTRO';
//   const imageUrl = {
//     uri:
//       'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjh5BjTHKhab6XV0LS-2MzIGItymE-sA33RA&usqp=CAU',
//   };

  // Updated data for 3 cards
  const cardData = [
    {
      id: '1',
      title: '9090909990',
      content: 'Enter the relevant mobile no',
      icon: <AntDesign name="mobile1" size={24} color="black" />, // You can replace it with a relevant icon
      
    },
    {
      id: '2',
      cardIcon:"",
      title: 'Email Account',
      content: 'for relevant product experience',
      icon: <Feather name="mail" size={24} color="black" />, // You can replace it with a relevant icon
    
    },
    {
      id: '3',
      title: 'PAN CARD',
      content: 'for saftey and security of all trans.',
      icon: <FontAwesome5 name="mail-bulk" size={24} color="black" />, // You can replace it with a relevant icon
    
    },
    {
      id: '4',
      title: 'Bank Account',
      content: 'for quick withdraw to your account',
      icon: <FontAwesome name="bank" size={24} color="black" />, // You can replace it with a relevant icon
    
    },
   
  ];

  const onIconTouch=()=>{
    navigation.goBack();


  }


  //   const handleItemPress = (item) => {
  //   // Handle item press
  //   navigation.navigate("NewStockScreen");
  // };

  const handleVerify = (item) => {
    if (item.id === '1') {
      // Navigate to the screen for id '1'
      navigation.navigate('');
    } else if (item.id === '2') {
      // Navigate to the screen for id '2'
      navigation.navigate('VerifyScreen');
    } else if (item.id === '3') {
      // Navigate to the screen for id '3'
      navigation.navigate('');
    } else if (item.id === '4') {
      // Navigate to the screen for id '4'
      navigation.navigate('ScreenForId4');
    }
  };

  const renderCard = ({ item}) => (
    <View style={styles.cardContainer}>
      <View style={styles.card}>
        <View style={styles.cardHeader}>
        <View style={styles.leftContainer}>
                <Text style={styles.cardIcon}>{item.icon}</Text>
                </View>
                <View style={styles.centerContainer}>
                <Text style={styles.cardTitle}>{item.title}</Text>
                <Text style={styles.cardContent}>{item.content}</Text>
                </View>
                <View style={styles.rightContainer}>
                <TouchableOpacity onPress={() => handleVerify(item)}>
                    <Text style={styles.editButton}>verify</Text>
                </TouchableOpacity>
                </View>
        </View>
        
      </View>
      {item.id === '2' && (
        <View style={styles.block}>
        <Feather name="alert-triangle" size={24} color="yellow" />
          <View>
            <Text style={styles.textt}>IMPORTANT</Text>
            <Text style={{ marginLeft: 11, color: 'gray' }}>PAN and Bank name must same</Text>
          </View>
          {/* <TouchableOpacity style={styles.share1}>
            <Text style={styles.code}>UPDATE NOW</Text>
          </TouchableOpacity> */}
        </View>
      )}
    </View>
  );

  return (
    <View style={styles.container}>
      <NeftyHeader leftIcon='arrowleft' onIconPress={onIconTouch} />
      <View style={styles.learn}>
        <Text style={styles.learnText}>Get 1-click winning!</Text>
        <View style={styles.rightContent}>
                <Image
                    source={require('../assets/imgs/refer.png')}
                    style={styles.image}
                />
            </View>
        <Text style={styles.learnText1}>
        withdraw winning  to bank account
        </Text>
      </View>
      {/* FlatList to render the 3 cards */}
      <FlatList data={cardData} renderItem={renderCard} keyExtractor={(item) => item.id} />
      {/* <NewFooter /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // padding: 10,
    marginBottom:5,
  },

  learn: {
    justifyContent: 'center',
    marginLeft:5,
    marginRight:2,
    padding:15,
    backgroundColor:"#3333"
  },
  learnText: {
    fontSize: 15,
    marginBottom:4,
    color:"blue",
    fontWeight:"bold"
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
  rightContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
    
 },
 editButton:{
 color:'blue',
 fontSize: 16,
 fontWeight:"bold"
 },
 image: {
  width: 70, // Adjust the width as needed
  height: 70, // Adjust the height as needed
  borderRadius: 75, // Assuming a circular image, adjust as needed
  // marginRight: 10,
},
    
});

export default  KycScreen;

