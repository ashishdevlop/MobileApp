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
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Button, ScrollView ,Image} from 'react-native';
import NewHelpHeader from '../components/NewHelpHeader';
// NewHelpHeader
// import NeftyHeader from '../components/NeftyHeader';
// hel
// NewFantansyHeader


const NewHelpScreen = () => {
  const navigation = useNavigation();
  const [isContentVisible, setIsContentVisible] = useState(false);

  const toggleContentVisibility = () => {
    setIsContentVisible(!isContentVisible);
  };

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
    navigation.navigate("NewHelpScreen");
  };
  const onIconTouch=()=>{
    navigation.goBack();


  }

  const [uptrend, setUptrend] = useState([
  ]);

  return (
    <View >
        <NewHelpHeader leftIcon='arrowleft' onIconPress={onIconTouch} />
        
         <View  style={styles.container}>
         <FlatList renderItem={renderSessionItem} />
         <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <TouchableOpacity onPress={() => handleTabSelect('uptrend')}>
          <Text style={[styles.tab, selectedTab === 'uptrend' && styles.selectedTab]}>Step1</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => handleTabSelect('downtrend')}>
          <Text style={[styles.tab, selectedTab === 'downtrend' && styles.selectedTab]}>Step2</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleTabSelect('uptrend1')}>
          <Text style={[styles.tab, selectedTab === 'uptrend1' && styles.selectedTab]}>Step3</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => handleTabSelect('downtrend2')}>
          <Text style={[styles.tab, selectedTab === 'downtrend2' && styles.selectedTab]}>Step4</Text>
        </TouchableOpacity>

        
      </ScrollView>
      {selectedTab === 'uptrend' && (
        <View style={styles.uptrend}>
          {/* Completed content */}
         
          <View style={styles.container}>
          <TouchableOpacity onPress={toggleContentVisibility}>
            <Text style={styles.live}>Creating Your Basket
            </Text>
            </TouchableOpacity>
            {isContentVisible && (
              <View>
                <Text>INVESTRO</Text>
                <Text>is a game of skill where you create a basket of real stocks</Text>
                <Text>exchange and New York stock exchange for an upcoming</Text>
                <Text style={styles.end}>session and compete with other users for big prizes</Text>
              </View>
              )}
                <View style={styles.content}>
          
                  <View style={styles.blocktitle}>
                    <Text style={styles.titleText}>(1){'\n'}create {'\n'}session </Text>
                    <Text style={styles.titleText}>(2){'\n'}create{'\n'}Bucket </Text>
                    <Text style={styles.titleText}>(3){'\n'}Join {'\n'}Contest</Text>
                    <Text style={styles.titleText}>(4){'\n'}Win{'\n'} prize</Text>
                  </View>
                </View>
         
          <Text> Select Session, Create Your  Basket , Join Contest & </Text> 
          <Text> Win prizes </Text>
          <TouchableOpacity onPress={toggleContentVisibility}>
          <Text style={styles.live}>1.Select  A Session
          </Text>
          </TouchableOpacity>
          
          <View>
            <Text>on Investro you  can participate in  two typesof session {'\n'} "uptrend" & "downtrend"</Text>
          </View>
          <View>
          {isContentVisible && (

          <Image
          source={require('../assets/imgs/images.png')}
          style={styles.screenshot}
          resizeMode="contain"
        />
        )}
        </View>
        
          {/* Add your completed sessions content here */}
        </View>
      
        </View>
      )}
      {/* step2 */}
     
         {/* step2 */}
      {selectedTab === 'downtrend' && (
        <View style={styles.downtrend}>
          {/* Completed content */}
          <TouchableOpacity onPress={toggleContentVisibility}>
          <Text style={styles.live}>2. Create Your Basket</Text>
          </TouchableOpacity>
          {/* Add your completed sessions content here */}
          <Text> Every  basket  you create  on Investro must have 6 basket</Text>
          <View>
          {isContentVisible && (

            <Image
            source={require('../assets/imgs/images2.png')}
            style={styles.screenshot}
            resizeMode="contain"
            />
            )}
          </View>
          <Text style={styles.live}>Filtering the stocks via  Scanners</Text>
          <Text> Screen or filter stocks  based on the  set  of simple patterns</Text>
          <Text style={styles.live}>Movement</Text>
          <Text style={styles.last}> Screens by price changes on the daily market</Text>
          <View style={styles.sign}>
          <Text > 1. Volatile : Stocks  fluctuating in price since market opening</Text>
          <Text > 2. Mover:  Today's top gainers or loser by price</Text>
          <Text > 3. Trade Value : Most bought or sold by share value,i.e.  </Text> 
          <Text >    volumn* average price. where volumn where volumn  is the total number of stock  {'\n'}  
           tradeed and average price is the price that a buyer has paid for one share </Text>
          </View>
        </View>
      )}
      {/* step3 */}
      {selectedTab === 'uptrend1' && (
        <View style={styles.downtrend}>
        <TouchableOpacity onPress={toggleContentVisibility}>
        <Text style={styles.live}>3. Last lession</Text>
        </TouchableOpacity>
          <Text> Screen by 3 Basket  created previously  like</Text>
          <Text>Basket 1, Basket 2 , Basket 3 , etc</Text>


           <Text style={styles.live}>Superstar and Star point</Text>
           <Text>Once you have selected your 6 stocks ,you will have to assign a Super star Stock and Star Stock for your basket</Text>
           
           <View>
          {isContentVisible && (

            <Image
            source={require('../assets/imgs/image3.png')}
            style={styles.screenshot}
            resizeMode="contain"
            />
            )}
          </View>
          <Text> The  Superstar Stock will give you  2x points  scored by them</Text>
          <Text>Press the continue button that is present below the screen</Text>
        </View>
      )}
      {/* step4 */}
      {selectedTab === 'downtrend2' && (
        <View style={styles.downtrend}>
        <TouchableOpacity onPress={toggleContentVisibility}>
        <Text style={styles.live}>3.Payment gateways </Text>
        </TouchableOpacity>
          <Text> the Screen will provide a visualisation of payment gateway </Text>
          <Text>Enter the amount  and press ok </Text>


           <Text style={styles.live}>  Press Continue  button</Text>
           <Text> select he  payment gateway accoording to the user choice </Text>
           
           <View>
          {isContentVisible && (

            <Image
            source={require('../assets/imgs/image4.png')}
            style={styles.screenshot}
            resizeMode="contain"
            />
            )}
          </View>
          <Text>  When amout is been  credit  through the payment gateway blue mark tick is shown </Text>

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
 
  title:{
    backgroundColor:"",
  
    alignItems:"center",
    padding:5,
  },
  text:{
    fontsize:50,
    fontWeight:"bold",
    color:"black",
  },
  live:{
    fontWeight:"bold",
    fontSize:15,
  },
  end:{
  marginBottom:5,
  }, 
  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#F0F0F0', // Adjust background color as needed
    borderRadius: 10,
    margin: 10,
  },

  blocktitle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
 
  titleText: {
    textAlign: 'center',
    fontSize: 16,
    marginHorizontal: 10, // Add margin for spacing between title texts
  },
  screenshot: {
    width: '100%',
    height: 200,
    marginTop: 10,
    alignItems:'center',
    
  },
  last:{
    marginBottom:7,
  },
  sign:{
    marginLeft:5,
    marginRight:5,
  }
});

export default NewHelpScreen;
