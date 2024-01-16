import { Animated, Dimensions, Easing } from "react-native";
// header for screens
import { Header, Icon } from "../components";
import { argonTheme, tabs } from "../constants";

import Articles from "../screens/Articles";
import { Block } from "galio-framework";
// drawer
import CustomDrawerContent from "./Menu";
import Elements from "../screens/Elements";
// screens
import Home from "../screens/Home";
import Onboarding from "../screens/Onboarding";
import Pro from "../screens/Pro";
import Profile from "../screens/Profile";
import React from "react";
import Register from "../screens/Register";
import OtpScreen from "../screens/Otp";
import NewHomeScreen from "../screens/NewHome";
import MySession from "../screens/MySession";
import LearnScreen from "../screens/Learn";
import ContestScreen from "../screens/Contestes";
import EntryScreen from "../screens/Entry";
import NewStockScreen from "../screens/StockScreens";
import SelectedStocksScreen from "../screens/NextSelection";
import EnterAmountScreen from "../screens/EnterAmount";
import PaymentOptionsScreen from "../screens/Payment";
import PaymentSuccessScreen from "../screens/PaymentSuccess";
import FantasyPointsScreen from "../screens/FantasyPointsScreen";
import NewCouponScreen from "../screens/NewCouponScreen";
import NewTermScreen from "../screens/NewTermScreen";
import NewHelpScreen from "../screens/NewHelpScreen";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";
import NewTrendScreen from "../screens/NewTrendScreen";
import KycScreen from "../screens/KycScreen";
import VerifyScreen from "../screens/VerifyScreen";
import NewEntryProfile from "../screens/NewEntryProfile";
import NewAddCash from "../screens/NewAddCash";
import NewShare from "../screens/NewShare";
















// import FantansyPoint from "../screens/FantansyPoint";
// Help
// FantasyPointsScreen

const { width } = Dimensions.get("screen");

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

// function ElementsStack(props) {
//   return (
//     <Stack.Navigator
//       screenOptions={{
//         mode: "card",
//         headerShown: false,
//       }}
//     >
//       <Stack.Screen
//         name="Elements"
//         component={Elements}
//         options={{
//           header: ({ navigation, scene }) => (
//             <Header title="Elements" navigation={navigation} scene={scene} />
//           ),
//           cardStyle: { backgroundColor: "#F8F9FE" },
//         }}
//       />
//       <Stack.Screen
//         name="Pro"
//         component={Pro}
//         options={{
//           header: ({ navigation, scene }) => (
//             <Header
//               title=""
//               back
//               white
//               transparent
//               navigation={navigation}
//               scene={scene}
//             />
//           ),
//           headerTransparent: true,
//         }}
//       />
//     </Stack.Navigator>
//   );
// }

// function ArticlesStack(props) {
//   return (
//     <Stack.Navigator
//       screenOptions={{
//         mode: "card",
//         headerShown: "screen",
//       }}
//     >
//       <Stack.Screen
//         name="Articles"
//         component={Articles}
//         options={{
//           header: ({ navigation, scene }) => (
//             <Header title="Articles" navigation={navigation} scene={scene} />
//           ),
//           cardStyle: { backgroundColor: "#F8F9FE" },
//         }}
//       />
//       <Stack.Screen
//         name="Pro"
//         component={Pro}
//         options={{
//           header: ({ navigation, scene }) => (
//             <Header
//               title=""
//               back
//               white
//               transparent
//               navigation={navigation}
//               scene={scene}
//             />
//           ),
//           headerTransparent: true,
//         }}
//       />
//     </Stack.Navigator>
//   );
// }

// function ProfileStack(props) {
//   return (
//     <Stack.Navigator
//       initialRouteName="Profile"
//       screenOptions={{
//         mode: "card",
//         headerShown: "screen",
//       }}
//     >
//       <Stack.Screen
//         name="Profile"
//         component={Profile}
//         options={{
//           header: ({ navigation, scene }) => (
//             <Header
//               transparent
//               white
//               title="Profile"
//               navigation={navigation}
//               scene={scene}
//             />
//           ),
//           cardStyle: { backgroundColor: "#FFFFFF" },
//           headerTransparent: true,
//         }}
//       />
//       <Stack.Screen
//         name="Pro"
//         component={Pro}
//         options={{
//           header: ({ navigation, scene }) => (
//             <Header
//               title=""
//               back
//               white
//               transparent
//               navigation={navigation}
//               scene={scene}
//             />
//           ),
//           headerTransparent: true,
//         }}
//       />
//     </Stack.Navigator>
//   );
// }

