import React, { useState, useRef , useEffect} from "react";
import {
  StyleSheet,
  Dimensions,
  StatusBar,
  TextInput,
  View,
  Button,
  TouchableOpacity,
  ImageBackground
} from "react-native";
import { Block, Text } from "galio-framework";
// import { Button } from "../components";
import { argonTheme } from "../constants";
import { Entypo } from '@expo/vector-icons';


const { width, height } = Dimensions.get("screen");
import Images from "../constants/Images";


const OtpScreen = ({ navigation }) => {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [numberOfDigitsEntered, setNumberOfDigitsEntered] = useState(0);
  const [buttonColor, setButtonColor] = useState('');

  const inputRefs = useRef([]);
  
  useEffect(() => {
    console.log("Button color:", buttonColor);
  }, [buttonColor]);


  const handleOtpChange = (index, text) => {
    if (text.length <= 1) {
      const newOtp = [...otp];
      newOtp[index] = text;
      setOtp(newOtp);
        // Update the number of digits entered
        //  setNumberOfDigitsEntered(numberOfDigitsEntered + 1);
         const newNumberOfDigitsEntered = newOtp.filter((digit) => digit !== "").length;
         setNumberOfDigitsEntered(newNumberOfDigitsEntered);
     
         // Check if all 6 digits are entered
         if (newNumberOfDigitsEntered === 6) {
           setButtonColor(argonTheme.COLORS.DEFAULT);
          //  console.log("Button color:", buttonColor)
           
         } else {
           setButtonColor('#d3d3d3');
          //  console.log("Button color:", buttonColor)
            // Reset button color if not all 6 digits are entered
         }

  // If the number of digits entered is equal to 6, then change the button color
      //  if (numberOfDigitsEntered === 6) {
      //    setButtonColor("black");
      // }
      
    }
  };

  const handleContinue = () => {
    const enteredOtp = otp.join(""); // Convert the array to a single string
    if (enteredOtp === "123456") {
      setButtonColor(argonTheme.COLORS.DEFAULT);
      navigation.navigate("NewHomeScreen");
    } else {
      alert("Please enter a valid otp");
    }
  };
const handlePress=()=>{

}
  return (
    <ImageBackground   source={{uri : "https://img.freepik.com/free-vector/vibrant-fluid-gradient-background-with-curvy-shapes_1017-32108.jpg"}}
    style={{ height, width, zIndex: 1 }}>
  
    <Block flex middle>
      <StatusBar hidden />
      <Block safe flex middle>
        <Block style={styles.registerContainer}>
          <Block>
          <Text style={styles.text}><Entypo name="trophy" size={25} color="black" />INVESTRO </Text>
            <Block styles={styles.title} marginTop={50} marginRight={60} marginLeft={12}>
              <Text color="black" size={25}>
                Enter 6 digit OTP sent to your Mobile Number
              </Text>
            </Block>
            <Block marginLeft={12} marginRight={10} marginBottom={30} marginTop={10}>
              <Text color="black" size={18}>
                Sent to your mobile number
              </Text>
            </Block>
            <Block width={width * 0.85}>
              <View style={styles.otpContainer}>
                {otp.map((digit, index) => (
                  <TextInput
                    key={index}
                    style={styles.otpInput}
                    maxLength={1}
                    keyboardType="phone-pad"
                    onChangeText={(text) => {
                      handleOtpChange(index, text);
                      if (text && inputRefs.current[index + 1]) {
                        inputRefs.current[index + 1].focus();
                      } else if (!text && inputRefs.current[index - 1]) {
                        inputRefs.current[index - 1].focus();
                      }
                    }}
                    value={digit}
                    ref={(ref) => (inputRefs.current[index] = ref)}
                  />
                ))}
              </View>
            </Block>
            <View style={styles.enterCode}>
              <Text>Didn't recieve otp? </Text>
              <TouchableOpacity onPress={handlePress}>
                <Text style={{ color: 'blue' }}>RESEND OTP</Text>
              </TouchableOpacity>
            </View>
            <Block width={width * 0.85}>
            <TouchableOpacity
                style={[
                styles.createButton,
                  { backgroundColor: buttonColor === argonTheme.COLORS.DEFAULT ? argonTheme.COLORS.DEFAULT : "#d3d3d3" }
                    ]}
                 onPress={handleContinue}
                 >
              <Text bold size={18} color="black" style={{ textAlign: 'center', color: buttonColor === argonTheme.COLORS.DEFAULT ? "white" : "gray" }}
              >
                Continue
               </Text>
            </TouchableOpacity>
             
            </Block>
          </Block>
        </Block>
      </Block>
    </Block>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  registerContainer: {
//width: width * 1,
  //  height: height * 1,
    shadowRadius: 8,
    shadowOpacity: 0.1,
    elevation: 8,
    overflow: "hidden"
  },
  title: {
    marginTop: 70,
    marginRight: 100,
    marginLeft:12,
    fontSize: 25,
    color: "black",
  },
  text: {
    marginTop: 25,
    fontWeight: 'bold',
    marginLeft:12,

    fontSize: 20,
    textAlign: 'right',
   // padding:10,
  },
  description: {
    marginTop: 10,
    marginLeft:12,

    fontSize: 18,
    color: "black",
    marginBottom: 30,
  },
  otpContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    //margin:20,
    //color:'black',
    marginLeft:12,
  },
  otpInput: {
    backgroundColor: 'white',
    borderColor:'gray',
    padding: 10, 
    borderRadius:10,
    fontSize: 15,
    fontWeight: 'bold',
    color: 'black', 
    textAlign: 'center',
    elevation:5,
   // marginBottom:30,
    
  },
  enterCode: {
    marginTop: '90%', // Adjust the margin as needed
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    marginBottom:7,
    justifyContent: 'center',
  },
  createButton: {
    width: width * 0.85,
    marginLeft: 12,
    marginRight: 12,

    padding:10,
    //borderWidth:1,
    //borderColor:'gray',
    //elevation:12,
    //borderWidth:1,
  }
});

export default OtpScreen;
