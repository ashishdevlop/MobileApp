import React,{useState} from 'react';
import {View, StyleSheet, Text,TextInput, ImageBackground,Modal,TouchableOpacity,Switch,Button,} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import NewHeader from '../components/NewHeader';
import Carousel from '../components/caraousal';
import ButtonGroup from '../components/ButtonGroup';
import NewCard from '../components/NewCard';
import NewFooter from '../components/NewFooter';
// FantasyPointsScreen
// import { argonTheme } from "../constants";
import { argonTheme } from "../constants";
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Images from "../constants/Images";
import FantasyPointsScreen from './FantasyPointsScreen';
import NewHelpScreen from './NewHelpScreen';
import CouponScreen from './NewCouponScreen';
import NewTermScreen from './NewTermScreen';
import NewTrendScreen from './NewTrendScreen';
import NewEntryProfile from './NewEntryProfile';
import NewAddCash from './NewAddCash';
import NewShare from './NewShare';






// NewTermScreen

// CouponScreen
// import Share from 'react-native-share';


const NewHomeScreen = ({ isVisible }) => {

    const navigation=useNavigation();
    const [isMenuOpen, setMenuOpen] = useState(false);
    const [isWalletOpen, setWalletOpen] = useState(false);
    const [balance, setBalance] = useState(0);
    const [inviteCode, setInviteCode] = useState('');
    // const [isAddCashModalVisible, setAddCashModalVisible] = useState(false);
    const [currentButton, setCurrentButton] = useState(null);
    const [modal1Visible, setModal1Visible] = useState(false);
    const [modal2Visible, setModal2Visible] = useState(false);
    const [modal3Visible, setModal3Visible] = useState(false);


    const toggleModal1 = () => setModal1Visible(!modal1Visible);
    const toggleModal2 = () => setModal2Visible(!modal2Visible);
    const toggleModal3 = () => setModal3Visible(!modal3Visible);
    

  const toggleWallet = () => {
    setWalletOpen(!isWalletOpen);
  };
  
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  
  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };


    //header
    const title = 'INVESTRO';
    
    const handleLeftIconPress = () => {
      // Perform left icon action
      console.log('Left icon pressed');
    };
  
    const handleRightIconPress = () => {
      navigation.navigate(NewEntryProfile)
      console.log('Right icon pressed');
    };

    // add amount 
    const handleAddBalance = () => {
      // const amountToAdd = 10; 
      // const newInviteCode = generateRandomCode()
      // // You can replace this with any amount you want to add
      // addBalance(amountToAdd);
      // setInviteCode(newInviteCode)
      navigation.navigate(NewAddCash)
      console.log('Add cash icon pressed');
      // shareInviteCode(newInviteCode);
    };

    // const addBalance = (amount) => {
    //   setBalance((prevBalance) => prevBalance + amount);
    // };

    // const shareInviteCode = async (code) => {
    //   try {
    //     const shareOptions = {
    //       title: 'Share Invite Code',
    //       message: `Use this invite code: ${code}`,
    //     };
  
    //     await Share.open(shareOptions);
    //   } catch (error) {
    //     console.error('Error sharing invite code:', error.message);
    //   }
    // };
  

    //invite
   
  // const generateRandomCode = () => {
  //   // This function generates a random string as the invite code
  //   const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  //   let result = '';
  //   const codeLength = 6; // You can adjust the length of the code

  //   for (let i = 0; i < codeLength; i++) {
  //     const randomIndex = Math.floor(Math.random() * characters.length);
  //     result += characters.charAt(randomIndex);
  //   }

  //   return result;
  // };

      


    //implement the fantansy screen
    const handleFantasyPointsPress = () => {
      // Implement the logic to navigate to the desired screen
      // For example, you can use navigation.navigate to navigate to another screen
      navigation.navigate(FantasyPointsScreen); // Replace 'FantasyPointsScreen' with the actual screen name
    };
    //implement the fantansy screen
    const handleCouponPress = () => {
      // Implement the logic to navigate to the desired screen
      // For example, you can use navigation.navigate to navigate to another screen
      navigation.navigate(CouponScreen); // Replace 'FantasyPointsScreen' with the actual screen name
    };
    
    const handleHelpPress = () => {
      // Implement the logic to navigate to the desired screen
      // For example, you can use navigation.navigate to navigate to another screen
      navigation.navigate( NewHelpScreen); // Replace 'FantasyPointsScreen' with the actual screen name

    };
   

    const handleTermPress = () => {
      // Implement the logic to navigate to the desired screen
      // For example, you can use navigation.navigate to navigate to another screen
      navigation.navigate( NewTermScreen); // Replace 'FantasyPointsScreen' with the actual screen name

    };
   
    const handleTrendPress = () => {
      // Implement the logic to navigate to the desired screen
      // For example, you can use navigation.navigate to navigate to another screen
      navigation.navigate( NewTrendScreen); // Replace 'FantasyPointsScreen' with the actual screen name

    };
  
    const handleSharePress = () => {
      // Implement the logic to navigate to the desired screen
      // For example, you can use navigation.navigate to navigate to another screen
      navigation.navigate( NewShare); // Replace 'FantasyPointsScreen' with the actual screen name

    };
  

   
   
   
    
    
    
    
    
    //filter buttons
    const buttons = [
      { name: 'Market', style: { textcolor: 'black', fontStyle: 'italic' }, onPress: toggleModal1 },
      { name: 'Format', style: { textcolor: 'black', fontStyle: 'italic' }, onPress: toggleModal2 },
      { name: 'Duration', style: { textcolor: 'black', fontStyle: 'italic' }, onPress: toggleModal3 },
    ];


    
     

         
  
    //corusals
    const carouselData1 = [
      { id: '1', text: 'Earn $50 per invite'},
      { id: '3', text: 'Item 3' },
      { id: '2', text: 'Item 2' },
      
    ];
  
    // const carouselData2 = [
    //   { id: '2', text: 'Item 2' },
      
    // ];
  
    // const carouselData3 = [
    //   { id: '3', text: 'Item 3' },
      
    // ];
    
    //filter click handler


    // const applyFilter = () => {
    //   // Implement your filtering logic based on the current button
    //   // You can access the current button using currentButton
    //   // For example:
    //   const filteredData = 
    //   console.log('Filtered Data:', filteredData);
    //   setFilterModalVisible(false);
    // };
    const handleButtonRename = (oldName, newName) => {
         //handle 
       
        
        
    }

    // const [checkBoxStates, setCheckBoxStates] = useState({
    //   checkbox1: false,
    //   checkbox2: false,
    //   checkbox3: false,
    //   checkbox4: false,
    //   checkbox5: false,
    // });
  
    // const handleCheckboxChange = (checkboxName) => {
    //   setCheckBoxStates((prevState) => ({
    //     ...prevState,
    //     [checkboxName]: !prevState[checkboxName],
    //   }));
    // };
  
    // const handleClearAll = () => {
    //   setCheckBoxStates({
    //     checkbox1: false,
    //     checkbox2: false,
    //     checkbox3: false,
    //     checkbox4: false,
    //     checkbox5: false,
    //   });
    // };
  

    return (
        <View style={{flex:1}}>
          <ScrollView>
            <NewHeader title={title} 
              showImage={true} 
              leftIcon="menu"
              rightIcon="wallet"
              onLeftIconPress={toggleMenu}
              onRightIconPress={toggleWallet}
            />

          <Modal transparent={true} visible={isMenuOpen}>
              <View style={styles.MenuContainer}>
              <View style={styles.header1}>
              <TouchableOpacity 
                  onPress={toggleMenu}
                  >
                <AntDesign name="arrowleft" size={30} color="white" />
              </TouchableOpacity>
            <View style={styles.mainHeader}>
            <FontAwesome name="trophy" size={30} color="white"  />
          <Text style={styles.headerText}>{title}</Text>
            </View>
            <TouchableOpacity onPress={ handleRightIconPress}>
              <Ionicons name="settings" size={30} color="white" style={styles.right}/>
            </TouchableOpacity>
    
          </View>
            <TouchableOpacity style={styles.blockprofile} onPress={handleTrendPress }>
                <>
                  <Text style={styles.textt}>profile</Text>
                </>
                <View style={{ flex: 1, alignItems: 'flex-end' }}>
                <TouchableOpacity >
                <AntDesign name="right" size={24} color="white" />
                </TouchableOpacity>
                 </View>
             </TouchableOpacity>
            <View style={styles.card}>
                <View style={styles.abc1}>
                <View>
                <Text style={styles.money}>${balance}</Text>
                {/* <Text>Your Balance: </Text> */}
                {inviteCode && <Text>Invite Code: {inviteCode}</Text>}
                {/* <Text>Total Balance</Text> */}
                </View>
                <TouchableOpacity style={styles.btn} onPress={handleAddBalance} ><Text style={styles.cash} >ADD CASH</Text></TouchableOpacity>
                </View>
                </View>
              <TouchableOpacity style={styles.block} onPress={handleCouponPress}>
              <MaterialIcons name="local-offer" size={25} color="black"  />
              <Text style={styles.textt}>My Offers & Coupons</Text>
              </TouchableOpacity>
              <View style={styles.block}>
              <MaterialIcons name="card-giftcard" size={24} color="black" />
              <View>
              <Text style={styles.textt}>Invite friends </Text>
              <Text style={{marginLeft: 11}}>Earn $250 discount bonous </Text>
              </View>
              <TouchableOpacity style={styles.share} onPress={ handleSharePress}>
              <Text style={styles.code}>SHARE CODE</Text>
              </TouchableOpacity>
              </View>
              
              {/* functionality for implemented the invite code  */}
              {/* <TextInput
              style={styles.input}
              placeholder="Enter Invite Code"
              value={inviteCode}
              onChangeText={(text) => setInviteCode(text)}
              />
              <TouchableOpacity style={styles.btn} onPress={handleInvite}>
              <Text style={styles.cash}>Apply</Text>
              </TouchableOpacity> */}
              <View style={styles.block} backgroundColor='gray'>
              <MaterialIcons name="system-update-tv" size={24} color="black" />
              <View>
              <Text style={styles.textt}>Update Available</Text>
              <Text style={{marginLeft:11, color: 'gray'}}>Update to 2.15.0</Text>
              </View>
              <TouchableOpacity style={styles.share1}>
              <Text style={styles.code}>UPDATE NOW</Text>
              </TouchableOpacity>
              </View>
                {/* 
              <View style={styles.block}>
              <Text style={{fontSize: 20, fontWeight: 'bold'}}>Help</Text>
              </View> */}
              <TouchableOpacity style={styles.block} onPress={handleFantasyPointsPress}>
              <MaterialCommunityIcons name="hand-coin" size={20} color="black" />
              <Text style={styles.textt}>
              Fantasy Points System</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.block} onPress={handleHelpPress}>
              <MaterialIcons name="games" size={24} color="black" />
              <Text style={styles.textt}>How To Play</Text></TouchableOpacity>
              {/* <View style={styles.block}><MaterialIcons name="help" size={24} color="black" />
              <Text style={styles.textt}>Helpdesk</Text>
              </View> */}
              <TouchableOpacity style={styles.block} onPress={handleTermPress}>
              <View>
              <Text style={{fontSize: 20, fontWeight: 'bold', marginBottom: 10}}>Legal</Text>
              <Text style={styles.textt}>Terms & Conditions</Text></View>
              </TouchableOpacity>
              <View style={styles.block}>
              <MaterialIcons name="logout" size={24} color="red" />
              <TouchableOpacity>
              <Text style={styles.textt}>Logout</Text>
              </TouchableOpacity>
              </View>
            </View>
         
        </Modal>
          {/* wallet handler block */}
        <Modal transparent={true} visible={isWalletOpen}>
          <View style={styles.walletContainer}>
              <View style={styles.wallet}>
                <TouchableOpacity onPress={toggleWallet}>
                <Entypo name="cross" size={30} color="black" />
                </TouchableOpacity>
                <Text style={styles.text}>A/C Summary</Text>
                </View>
              <View style={styles.abc}>
              <View>
              <Text style={styles.money}>$0</Text>
              <Text >A/C Balance</Text>
              </View>
              <TouchableOpacity style={styles.btn} >
              <Text style={styles.cash} >ADD CASH</Text>
              </TouchableOpacity>
              </View>
              </View>
            </Modal>

            <Modal
        animationType="slide"
        transparent={true}
        visible={modal1Visible}
        
        onRequestClose={() => {
          setModal1Visible(false);
        }}
      >
       
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <View style={{ backgroundColor: 'white', padding: 80, height: '75%',  width: '100%',borderWidth:2, borderRadius:10, }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text>INDIA</Text>
            {/* <CheckBox
              value={checkBoxStates.checkbox1}
              onValueChange={() => handleCheckboxChange('checkbox1')}
            /> */}
          </View>
          
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text>NATIONAL STOCK EXCHANGE (NSE)</Text>
            {/* <CheckBox
              value={checkBoxStates.checkbox2}
              onVa lueChange={() => handleCheckboxChange('checkbox2')}
            /> */}
          </View>

          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text>UNITED STATE</Text>
            {/* <CheckBox
              value={checkBoxStates.checkbox3}
              onValueChange={() => handleCheckboxChange('checkbox3')}
            /> */}
          </View>

          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text>New York State Exchange(NYSE)</Text>
            {/* <CheckBox
              value={checkBoxStates.checkbox4}
              onValueChange={() => handleCheckboxChange('checkbox4')}
            /> */}
          </View>

          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text>Checkbox 5</Text>
            {/* <CheckBox
              value={checkBoxStates.checkbox5}
              onValueChange={() => handleCheckboxChange('checkbox5')}
            /> */}
          </View>
          {/* <Button title="Clear All" onPress={handleClearAll} /> */}
            <Button title="Close Modal" onPress={toggleModal1 } />
          </View>
        </View>
      </Modal>

            <Modal
        animationType="slide"
        transparent={true}
        visible={modal2Visible}
        
        onRequestClose={() => {
          setModal2Visible(false);
        }}
      >
       
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <View style={{ backgroundColor: 'white', padding: 80, height: '75%',  width: '100%',borderWidth:2, borderRadius:10, }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text>UP</Text>
            {/* <CheckBox
              value={checkBoxStates.checkbox1}
              onValueChange={() => handleCheckboxChange('checkbox1')}
            /> */}
          </View>
          
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text>Down</Text>
            {/* <CheckBox
              value={checkBoxStates.checkbox2}
              onVa lueChange={() => handleCheckboxChange('checkbox2')}
            /> */}
          </View>

          {/* <Button title="Clear All" onPress={handleClearAll} /> */}
            <Button title="Close Modal" onPress={toggleModal2 } />
          </View>
        </View>
      </Modal>

            <Modal
        animationType="slide"
        transparent={true}
        visible={modal3Visible}
        
        onRequestClose={() => {
          setModal3Visible(false);
        }}
      >
       
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <View style={{ backgroundColor: 'white', padding: 80, height: '75%',  width: '100%', borderWidth:2, borderRadius:10, }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text>INDIA</Text>
            {/* <CheckBox
              value={checkBoxStates.checkbox1}
              onValueChange={() => handleCheckboxChange('checkbox1')}
            /> */}
          </View>
          
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text>NATIONAL STOCK EXCHANGE (NSE)</Text>
            {/* <CheckBox
              value={checkBoxStates.checkbox2}
              onVa lueChange={() => handleCheckboxChange('checkbox2')}
            /> */}
          </View>

          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text>UNITED STATE</Text>
            {/* <CheckBox
              value={checkBoxStates.checkbox3}
              onValueChange={() => handleCheckboxChange('checkbox3')}
            /> */}
          </View>

          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text>New York State Exchange(NYSE)</Text>
            {/* <CheckBox
              value={checkBoxStates.checkbox4}
              onValueChange={() => handleCheckboxChange('checkbox4')}
            /> */}
          </View>

          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text>Checkbox 5</Text>
            {/* <CheckBox
              value={checkBoxStates.checkbox5}
              onValueChange={() => handleCheckboxChange('checkbox5')}
            /> */}
          </View>
          {/* <Button title="Clear All" onPress={handleClearAll} /> */}
            <Button title="Close Modal" onPress={toggleModal3} />
          </View>
        </View>
      </Modal>
        
            {/* <ScrollView horizontal>
              <Carousel data={carouselData1} />
              <Carousel data={carouselData2} />
              <Carousel data={carouselData3} />
            </ScrollView> */}
            {/* <Carousel/> */}
            <ScrollView >
              <Carousel data={carouselData1} />
              {/* <Carousel data={carouselData2} />
              <Carousel data={carouselData3} /> */}
            </ScrollView> 
              <Text style={styles.header}>Upcomming Sessions</Text>
{/* 
            <ButtonGroup buttons={buttons} 
              onButtonPress={handleButtonRename} 
              />  */}

              {/* /* <View style={styles.buttonGroup}>
              <Button
          title="Button 1"
          onPress={toggleModal}
          color=""
          style={styles.button}
          titleStyle={styles.buttonTitle}
        />
        <Button
          title="Button 2"
          onPress={toggleModal}
          color=""
          style={[styles.button, styles.italicButton]}
          titleStyle={styles.buttonTitle}
        />
        <Button
          title="Button 3"
          onPress={toggleModal}
          color=""
          style={styles.button}
          titleStyle={styles.buttonTitle}
        />

                  
              </View> */} 
              <View style={styles.buttonGroup}>
        {buttons.map((button, index) => (
          <Button
            key={index}
            title={button.name}
            onPress={button.onPress}
            color="grey"
            style={[styles.button, button.style]}
            textStyle={{ color: argonTheme.COLORS.BLACK }}
          />
        ))}
      </View>
              

             
              <NewCard  /> 
            </ScrollView>
            <NewFooter />
          </View>
        
    );
}

const styles = StyleSheet.create({
    
      header: {
        fontSize: 25,
        fontWeight: 'bold',
        marginLeft: 75,
        alignItems:'center',
        justifyContent:'center',
        
      },
      walletContainer:{
        padding: 8,
        marginTop: '135%',
        height: '40%',
        width: '100%',
        backgroundColor: 'white',
        borderWidth:2,
        borderRadius:10,
      },
      text:{
        fontSize:20,
        marginRight: 120,
        textAlign: 'center',
      },
      wallet:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomWidth: 0.5,
      },
      money:{
        fontSize:30,
      },
      btn:{
        marginTop:10,
        marginRight: 10,
        backgroundColor: 'blue',
        paddingTop:7,
        height:35,
        width:100,
        borderRadius:10,
      },
      cash:{
        color:'white',
        fontWeight:'bold',
        
        textAlign:'center',
        justifyContent:'center',
      },
      abc:{
        flexDirection:'row',
        marginTop: 40,
        justifyContent:'space-between',

        marginLeft:10,
      },
      MenuContainer:{
        height: '100%',
        width: '100%',
        backgroundColor: 'white',
        borderWidth:2,
        borderRadius:10,
      },
      wallet:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomWidth: 0.5,
      },
      header1: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: argonTheme.COLORS.PRIMARY,
        padding: 20,
      },
      left:{
        alignItems:'flex-start',
       
       height:35,
       width:35,
      },
      right:{
        alignItems: 'flex-end',
    
      },
      mainHeader:{
        alignItems:'center',
    textAlign:'center',
    flexDirection:'row',
    marginLeft:'auto',
    marginRight:'auto',
    
      },
      headerText: {
      color: 'white',

        fontSize: 25,
        fontWeight: "bold",
        marginLeft:5,
      },
      card:{
        margin:20,
        padding:10,
        borderRadius:8,
        borderWidth:1,
        borderColor: 'blue'
      },
      abc1:{
        flexDirection:'row',
        justifyContent:'space-between',

      },
      block:{
        borderTopWidth:0.5,
        padding:20,
        flexDirection: 'row',
      },
      textt:{
        fontWeight:'bold',
        fontSize: 15,
        marginLeft: 10,
      },
      share:{
        borderWidth:1,
        borderRadius: 5,
        marginRight:5,
        marginLeft:"10%",
        padding:10,
        borderColor: 'blue',

      },
      share1:{
        borderWidth:1,
        borderRadius: 5,
        marginRight:5,
       marginLeft:"25%",
        padding:10,
        backgroundColor: 'white',

      },
      code:{
        textAlign:'center',
        justifyContent:'center',
      },

      input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginVertical: 10,
        paddingHorizontal: 10,
        borderRadius: 5,
      }, 
      blockprofile: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10,
        backgroundColor:argonTheme.COLORS.PRIMARY,
        // Add other styles as needed
      }, 
      buttonGroup: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 20,
        color:"black",
    
      },
      button: {
        marginRight: 20, // Add margin between buttons
      },
      modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 8,
        marginTop: '135%',
        height: '40%',
        width: '100%',
        backgroundColor: 'white',
        borderWidth:2,
        borderRadius:10,
      },
      modalContent: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        alignItems: 'center',
      },
      modalText: {
        fontSize: 16,
        marginBottom: 10,
      },
      button: {
        marginRight: 10,
      },
      italicButton: {
        fontStyle: 'italic',
      },
      buttonTitle: {
        color: 'black', // Set the button title color to black
      },
    
   
      
})

export default NewHomeScreen;