function HomeStack(props) {
  return (
    <Stack.Navigator
      screenOptions={{
        mode: "card",
        headerShown: "screen",
      }}
    >
      <Stack.Screen
        name="Home"
        component={Home}
        // options={{
        //   header: ({ navigation, scene }) => (
        //     <Header
        //       title="Home"
        //       search
        //       options
        //       navigation={navigation}
        //       scene={scene}
        //     />
        //   ),
        //   cardStyle: { backgroundColor: "#F8F9FE" },
        // }}
      />
      <Stack.Screen
        name="Pro"
        component={Pro}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              title=""
              back
              white
              transparent
              navigation={navigation}
              scene={scene}
            />
          ),
          headerTransparent: true,
        }}
      />
    </Stack.Navigator>
  );
}

export default function OnboardingStack(props) {
  return (
    <Stack.Navigator
      screenOptions={{
        mode: "card",
        headerShown: false,
      }}
    >
      {/* <Stack.Screen
        name="Onboarding"
        component={Onboarding}
        option={{
          headerTransparent: true,
        }}
      />
      <Stack.Screen name="App" component={AppStack} /> */}
      <Stack.Screen name="Onboarding" component={Onboarding} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="OtpScreen" component={OtpScreen} />
      <Stack.Screen name="NewHomeScreen" component={NewHomeScreen} />
      <Stack.Screen name="MySession" component={MySession} />
      <Stack.Screen name="LearnScreen" component={LearnScreen} />
      <Stack.Screen name="FantasyPointsScreen" component={FantasyPointsScreen} />
      <Stack.Screen name="NewHelpScreen" component={NewHelpScreen} />
      <Stack.Screen name="NewCouponScreen" component={NewCouponScreen} />
      <Stack.Screen name="NewTermScreen" component={NewTermScreen} />
      <Stack.Screen name="NewTrendScreen" component={NewTrendScreen} />
      <Stack.Screen name="NewEntryProfile" component={NewEntryProfile} />
      <Stack.Screen name="NewAddCash" component={NewAddCash} />
      <Stack.Screen name="NewShare" component={NewShare} />

    
      

      
      
      
      
   
      


      
     
  
  
      {/* <Stack.Screen name="NewInviteScreen" component={NewInviteScreen} /> */}
      <Stack.Screen name="VerifyScreen" component={VerifyScreen} />
      <Stack.Screen name="KycScreen" component={KycScreen} />
      <Stack.Screen name="ContestScreen" component={ContestScreen} />
      <Stack.Screen name="EntryScreen" component={EntryScreen} />
      <Stack.Screen name="NewStockScreen" component={NewStockScreen} />
      <Stack.Screen name="SelectedStocksScreen" component={SelectedStocksScreen} />
      <Stack.Screen name="EnterAmountScreen" component={EnterAmountScreen} />
      <Stack.Screen name="PaymentOptionsScreen" component={PaymentOptionsScreen} />
      <Stack.Screen name="PaymentSuccessScreen" component={PaymentSuccessScreen} />

      




</Stack.Navigator>
  );
}

function AppStack(props) {
  return (
    <Drawer.Navigator
      style={{ flex: 1 }}
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      drawerStyle={{
        backgroundColor: "white",
        width: width * 0.8,
      }}
      drawerContentOptions={{
        activeTintcolor: "white",
        inactiveTintColor: "#000",
        activeBackgroundColor: "transparent",
        itemStyle: {
          width: width * 0.75,
          backgroundColor: "transparent",
          paddingVertical: 16,
          paddingHorizonal: 12,
          justifyContent: "center",
          alignContent: "center",
          alignItems: "center",
          overflow: "hidden",
        },
        labelStyle: {
          fontSize: 18,
          marginLeft: 12,
          fontWeight: "normal",
        },
      }}
      initialRouteName="Home"
    >
      <Drawer.Screen
        name="Home"
        component={HomeStack}
        options={{
          headerShown: false,
        }}
      />
      {/* <Drawer.Screen
        name="Profile"
        component={ProfileStack}
        options={{
          headerShown: false,
        }}
      /> */}
      {/* <Drawer.Screen
        name="Account"
        component={Register}
        options={{
          headerShown: false,
        }}
      /> */}
      {/* <Drawer.Screen
        name="Elements"
        component={ElementsStack}
        options={{
          headerShown: false,
        }}
      /> */}
      {/* <Drawer.Screen
        name="Articles"
        component={ArticlesStack}
        options={{
          headerShown: false,
        }}
      /> */}
    </Drawer.Navigator>
  );
 }
