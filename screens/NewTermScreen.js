// import { StyleSheet, Text, View } from 'react-native'
// import React from 'react'

// const Help = () => {
//   return (
//     <View>
//       <Text>Help</Text>
//     </View>
//   )
// }

// export default Help

// const styles = StyleSheet.create({})



// import { StyleSheet, Text, View } from 'react-native'
// import React from 'react'
// import NeftyHeader from '../components/NeftyHeader';
// const FantasyPointsScreen = () => {
//   return (
//     <View>
//     <NeftyHeader/>
//       <Text>FantansyPoint</Text>
//     </View>
//   )
// }

// export default FantasyPointsScreen

// const styles = StyleSheet.create({})



// import { useNavigation } from '@react-navigation/native';
// import React, { useState } from 'react';
// import { StyleSheet, Text, View, FlatList, TouchableOpacity, Button, ScrollView } from 'react-native';
// import NeftyHeader from '../components/NeftyHeader';
// // NeftyHeader




// const FantasyPointsScreen = () => {
//   const navigation = useNavigation();

//   const [downtrend, setDowntrend] = useState([
//     //  
//   ]);
//   const [selectedTab, setSelectedTab] = useState('uptrend');

//   // Function to handle tab selection
//   const handleTabSelect = (tabName) => {
//     setSelectedTab(tabName);
//   };

//   const renderSessionItem = ({ item }) => (
//     <TouchableOpacity>
//       <View style={styles.sessionItem}>
//         <View style={styles.marketFormatContainer}>
//           <View style={styles.leftContent}>
//             <Text style={styles.marketTitle}>{item.market}</Text>
//             <Text style={styles.price}>{item.price}</Text>
//             <View style={styles.timeContainer}>
//               <Text style={styles.sportsCount}>{item.sportsLeft}</Text>
//               <Text style={styles.sportsCount}>{item.sportsRight}</Text>
//             </View>
//             <Button title="ENTRY $39" onPress={() => handleItemPress(item)} />
//             <View style={styles.bottomInfoContainer}>
//               <Text style={styles.bottomInfoText}>$10,000</Text>
//               <Text style={styles.bottomInfoText}>57%</Text>
//               <Text style={styles.bottomInfoText}>Upto 11</Text>
//             </View>
//           </View>
//         </View>
//       </View>
//     </TouchableOpacity>
//   );

//   const handleItemPress = (item) => {
//     // Handle item press
//     navigation.navigate("NewStockScreen");
//   };
//   const onIconTouch=()=>{
//     navigation.goBack();


//   }

//   const [uptrend, setUptrend] = useState([
//   ]);

//   return (
//     <View >
//          <NeftyHeader leftIcon='arrowleft' onIconPress={onIconTouch} />
//          <View style={styles.title}>
//           <Text style={styles.text}> Induction For Fantansy Point System</Text>
//          </View>

//          <View  style={styles.container}>
//          <FlatList renderItem={renderSessionItem} />
//          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
//         <TouchableOpacity onPress={() => handleTabSelect('uptrend')}>
//           <Text style={[styles.tab, selectedTab === 'uptrend' && styles.selectedTab]}>uptrend</Text>
//         </TouchableOpacity>

//         <TouchableOpacity onPress={() => handleTabSelect('downtrend')}>
//           <Text style={[styles.tab, selectedTab === 'downtrend' && styles.selectedTab]}>downtrend</Text>
//         </TouchableOpacity>

        
//       </ScrollView>
//       {selectedTab === 'uptrend' && (
//         <View style={styles.content}>
//           {/* Completed content */}
//           <Text style={styles.live}>Standard Points</Text>
//           {/* Add your completed sessions content here */}
//         </View>
//       )}

//       {selectedTab === 'downtrend' && (
//         <View style={styles.downtrend}>
//           {/* Completed content */}
//           <Text style={styles.live}>Standard Points</Text>
//           {/* Add your completed sessions content here */}
//         </View>
//       )}
     
//     </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     //flex: 1,
//     // padding: 5,
//     backgroundColor:"white",
//     // alignItems:"center",
//   },
 
//   duration: {
//     fontSize: 15,
//     fontWeight: 'bold',
//     textAlign: 'center',
//     marginBottom: 30,
//     //padding:10,
//     color: '#FF4500',
//   },
//   sessionItem: {
//     backgroundColor: '#FFFFFF',
//     borderRadius: 8,
//     padding: 15,
//     marginBottom: 16,
//     elevation: 4,
//   },
//   marketFormatContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//   },
//   leftContent: {
//     flex: 1,
//   },
//   marketTitle: {
//     fontSize: 18,
//     marginBottom: 5,
//   },
//   price: {
//     fontSize: 25,
//     fontWeight: 'bold',
//   },
//   timeContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//   },
//   sportsCount: {
//     fontSize: 18,
//     padding:5
//   },
//   bottomInfoContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginTop:10,
//     //padding:10
//   },
//   bottomInfoText: {

//     fontSize: 15,
//   },
//   header: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     padding: 10,
//   },
//   title: {
//     fontSize: 25,
//     fontWeight: 'bold',
//     color: 'green',
//   },
//   winningsList: {
//     padding: 10,
//   },
//   topContest: {
//     backgroundColor: 'gold', // Style for the top contests
//   },
//   participationContest: {
//     backgroundColor: 'lightgray', // Style for the participation contests
//   },
//   winningItem: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     // marginBottom: 10,
//   },
//   rank: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     padding:5,
//   },
//   prize: {
//     fontSize: 20,
//     padding:5,

