import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import NeftyHeader from "../components/NeftyHeader";
import NewHead from "../components/Head";

const EnterAmountScreen = () => {
  const navigation = useNavigation();
  const title="Low A/C Balance";
  const [amount, setAmount] = useState("");
  const [buttonText, setButtonText] = useState("CONFIRM");

  const handleAddAmount = () => {
    console.log(`Adding €${amount}`);
    setButtonText(`ADD €${amount}`);
    navigation.navigate("PaymentOptionsScreen");
  };
  const onIconTouch=()=>{
    navigation.goBack();

  }
  

  return (
    <View style={styles.container}>
    <NewHead title={title} showImage={false} leftIcon="arrowleft" onLeftPress={onIconTouch}/>
    {/* <NeftyHeader  title={title}  leftIcon="arrowleft" onIconPress={onIconTouch} /> */}
      
      <View style={styles.stockItemRow}>
        <Ionicons name="wallet-outline" size={45} color="black" />
        <View style={styles.stockInfo}>
          <View style={styles.stockItemColumn1}>
            <Text style={styles.entryText}>Entry</Text>
            <Text style={styles.stockSymbol}>A/C Balance</Text>
            <Text style={styles.stockSector}>Usable Cash Bonus</Text>
          </View>
        </View>
        <View style={styles.stockDetails}>
          <Text style={styles.stockMovement}>$39</Text>
          <Text style={styles.stockRate}>$0</Text>
          <Text style={styles.stockRate}>$0</Text>

        </View>
      </View>
      <View style={styles.stockItemRow2}>
        <Text style={styles.stockSymbol}>Add Minimum</Text>
        <Text style={styles.stockSymbol}>$39</Text>
      </View>
      <View style={styles.body}>
        <Text style={styles.availableBalance}>Enter Amount</Text>
        <TextInput
          style={styles.input}
          placeholder="$39"
          keyboardType="numeric"
          value={amount}
          onChangeText={(text) => setAmount(text)}
        />
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
    backgroundColor: "#ffffff",
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
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
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
    marginTop: 16,
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
});

export default EnterAmountScreen;
