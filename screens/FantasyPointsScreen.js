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




// import { useNavigation } from '@react-navigation/native';
// import React, { useState } from 'react';
// import { StyleSheet, Text, View, FlatList, TouchableOpacity, Button, ScrollView } from 'react-native';
// import NewFantansyHeader from '../components/NewFantansyHeader';
// // import NeftyHeader from '../components/NeftyHeader';
// // NewFantansyHeader


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
//     {/* //   // <View style={styles.sessionItem}>
//     //   //   <View style={styles.marketFormatContainer}>
//     //   //     <View style={styles.leftContent}>
//     //   //       <Text style={styles.marketTitle}>{item.market}</Text>
//     //   //       <Text style={styles.price}>{item.price}</Text>
//     //   //       <View style={styles.timeContainer}>
//     //   //         <Text style={styles.sportsCount}>{item.sportsLeft}</Text>
//     //   //         <Text style={styles.sportsCount}>{item.sportsRight}</Text>
//     //   //       </View>
//     //   //       <Button title="ENTRY $39" onPress={() => handleItemPress(item)} />
//     //   //       <View style={styles.bottomInfoContainer}>
//     //   //         <Text style={styles.bottomInfoText}>$10,000</Text>
//     //   //         <Text style={styles.bottomInfoText}>57%</Text>
//     //   //         <Text style={styles.bottomInfoText}>Upto 11</Text>
//     //   //       </View>
//     //   //     </View>
//     //   //   </View>
//     //   // </View> */}
//     </TouchableOpacity>
//   );

//   const handleItemPress = (item) => {
//     // Handle item press
//     navigation.navigate("FantansyPointsScreens");
//   };
//   const onIconTouch=()=>{
//     navigation.goBack();


//   }

//   const [uptrend, setUptrend] = useState([
//   ]);

//   return (
//     <View >
//         <NewFantansyHeader leftIcon='arrowleft' onIconPress={onIconTouch} />
        
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
//         <View style={styles.uptrend}>
//           {/* Completed content */}
//           <Text style={styles.live}>Standard Points1
//           </Text>
//           {/* Add your completed sessions content here */}
//         </View>
//       )}

//       {selectedTab === 'downtrend' && (
//         <View style={styles.downtrend}>
//           {/* Completed content */}
//           <Text style={styles.live}>Standard Points2</Text>
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
//     marginTop:5,
//     padding: 20,
//     backgroundColor:"white",
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
//     marginBottom: 10,
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
//     marginLeft:25,
//     marginRight:20,
//     marginTop:5,
//     fontSize: 22,
//     borderBottomWidth: 0.5,
//     borderColor: 'gray',
//   },
//   selectedTab: {
//     color: 'blue',
//     // fontSize:12,
//   },
//   content: {
//     justifyContent: 'center',
//     padding: 20,
//   },

//   title:{
//     backgroundColor:"",
  
//     alignItems:"center",
//     padding:5,
//   },
//   text:{
//     fontsize:50,
//     fontWeight:"bold",
//     color:"black",
//   }
  
// });

// export default FantasyPointsScreen;



import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Button, ScrollView } from 'react-native';
import NewFantansyHeader from '../components/NewFantansyHeader';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons'; 
// import NeftyHeader from '../components/NeftyHeader';
// NewFantansyHeader


