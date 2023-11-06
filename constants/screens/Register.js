// import React, { useState, useEffect } from "react";
// import { View, TextInput, Text, StyleSheet, Dimensions, StatusBar, Image, TouchableOpacity, ImageBackground } from "react-native";
// import { Block } from "galio-framework";
// import { Button } from "../components";
// import { argonTheme } from "../constants";
// import { Entypo } from '@expo/vector-icons';

// const { width, height } = Dimensions.get("screen");

// const Register = ({ navigation }) => {
//   const [mobileNumber, setMobileNumber] = useState("+91");
//   const [inviteCode, setInviteCode] = useState("");
//   const [buttonColor, setButtonColor] = useState('');

//   const [isButtonActive, setButtonActive] = useState(false);
//   const [showInviteContainer, setShowInviteContainer] = useState(false);

  // useEffect(() => {
  //   if (mobileNumber.length === 13) {
  //     setButtonColor('white');
  //     setButtonActive(true);
  //   } else {
  //     setButtonActive(false);
  //     setButtonColor('#d3d3d3');
  //   }
  // }, [mobileNumber]);

  // useEffect(() => {
  //   if (inviteCode === "abcdef" && mobileNumber.length === 13) {
  //     setButtonColor('white');
  //     setButtonActive(true);
  //   } else {
  //     setButtonActive(false);
  //     setButtonColor('#d3d3d3');
  //   }
  // }, [inviteCode]);

//   const handleContinue = () => {
//     if (isButtonActive) {
//       if (inviteCode === "abcdef" && mobileNumber.length === 13) {
//         setButtonColor('white');
//         navigation.navigate("NewHomeScreen");
//       } else if (mobileNumber.length === 13) {
//         setButtonColor('white');
//         navigation.navigate("OtpScreen");
//       }
//     } else {
//       alert("Please enter a valid 10-digit mobile number");
//     }
//   };

//   const handleCross = () => {
//     setShowInviteContainer(false);
//   };

//   const handleShowInviteContainer = () => {
//     setShowInviteContainer(true);
//   };

//   return (
//     <ImageBackground source={{ uri: "https://img.freepik.com/free-vector/vibrant-fluid-gradient-background-with-curvy-shapes_1017-32108.jpg" }} style={{ height, width, zIndex: 1 }}>
//       <View style={styles.container}>
//         <StatusBar hidden />
//         <Block flex center>
//           <View style={styles.registerContainer}>
//             <View style={styles.formContainer}>
//               <Text style={styles.text}><Entypo name="trophy" size={25} color="black" />INVESTRO </Text>
//               <Text style={styles.title}>Enter your 10-digit mobile number</Text>
//               <Text style={styles.description}>Sign in with one-time password (OTP)</Text>
//               <TextInput
//                 style={styles.mobileInput}
//                 placeholder="Enter Mobile Number"
//                 keyboardType="numeric"
//                 value={mobileNumber}
//                 onChangeText={(text) => setMobileNumber(text)}
//               />
            

//               {showInviteContainer && (
//                 <View style={{ ...StyleSheet.absoluteFillObject, backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
//                 <Block style={styles.container1}>
//                   <View style={styles.rowContainer}>
//                     <TouchableOpacity onPress={handleCross}>
//                       <Image
//                         style={styles.cross}
//                         source={{ uri: 'https://cdn-icons-png.flaticon.com/512/59/59836.png' }}
//                       />
//                     </TouchableOpacity>
//                     <Text style={styles.top}>Enter Code</Text>
//                   </View>
//                   <Text style={styles.title1}>Enter Your invite code</Text>
//                   <Text style={styles.description}>Applicable once per account</Text>
//                   <TextInput
//                     style={styles.mobileInput}
//                     placeholder=""
//                     value={inviteCode}
//                     onChangeText={(text) => setInviteCode(text)}
//                   />
//                   <Block width={width * 0.9}>
//                     <TouchableOpacity
//                       style={[
//                         styles.createButton2,
//                         {  backgroundColor: isButtonActive ? (buttonColor === "#E5E4E2" ? "#E5E4E2" : "#d3d3d3") : "#d3d3d3", }
//                       ]}
//                       onPress={handleContinue}
//                     >
//                       <Text bold size={18} style={{textAlign: 'center', 
//     color: isButtonActive ? (buttonColor === "#E5E4E2" ? "black" : "gray") : "gray"}}>
//                         Continue
//                       </Text>
//                     </TouchableOpacity>
//                   </Block>
//                 </Block>
//                 </View>
//               )}