//   },
//   tab: {
//     justifyContent: 'space-between',
//     padding: 20,
//     //paddingRight: 20,
//     //marginLeft:5,
//     marginRight:5,
//     fontSize: 25,
//     borderBottomWidth: 0.5,
//     borderColor: 'gray',
//   },
//   selectedTab: {
//     color: 'blue',
//   },
//   content: {
//     justifyContent: 'center',
//     padding: 20,
//   },

//   title:{
//     alignItems:"center",
//     padding:10,
//     marginBottom:5,
//   },
//   text:{
//     fontsize:15,
//     fontWeight:"bold",
//     color:"black",
//     backgroundColor:"white",
//   }

// });

// export default FantasyPointsScreen;




import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Button, ScrollView } from 'react-native';
// import NewHelpHeader from '../components/NewHelpHeader';
import NewTermHeader from '../components/NewTermHeader';


// NewHelpHeader
// import NeftyHeader from '../components/NeftyHeader';
// hel
// NewFantansyHeader


const NewTermScreen = () => {
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
    {/* //   // <View style={styles.sessionItem}>
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
    //   // </View> */}
    </TouchableOpacity>
  );

  const handleItemPress = (item) => {
    // Handle item press
    navigation.navigate("NewTermScreen");
  };
  const onIconTouch=()=>{
    navigation.goBack();


  }

  const [uptrend, setUptrend] = useState([
  ]);

  return (
    <View >
        <NewTermHeader leftIcon='arrowleft' onIconPress={onIconTouch} />
        
         <View  style={styles.container}>
         <FlatList renderItem={renderSessionItem} />
         <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <TouchableOpacity onPress={() => handleTabSelect('uptrend')}>
          <Text style={[styles.tab, selectedTab === 'uptrend' && styles.selectedTab]}>STANDARD</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => handleTabSelect('downtrend')}>
          <Text style={[styles.tab, selectedTab === 'downtrend' && styles.selectedTab]}>PROMOTION</Text>
        </TouchableOpacity>

        
      </ScrollView>
      {selectedTab === 'uptrend' && (
        <View style={styles.uptrend}>
          {/* Completed content */}
          {/* <Text style={styles.live}>Standard Points1
          </Text> */}
           {/* Completed content */}
           <Text style={styles.live}>TERMS AND CONDITIONS
          </Text>
          <View>
          <Text style={styles.heading}>Investro </Text>
          <Text>PAPASHIDHI Tech Plateform Private Limited formaly </Text>
          <Text> know as PSG Experience privaste Limited </Text>
          <Text> operates the portal in india, which offers</Text>
          <Text>fantansy stock tranding games through the web-</Text>
          <Text> portal  investro and website (s) and mobile </Text>
          <Text>application (s) (collectively reffered to as the "Portal")</Text>
          <Text>PSG Tech Plateform Private Limited reffered to herie  as "Investro" or "we" or "us" "our") </Text>
          </View>
          <Text>.......................................................................... </Text>
           <View>
          <Text style={styles.heading}>2.Definitions and interpretation </Text>
          <Text>. The following terminology applies to these </Text>
          <Text> Terms and Conditons . unless the context </Text>
          <Text> requires otherwise."User" "you" and "your"</Text>
          <Text>refers to, person that uses, accesses</Text>
          <Text> links to or refers to the Portfolio or Investro </Text>
          </View>
          {/* Add your completed sessions content here */}
        </View>
      )}

      {selectedTab === 'downtrend' && (
        <View style={styles.downtrend}>
          {/* Completed content */}
          {/* <Text style={styles.live}>Standard Points2</Text> */}
          <Text style={styles.live}>1. Standard Term and Conditions of Promotion</Text>
          {/* Add your completed sessions content here */}
         <View>
           <Text style={styles.heading1}>Investro </Text>
          <Text>These standards terms and condition of</Text>
          <Text> promotions("Standards Terms")  supplement the</Text>
          <Text>terms of promotion  undertaken on the Investro</Text>
          <Text> website and  which reference the Standard</Text>
          <Text style={styles.end}>Terms (each a"Promotion") :</Text>
          </View>
          <View>
          <Text>Participation  in any Promotion will be subject </Text>
          <Text>to a user  complying  with the Promotion Terms </Text>
          <Text>implementation by investro in respect of such </Text>
          <Text>Promotion ("Promotion Terms") and these </Text>
          <Text>.  Standard Terms .By participation in any Promotion </Text>
          <Text>   the participation further consent to and agrees to adhere  </Text>
          <Text style={styles.end}>with the terms and condition of the investro game and investro Privacy policy </Text>
          </View>
          <View style={styles.point}>
          <Text>. The Promotion are only open to users  in India.</Text>
          <Text>. Participation in the Promotions by proxy is not permitted</Text>
         
          <Text>. Participation in the Promotion is volunatary </Text>
          <Text></Text>
          <Text> </Text>
        
          </View>
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
  text:{
    fontsize:50,
    fontWeight:"bold",
    color:"black",
  },
  live:{
    fontWeight:"bold",
    fontSize:20,
  },
  heading:{
    fontWeight:"bold",
    fontSize:15,
    color:"black"

  },
  heading1:{
    fontWeight:"bold",
    fontSize:15,
    color:"black"
  },
  point:{
    marginLeft:5,
    fontsize:12,
  },
  end:{
    marginLeft:10,
    marginBottom:5
  }
  



  
});

export default NewTermScreen;