const FantasyPointsScreen = () => {
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
    navigation.navigate("FantansyPointsScreens");
  };
  const onIconTouch=()=>{
    navigation.goBack();


  }

  const [uptrend, setUptrend] = useState([
  ]);

  return (
    <View >
       <NewFantansyHeader leftIcon='arrowleft' onIconPress={onIconTouch} />
        
      <View  style={styles.container}>
         <FlatList renderItem={renderSessionItem} />
         <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <TouchableOpacity onPress={() => handleTabSelect('uptrend')}>
          <Text style={[styles.tab, selectedTab === 'uptrend' && styles.selectedTab]}>uptrend</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => handleTabSelect('downtrend')}>
          <Text style={[styles.tab, selectedTab === 'downtrend' && styles.selectedTab]}>downtrend</Text>
        </TouchableOpacity>

        
      </ScrollView>
      {selectedTab === 'uptrend' && (
        <View style={styles.uptrend}>
          {/* Completed content */}
          <Text style={styles.live}><AntDesign name="star" size={24} color="yellow" /> Standard Points1 
          
         </Text>
         <Text> ----------------------------------- </Text>
          <View style={styles.text1}>
          <Text>Standard Points </Text> 
          <Text style ={styles.point1}>  (% change in price)* (100)</Text>
          </View>
          <View style={styles.text1}>
          <Text> Stock of the session </Text>
          <Text style ={styles.point1}> +25</Text>
           </View>
          
          <Text>Stock of the Session is the  stock that  shows</Text>
          
          <Text>maximum upward  trend or percentage change </Text>
          <Text>in that contest</Text>

          <Text> ----------------------------------- </Text>
           
           

          <Text style={styles.live}> <MaterialIcons name="local-fire-department" size={24} color="red" /> Bonus Points </Text>
           <View style={styles.text1}>
           <Text> %Change above +0.5 %  </Text>
           <Text style ={styles.point1}>      0    </Text>
           </View>
            <View style={styles.text1}>
           <Text> %Change between +0.5 % to +1.49%</Text>
           <Text style ={styles.point1}>   +25  </Text>
           </View>
          
           
            <View style={styles.text1}>
           <Text> %Change between +1.5 % to +2.49% </Text>  
           <Text style ={styles.point1}>   +50  </Text>
            </View>
            <View style={styles.text1}>
           <Text> %Change below (+2.49%) </Text>  
           <Text style={styles.point1}> +100  </Text>
            </View>
         
          {/* Add your completed sessions content here */}
        </View>
      )}
          {/* downstream */}
      {selectedTab === 'downtrend' && (
        <View style={styles.downtrend}>
          {/* Completed content */}
          <Text style={styles.live}> <AntDesign name="star" size={24} color="yellow" /> Standard Points2</Text>

          <Text> ----------------------------------- </Text>
          <View style={styles.text2}>
          <Text>Standard Points </Text> 
          <Text style ={styles.point2}>  (% change in price)* (100)</Text>
          </View>
          <View style={styles.text2}>
          <Text> Stock of the session </Text>
          <Text style ={styles.point2}> +25</Text>
           </View>
        
          <Text style={{fontSize:7}}>Stock of the Session is the  stock that  shows</Text>
          
          <Text>maximum upward  trend or percentage change </Text>
          <Text>in that contest</Text>
          
          <Text> ----------------------------------- </Text>
           
           

          <Text style={styles.live}> <MaterialIcons name="local-fire-department" size={24} color="red" /> Bonus Points </Text>
           <View style={styles.text2}>
           <Text> %Change above +0.5 %  </Text>
           <Text style ={styles.point2}>      0    </Text>
           </View>
            <View style={styles.text2}>
           <Text> %Change between +0.5 % to +1.49%</Text>
           <Text style ={styles.point2}>   +25  </Text>
           </View>
          
           
            <View style={styles.text2}>
           <Text> %Change between +1.5 % to +2.49% </Text>  
           <Text style ={styles.point2}>   +50  </Text>
            </View>
            <View style={styles.text2}>
           <Text> %Change below (+2.49%) </Text>  
           <Text style={styles.point2}> +100  </Text>
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
 

  // },
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
  
  uptrend:{
    backgroundColor:"white",
     },
    live:{
   fontWeight :'bold',

    },
  text1:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom:2,
    fontsize:7,
  },
  downtrend:{
  backgroundColor:"white",
  },
  point1:{
    backgroundColor:"green",
    fontWeight:"bold",
    textAlign: 'right'
  },
  text2:{
  //  flexDirection:'row',
  //  fontSize:5,
  //  color:'red',
  //  marginBottom:2, 
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom:2,
    // backgroundColor:"white",

  
  },
   point2:{
    backgroundColor:"pink",
    fontWeight:"bold",
     textAlign: 'right'
  }
 
});

export default FantasyPointsScreen;