//               {!showInviteContainer && (
//                 <View style={styles.enterCode}>
//                   <Text>Invite by a friend? </Text>
//                   <TouchableOpacity onPress={handleShowInviteContainer}>
//                     <Text style={{ color: 'blue' }}> ENTER CODE</Text>
//                   </TouchableOpacity>
//                 </View>
//               )}
//               <Block width={width * 0.85}>
//               <TouchableOpacity
//                 style={[
//       styles.createButton,
//       {
//         backgroundColor: isButtonActive ? (buttonColor === "white" ? "white" : "#d3d3d3") : "#d3d3d3",
//       }
//     ]}
//     disabled={!isButtonActive} 
//     onPress={handleContinue}
//   >
//     <Text bold size={18} 
//     style={{textAlign: 'center', 
//     color: isButtonActive ? (buttonColor === "white" ? "black" : "gray") : "gray"}}
//     >
//       Continue
//     </Text>
//   </TouchableOpacity>
// </Block>

//             </View>
//           </View>
//         </Block>
//       </View>
//     </ImageBackground>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     //width: width * 1,
//     //eight: height * 1,
//     flex: 1,
//   },
//   container1: {
//     width: width * 1,
//     height: height * 0.5,
//     marginTop: '30%',
//     padding: 10,
//     backgroundColor: "white",
//     borderRadius: 5,
//   },
//   rowContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//   },
//   text: {
//     marginTop: 20,
//     fontWeight: 'bold',
//     padding: 10,
//     fontSize: 20,
//     textAlign: 'right',
//   },
//   title: {
//     marginTop: 70,
//     marginRight: 100,
//     marginLeft: 12,
//     fontSize: 25,
//     color: "black",
//   },
//   enterCode: {
//     marginTop: '90%',
//     flexDirection: 'row',
//     alignItems: 'center',
//     padding: 10,
//     marginBottom: 7,
//     justifyContent: 'center',
//   },
//   cross: {
//     width: 15,
//     height: 15,
//   },
//   top: {
//     flexDirection: 'row',
//     marginRight: 160,
//     borderBottomWidth: 0.5,
//     borderColor: 'gray',
//   },
//   title1: {
//     marginTop: 20,
//     marginRight: 100,
//     marginLeft: 12,
//     fontSize: 25,
//     color: "black",
//   },
//   description: {
//     marginTop: 10,
//     fontSize: 18,
//     marginLeft: 12,
//     color: "black",
//     marginBottom: 30,
//   },
//   mobileInput: {
//     width: width * 0.8,
//     backgroundColor: '#eeeeee',
//     padding: 10,
//     borderColor: 'gray',
//     marginLeft: 12,
//     borderRadius: 10,
//     fontSize: 20,
//     color: 'black',
//     marginBottom: 20,
//   },
//   createButton: {
//     width: width * 0.8,
//     marginLeft: 12,
//     padding: 10,
//   },
//   createButton2: {
//     width: width * 0.8,
//     marginTop: 40,
//     marginRight: 10,
//     padding: 10,
//     marginLeft: 12,
//   },
// });

// export default Register;

import React, { useState, useEffect } from "react";
import { View, TextInput, Text, StyleSheet, Dimensions, StatusBar, Image, TouchableOpacity, ImageBackground, Modal } from "react-native";
import { Block } from "galio-framework";
import { Button } from "../components";
import { argonTheme } from "../constants";
import { Entypo } from '@expo/vector-icons';

const { width, height } = Dimensions.get("screen");

