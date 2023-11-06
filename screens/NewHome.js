import React,{useState} from 'react';
import {View, StyleSheet, Text, ImageBackground,Modal,TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';
import NewHeader from '../components/NewHeader';
import Carousel from '../components/caraousal';
import ButtonGroup from '../components/ButtonGroup';
import NewCard from '../components/NewCard';
import NewFooter from '../components/NewFooter';
import { argonTheme } from "../constants";
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import Images from "../constants/Images";

const NewHomeScreen = () => {
    const navigation=useNavigation();
    const [isMenuOpen, setMenuOpen] = useState(false);
    const [isWalletOpen, setWalletOpen] = useState(false);

  const toggleWallet = () => {
    setWalletOpen(!isWalletOpen);
  };
  
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

    //header
    const title = 'INVESTRO';
    
    const handleLeftIconPress = () => {
      // Perform left icon action
      console.log('Left icon pressed');
    };
  
    const handleRightIconPress = () => {
      // Perform right icon action
      console.log('Right icon pressed');
    };
    
    
    
    //filter buttons
    const [buttons, setButtons] = useState([
      { name: 'Market' },
      { name: 'Format' },
      { name: 'Duration' },
      
    ]);
    //corusals
    const carouselData1 = [
      { id: '1', text: 'Earn $50 per invite'},
      
    ];
  
    const carouselData2 = [
      { id: '2', text: 'Item 2' },
      
    ];
  
    const carouselData3 = [
      { id: '3', text: 'Item 3' },
      
    ];
    
    //filter click handler
    const handleButtonRename = (oldName, newName) => {
         //handle 
    }

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
          <FontAwesome name="trophy" size={30} color="gray"  />
         <Text style={styles.headerText}>{title}</Text>
           </View>
          <TouchableOpacity 
            // onPress={onRightIconPress}
           >
            <Ionicons name="settings" size={30} color="white" style={styles.right}/>
          </TouchableOpacity>
  
        </View>
        <View style={styles.card}>
            <View style={styles.abc1}>
            <View>
            <Text style={styles.money}>$0</Text>
            <Text>Total Balance</Text>
            </View>
             <TouchableOpacity style={styles.btn} ><Text style={styles.cash} >ADD CASH</Text></TouchableOpacity>
            </View>
            </View>
          <View style={styles.block}>
          <MaterialIcons name="local-offer" size={25} color="black"  />
          <Text style={styles.textt}>My Offers & Coupons</Text>
          </View>
          <View style={styles.block}>
          <MaterialIcons name="card-giftcard" size={24} color="black" />
          <View>
          <Text style={styles.textt}>Invite friends </Text>
          <Text style={{marginLeft: 11}}>Earn $250 discount bonous </Text>
          </View>
          <TouchableOpacity style={styles.share}>
          <Text style={styles.code}>SHARE CODE</Text>
          </TouchableOpacity>
          </View>
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

          <View style={styles.block}>
          <Text style={{fontSize: 20, fontWeight: 'bold'}}>Help</Text>
          </View>
          <View style={styles.block}>
          <Text style={styles.textt}>Fantasy Points System</Text>
          </View>
          <View style={styles.block}>
          <MaterialIcons name="games" size={24} color="black" />
          <Text style={styles.textt}>How To Play</Text></View>
          <View style={styles.block}><MaterialIcons name="help" size={24} color="black" />
          <Text style={styles.textt}>Healpdesk</Text>
          </View>
          <View style={styles.block}>
          <View>
          <Text style={{fontSize: 20, fontWeight: 'bold', marginBottom: 10}}>Legal</Text>
          <Text style={styles.textt}>Tearms & Conditions</Text></View>
          </View>
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
      
          <ScrollView horizontal>
            <Carousel data={carouselData1} />
            <Carousel data={carouselData2} />
            <Carousel data={carouselData3} />
            </ScrollView>
            <Text style={styles.header}>Upcomming Sessions</Text>

           <ButtonGroup buttons={buttons} 
             onButtonPress={handleButtonRename} 
            />
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
    color: 'gray',

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
        backgroundColor: 'blue',

      },
      code:{
        textAlign:'center',
        justifyContent:'center',
      }
      
})

export default NewHomeScreen;
