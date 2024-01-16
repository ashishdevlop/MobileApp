// import { StyleSheet, Text, View } from 'react-native'
// import React from 'react'
// import { useNavigation } from '@react-navigation/native';

// const NewAddCash = () => {
//     const navigation=useNavigation();
//   return (
//     <View>
//       <Text>NewAddCash</Text>
//     </View>
//   )
// }

// export default NewAddCash

// const styles = StyleSheet.create({})


import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image,Alert } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import NeftyHeader from "../components/NeftyHeader";
import NewHead from "../components/Head";
import { AntDesign } from '@expo/vector-icons';


const NewAddCash = () => {
  const navigation = useNavigation();
  const title="Low A/C Balance";
  const [amount, setAmount] = useState("");
  const [buttonText, setButtonText] = useState("CONFIRM");

  const [isContentVisible, setIsContentVisible] = useState(false);

  const toggleContentVisibility = () => {
    setIsContentVisible(!isContentVisible);
  };

  const handleAddAmount = () => {
    console.log(`Adding €${amount}`);
    setButtonText(`ADD €${amount}`);
    navigation.navigate("PaymentOptionsScreen");
  };
  const onIconTouch=()=>{
    navigation.goBack();

  }
  

  const handleButtonPress = (amount) => {
    Alert.alert(
      "Permission Request",
      `Do you want to add ₹${amount} to your balance?`,
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "OK",
          onPress: () => {
            // Handle the logic for adding balance here
            // For now, just show a console log
            console.log(`Adding ₹${amount} to balance`);
          },
        },
      ]
    );
  };

  return (
    <View style={styles.container}>
   
    <NeftyHeader  title={title}  leftIcon="arrowleft" onIconPress={onIconTouch} />
      
      <View style={styles.stockItemRow}>
      <Text style={styles.stockSymbol}>  <Ionicons name="wallet-outline" size={20} color="black" /> Useable A/C Balance</Text>
        <View style={styles.stockInfo}>
          <View style={styles.stockItemColumn1}>
       
        
          </View>
        </View>
        <View style={styles.stockDetails}>
        
        <Text style={styles.stockSymbol}>${amount}</Text>

        </View>
      </View>
      {/* <View style={styles.stockItemRow2}>
        
   
      </View> */}
      <View style={styles.body}>
        <Text style={styles.availableBalance}>Enter Amount</Text>
        <TextInput
          style={styles.input}
          placeholder="$39"
          keyboardType="numeric"
          value={amount}
          onChangeText={(text) => setAmount(text)}
        />
       
       <View style={styles.Rupeescontainer}>
      <View style={styles.itemsContainer}>
        <TouchableOpacity onPress={() => handleButtonPress(500)}>
          <Text style={styles.lives}>  ₹500</Text>
        </TouchableOpacity>
     
      </View>

      <View style={styles.itemsContainer}>
        <TouchableOpacity onPress={() => handleButtonPress(1000)}>
          <Text style={styles.lives}>₹1000</Text>
        </TouchableOpacity>
       
      </View>
    </View>
        
      
        
        
     <View style={styles.Descontainer}>
     <View style={styles.DesitemContainer}>
         <TouchableOpacity onPress={toggleContentVisibility}>
            <Text style={styles.live}> Add to current balance      ₹100  <AntDesign name="down" size={24} color="black" />              
            </Text>
            </TouchableOpacity>
            {isContentVisible && (
              <View style={styles.content}>
                
              <View style={styles.text1}>
           <Text>Deposite Amount (excl.Govt.Tax)  </Text>
           <Text style ={styles.point1}>      ₹78.12   </Text>
           </View>
            <View style={styles.text1}>
           <Text> Govt.Tax (28 % GST)</Text>
           <Text style ={styles.point2}>     ₹21.08  </Text>
           </View>
          
           
            <View style={styles.text1}>
           <Text> Deposite Amount (excl. Govt. Tax) </Text>  
           <Text style ={styles.point2}>    ₹78.12 </Text>
            </View>
            <View style={styles.text1}>
           <Text> % Discount Point Worth </Text>  
           <Text style={styles.point1}>  ₹27.88  </Text>
            </View>
            <View style={styles.text1}>
           <Text>Add Current Balance A+B</Text>  
           <Text style={styles.point1}>  ₹100.00 </Text>
            </View>
          </View>
              )}




         </View>
        

         </View>

         <TouchableOpacity style={styles.buttonContainer} onPress={handleAddAmount}>
          <Text style={styles.button}>{buttonText}</Text>
        </TouchableOpacity>

      </View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#ffffff",
  },
  header: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "blue",
    padding: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: 'white',
  },
  stockItemRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 28,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    backgroundColor:"white"
  },
  stockItemRow2: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  stockInfo: {
    flexDirection: "column",
  },
  stockItemColumn1: {
    flexDirection: "column",
  },
  entryText: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 2
  },
  stockSymbol: {
    fontSize: 18,
    fontWeight: "bold",
  },
  stockSector: {
    fontSize: 16,
    color: "#666666",
  },
  stockMovement: {
    fontSize: 20,
    color: "green",
  },
  stockRate: {
    fontSize: 12,
    color: "#000000",
  },
  stockDetails: {
    flexDirection: 'column',
    alignItems: 'flex-end',
   //justifyContent:'space-around',
    marginLeft:130,
  },
  body: {
    flex: 1,
    alignItems: "center",
    marginTop: 50,
  },
  input: {
    fontSize: 24,
    fontWeight: "bold",
    borderColor: "#999999",
    padding: 12,
    borderRadius: 4,
    width: 150,
    textAlign: "center",
  },
  availableBalance: {
    fontSize: 16,
    color: "black",
    marginTop: 8,
  },
  buttonContainer: {
    // marginTop: 25,
    marginTop: "auto", // Use auto to push it to the bottom
     marginBottom:7,
     padding: 30,
    paddingVertical:40,
    paddingHorizontal:50,
    elevation:9,
    
  },
  button: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
    backgroundColor: "#000000",
    padding: 12,
    borderRadius: 4,
    textAlign: "center",
  
  },

  //   visible container
Descontainer: {
    flexDirection: "row", // Arrange items in a row
    justifyContent: "space-between", // Add this to evenly space items
  },
  DesitemContainer: {
    margin: 16,
  },
  live: {
    fontSize: 18,
    fontWeight: "bold",
    borderWidth: 1,
    borderColor: "blue", // Change border color as needed
    borderRadius: 8,
    padding: 18,
    paddingVertical:9,
    paddingHorizontal:9,

  },
  end: {
    fontSize: 16,
    color: "red", // Change color as needed
  },
        // 2 button  styles
  Rupeescontainer: {
    flexDirection: "row", // Arrange items in a row
    justifyContent: "space-around", // Add this to evenly space items
    marginTop: 16,
  },
  itemsContainer: {
    margin: 16,
  },
  lives: {
    fontSize: 18,
    fontWeight: "bold",
    borderWidth: 1,
    borderColor: "blue", // Change border color as needed
    borderRadius: 8,
    padding: 18,
    paddingVertical:15,
    paddingHorizontal:30,

  },

  //   visibal content styles
  text1:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom:9,
    fontsize:7,
  },

  point1:{
      color:"green",
    fontWeight:"bold",
    textAlign: 'right'
  },
  point2:{
      color:"black",
    fontWeight:"bold",
    textAlign: 'right'
  },
  content:{
    backgroundColor:"white"
  }
});

export default NewAddCash;