const Register = ({ navigation }) => {
  const [mobileNumber, setMobileNumber] = useState("+91");
  const [inviteCode, setInviteCode] = useState("");
  const [buttonColor, setButtonColor] = useState('');

  const [isButtonActive, setButtonActive] = useState(false);
  const [showInviteContainer, setShowInviteContainer] = useState(false);
  useEffect(() => {
    if (mobileNumber.length === 13) {
      setButtonColor(argonTheme.COLORS.DEFAULT);
      setButtonActive(true);
    } else {
      setButtonActive(false);
      setButtonColor('#d3d3d3');
    }
  }, [mobileNumber]);

  useEffect(() => {
    if (inviteCode === "abcdef" && mobileNumber.length === 13) {
      setButtonColor(argonTheme.COLORS.DEFAULT);
      setButtonActive(true);
    } else {
      setButtonActive(false);
      setButtonColor('#d3d3d3');
    }
  }, [inviteCode]);

  const handleContinue = () => {
    if (isButtonActive) {
      if (inviteCode === "abcdef" && mobileNumber.length === 13) {
        setButtonColor(argonTheme.COLORS.DEFAULT);
        navigation.navigate("NewHomeScreen");
      } else if (mobileNumber.length === 13) {
        setButtonColor(argonTheme.COLORS.DEFAULT);
        navigation.navigate("OtpScreen");
      }
    } else {
      alert("Please enter a valid 10-digit Mobile Number");
    }
  };

  const handleCross = () => {
    setShowInviteContainer(false);
  };

  const handleShowInviteContainer = () => {
    setShowInviteContainer(true);
    console.log('clicled');
  };
  return (
    <ImageBackground source={{ uri: "https://img.freepik.com/free-vector/vibrant-fluid-gradient-background-with-curvy-shapes_1017-32108.jpg" }} style={{ height, width, zIndex: 1 }}>
      <View style={styles.container}>
        <StatusBar hidden />
        <Block flex center>
          <View style={styles.registerContainer}>
            <View style={styles.formContainer}>
              <Text style={styles.text}><Entypo name="trophy" size={25} color="black" />INVESTRO </Text>
              <Text style={styles.title}>Enter your 10-digit Mobile Number</Text>
              <Text style={styles.description}>Sign in with a one-time password (OTP)</Text>
              <TextInput
                style={styles.mobileInput}
                placeholder="Enter Mobile Number"
                keyboardType="numeric"
                value={mobileNumber}
                onChangeText={(text) => setMobileNumber(text)}
              />
  
              {!showInviteContainer && (
                <View style={styles.enterCode}>
                  <Text>Invite by a friend? </Text>
                  <TouchableOpacity onPress={handleShowInviteContainer}>
                    <Text style={{ color: 'blue' }}> ENTER CODE</Text>
                  </TouchableOpacity>
                </View>
              )}
  
            </View>
          </View>
        </Block>
      </View>
      {showInviteContainer && (
        <Modal visible={showInviteContainer} transparent={true}>
          <View style={{ flex: 1, backgroundColor: 'rgba(0, 0, 0, 0.6)', justifyContent: 'center', alignItems: 'center' }}>
            <Block style={styles.container1}>
              <View style={styles.rowContainer}>
                <TouchableOpacity onPress={handleCross}>
                  <Image
                    style={styles.cross}
                    source={{ uri: 'https://cdn-icons-png.flaticon.com/512/59/59836.png' }}
                  />
                </TouchableOpacity>
                <Text style={styles.top}>Enter Code</Text>
              </View>
              <Text style={styles.title1}>Enter Your invite code</Text>
              <Text style={styles.description}>Applicable once per account</Text>
              <TextInput
                style={styles.mobileInput}
                placeholder=""
                value={inviteCode}
                onChangeText={(text) => setInviteCode(text)}
              />
              <Block width={width * 0.9}>
                <TouchableOpacity
                  style={[
                    styles.createButton2,
                    { backgroundColor: isButtonActive ? (buttonColor === argonTheme.COLORS.DEFAULT ?argonTheme.COLORS.DEFAULT : "#d3d3d3") : "#d3d3d3" }
                  ]}
                  onPress={handleContinue}
                >
                  <Text bold size={18} style={{ textAlign: 'center', color: isButtonActive ? (buttonColor === argonTheme.COLORS.DEFAULT ? "white" : "gray") : "gray" }}>
                    Continue
                  </Text>
                </TouchableOpacity>
              </Block>
            </Block>
          </View>
        </Modal>
      )}
      {!showInviteContainer && (
        <Block width={width * 0.8}>
          <TouchableOpacity
            style={[
              styles.createButton,
              { backgroundColor: isButtonActive ? (buttonColor === argonTheme.COLORS.DEFAULT ?argonTheme.COLORS.DEFAULT : "#d3d3d3") : "#d3d3d3" }
            ]}
            onPress={handleContinue}
          >
            <Text bold size={18} style={{ textAlign: 'center', color: isButtonActive ? (buttonColor === argonTheme.COLORS.DEFAULT ? "white" : "gray") : "gray" }}>
              Continue
            </Text>
          </TouchableOpacity>
        </Block>
      )}
    </ImageBackground>
  );
  
  

//   return (
//     <ImageBackground source={{ uri: "https://img.freepik.com/free-vector/vibrant-fluid-gradient-background-with-curvy-shapes_1017-32108.jpg" }} style={{ height, width, zIndex: 1 }}>
//       <View style={styles.container}>
//         <StatusBar hidden />
//         <Block flex center>
//           <View style={styles.registerContainer}>
//             <View style={styles.formContainer}>
//               <Text style={styles.text}><Entypo name="trophy" size={25} color="black" />INVESTRO </Text>
//               <Text style={styles.title}>Enter your 10-digit mobile number</Text>
//               <Text style={styles.description}>Sign in with one-time password (OTP)</Text>
//               <TextInput
//                 style={styles.mobileInput}
//                 placeholder="Enter Mobile Number"
//                 keyboardType="numeric"
//                 value={mobileNumber}
//                 onChangeText={(text) => setMobileNumber(text)}
//               />

// <Modal visible={showInviteContainer} transparent={true}>
//         <View style={{ flex: 1, backgroundColor: 'rgba(0, 0, 0, 0.6)',
//         justifyContent: 'center', alignItems: 'center' 
//          }}>
//           <Block style={styles.container1}>
//             <View style={styles.rowContainer}>
//               <TouchableOpacity onPress={handleCross}>
//                 <Image
//                   style={styles.cross}
//                   source={{ uri: 'https://cdn-icons-png.flaticon.com/512/59/59836.png' }}
//                 />
//               </TouchableOpacity>
//               <Text style={styles.top}>Enter Code</Text>
//             </View>
//             <Text style={styles.title1}>Enter Your invite code</Text>
//             <Text style={styles.description}>Applicable once per account</Text>
//             <TextInput
//               style={styles.mobileInput}
//               placeholder=""
//               value={inviteCode}
//               onChangeText={(text) => setInviteCode(text)}
//             />
//             <Block width={width * 0.9}>
//               <TouchableOpacity
//                 style={[
//                   styles.createButton2,
//                   { backgroundColor: isButtonActive ? (buttonColor === "#E5E4E2" ? "#E5E4E2" : "#d3d3d3") : "#d3d3d3", }
//                 ]}
//                 onPress={handleContinue}
//               >
//                 <Text bold size={18} style={{ textAlign: 'center', color: isButtonActive ? (buttonColor === "#E5E4E2" ? "black" : "gray") : "gray" }}>
//                   Continue
//                 </Text>
//               </TouchableOpacity>
//             </Block>
//           </Block>
//         </View>
//       </Modal>


//               {!showInviteContainer && (
//                 <View style={styles.enterCode}>
//                   <Text>Invite by a friend? </Text>
//                   <TouchableOpacity onPress={handleShowInviteContainer}>
//                     <Text style={{ color: 'blue' }}> ENTER CODE</Text>
//                   </TouchableOpacity>
//                 </View>
//               )}

//               <Block width={width * 0.85}>
//                 <TouchableOpacity
//                   style={[
//                     styles.createButton,
//                     {
//                       backgroundColor: isButtonActive ? (buttonColor === "white" ? "white" : "#d3d3d3") : "#d3d3d3",
//                     }
//                   ]}
//                   disabled={!isButtonActive}
//                   onPress={handleContinue}
//                 >
//                   <Text bold size={18}
//                     style={{
//                       textAlign: 'center',
//                       color: isButtonActive ? (buttonColor === "white" ? "black" : "gray") : "gray"
//                     }}
//                   >
//                     Continue
//                   </Text>
//                 </TouchableOpacity>
//               </Block>
//             </View>
//           </View>
//         </Block>
//       </View>
    
//     </ImageBackground>
//   );
          };


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', // Center vertically
    alignItems: 'center',     // Center horizontally
  },
  container1: {
    width: width * 1,  // Adjusted width to make it slightly narrower
    marginTop: 'auto',    // Place it at the bottom
    padding: 20,
    backgroundColor: "white",
    borderRadius: 5,
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    marginTop: 20,
    fontWeight: 'bold',
    padding: 10,
    fontSize: 20,
    textAlign: 'right',
  },
  title: {
    marginTop: 70,
    marginRight: 100,
    marginLeft: 12,
    fontSize: 25,
    color: "black",
  },
  enterCode: {
    flexDirection: 'row',
    alignItems: 'center',
    //padding: 10,
    justifyContent: 'center',
    marginTop: '105%',  // Adjusted marginBottom
  },
  cross: {
    width: 15,
    height: 15,
  },
  top: {
    flexDirection: 'row',
    marginRight: 160,
    borderBottomWidth: 0.5,
    borderColor: 'gray',
  },
  title1: {
    marginTop: 20,
    marginRight: 100,
    marginLeft: 12,
    fontSize: 25,
    color: "black",
  },
  description: {
    marginTop: 10,
    fontSize: 18,
    marginLeft: 12,
    color: "black",
    marginBottom: 30,
  },
  mobileInput: {
    width: width * 0.8,
    backgroundColor: '#eeeeee',
    padding: 10,
    borderColor: 'gray',
    marginLeft: 12,
    borderRadius: 10,
    fontSize: 20,
    color: 'black',
    //marginBottom: 20,
  },
  createButton: {
    width: width * 0.8,
    padding: 10,
    alignItems: 'center',
    margin:35,
    marginBottom: 70,
  },
  createButton2: {
    width: width * 0.8,
    marginTop: 40,  // Adjusted marginTop
    marginRight: 20,
    padding: 10,
    marginLeft: 12,
    marginBottom:10,
  },
});


// const styles = StyleSheet.create({
  
// const styles = StyleSheet.create({
//   container: {
//     //width: width * 1,
//     //eight: height * 1,
//     flex: 1,
//   },
//   container1: {
//     width: width * 1,
//     height: height * 0.4,
//     marginTop: '50%',
//     padding: 10,
//     backgroundColor: "white",
//     borderRadius: 5,
//   },
//   rowContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//   },
//   text: {
//     marginTop: 20,
//     fontWeight: 'bold',
//     padding: 10,
//     fontSize: 20,
//     textAlign: 'right',
//   },
//   title: {
//     marginTop: 70,
//     marginRight: 100,
//     marginLeft: 12,
//     fontSize: 25,
//     color: "black",
//   },
//   enterCode: {
//     marginTop: '90%',
//     flexDirection: 'row',
//     alignItems: 'center',
//     padding: 10,
//    marginBottom: 7,
//     justifyContent: 'center',
//   },
//   cross: {
//     width: 15,
//     height: 15,
//   },
//   top: {
//     flexDirection: 'row',
//     marginRight: 160,
//     borderBottomWidth: 0.5,
//     borderColor: 'gray',
//   },
//   title1: {
//     marginTop: 20,
//     marginRight: 100,
//     marginLeft: 12,
//     fontSize: 25,
//     color: "black",
//   },
//   description: {
//     marginTop: 10,
//     fontSize: 18,
//     marginLeft: 12,
//     color: "black",
//     marginBottom: 30,
//   },
//   mobileInput: {
//     width: width * 0.8,
//     backgroundColor: '#eeeeee',
//     padding: 10,
//     borderColor: 'gray',
//     marginLeft: 12,
//     borderRadius: 10,
//     fontSize: 20,
//     color: 'black',
//     marginBottom: 20,
//   },
//   createButton: {
//     width: width * 0.8,
//     marginLeft: 12,
//     marginRight: 10,
//     marginTop: 5,

//     padding: 10,
//   },
//   createButton2: {
//     width: width * 0.8,
//     marginTop: 40,
//     marginRight: 10,
//     padding: 10,
//     marginLeft: 12,
//   },
// });
//   // Your styles here
// });

export default Register;
