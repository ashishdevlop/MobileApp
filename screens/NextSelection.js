import React, { useState } from 'react';
 //import { useNavigation } from '@react-navigation/native';
import { View, Text, TouchableOpacity,FlatList, Button, StyleSheet, Image } from 'react-native';
import NeftyHeader from '../components/NeftyHeader';
import FilterOptions from '../components/FilterOptions';

const SelectedStocksScreen = ({ route ,navigation}) => {
  // const navigation = useNavigation();

  const { selectedStocks } = route.params;

  // Create a state variable to hold the selected buttons for each stock
  const [selectedButtons, setSelectedButtons] = useState(selectedStocks.map(() => []));
  const [nextButtonColor, setNextButtonColor] = useState('blue');

  const [selectedOption, setSelectedOption] = useState('Option 1');
  const options = ['Trend(Today)', 'Name', '%ss', ' %s'];

  const handleOptionChange = (newOption) => {
    setSelectedOption(newOption); }

  const handleButtonSelect = (buttonName, stockIndex) => {
    if (selectedButtons[stockIndex].length >= 2) {
      return;
    }

    const updatedSelectedButtons = [...selectedButtons];
    const stockSelectedButtons = updatedSelectedButtons[stockIndex];

    if (!stockSelectedButtons.includes(buttonName)) {
      // If the button is not already selected, add it
      stockSelectedButtons.push(buttonName);
    } else {
      // If the button is already selected, remove it
      const index = stockSelectedButtons.indexOf(buttonName);
      if (index > -1) {
        stockSelectedButtons.splice(index, 1);
      }
    }

    updatedSelectedButtons[stockIndex] = stockSelectedButtons;

    setSelectedButtons(updatedSelectedButtons);

    // Change the color of the "Next" button based on the selection
    const selectedButtonCount = selectedButtons.reduce(
      (total, stockButtons) => total + stockButtons.length,
      0
    );
    if (selectedButtonCount === 2) {
      setNextButtonColor('green');
    } else {
      setNextButtonColor('blue');
    }
  };

  const handleNext = () => {
    // Ensure exactly two buttons are selected in total
    const selectedButtonCount = selectedButtons.reduce(
      (total, stockButtons) => total + stockButtons.length,
      0

    );
    
    navigation.navigate("EnterAmountScreen");

    if (selectedButtonCount !== 2) {
      alert('Please select exactly two buttons to proceed.');
      
    }
    else {
    
      navigation.navigate('EnterAmountScreen'); 
    }
 };
 const onIconTouch=()=>{
  navigation.goBack();
    }

  return (
    <View style={styles.container}>
     <NeftyHeader leftIcon='arrowleft' onIconPress={onIconTouch}  />
     <View style={styles.disclimer}>
     <Text>Suparstar(ss) gets 2X pts & Star(s) gets 1.5X pts </Text>
     </View>
     <FilterOptions  options={options}
        selectedOption={selectedOption}
        onOptionChange={handleOptionChange}
      />
      <FlatList
        data={selectedStocks}
        keyExtractor={(item) => item.symbol}
        renderItem={({ item, index }) => (
          <View style={styles.stockItem}>
            <Image source={{ uri: item.logo.uri }} style={styles.stockLogo} />
            <View style={styles.stockInfo}>
              <View style={styles.stockItemColumn}>
                <Text style={styles.stockSymbol}>{item.symbol}</Text>
                <Text style={styles.stockSector}>
                  {item.sector} - {item.movement}
                </Text>
              </View>
            </View>
            <View style={styles.buttonsContainer}>
              <View style={styles.buttonWrapper}>
                <Button
                  title="2X"
                  onPress={() => handleButtonSelect('2X', index)}
                  color={selectedButtons[index].includes('2X') ? 'green' : 'blue'}
                  disabled={selectedButtons[index].length >= 2}
                />
                <Text>{para[index].x1}</Text>
              </View>
              <View style={styles.buttonWrapper}>
                <Button
                  title="1.5X"
                  onPress={() => handleButtonSelect('1.5X', index)}
                  color={selectedButtons[index].includes('1.5X') ? 'green' : 'blue'}
                  disabled={selectedButtons[index].length >= 2}
                />
                <Text>{para[index].x2}</Text>
              </View>
            </View>
          </View>
        )}
      />
      <View>
            <TouchableOpacity
              style={[styles.nextButton, selectedButtons.length==2  && styles.nextButtonEnabled]}
              disabled={nextButtonColor !== 'green'}
              
              onPress={handleNext}
            >
              <Text
                style={[styles.nextButtonText, selectedButtons.length == 2 && styles.nextButtonTextEnabled]}
              >
                Next
              </Text>
            </TouchableOpacity>
          </View>
    </View>
  );
};

const para = [
  {
    x1: '6.5%',
    x2: '3.1%',
  },
  {
    x1: '2.8%',
    x2: '7.0%',
  },
  {
    x1: '2.8%',
    x2: '7.0%',
  },
  {
    x1: '2.8%',
    x2: '7.0%',
  },
  {
    x1: '2.8%',
    x2: '7.0%',
  },
  {
    x1: '2.8%',
    x2: '7.0%',
  },
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  
  stockItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    borderWidth: 1,
    borderColor: '#D3D3D3',
    backgroundColor: '#fff',
  },
  stockInfo: {
    flex: 1,
  },
  stockLogo: {
    width: 30,
    height: 18,
    marginRight: 10,
  },
  stockSymbol: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  stockSector: {
    fontSize: 16,
    color: '#666666',
  },
  nextButton: {
    backgroundColor: 'green',
    padding: 12,
    borderRadius: 5,
    opacity: 0.8,
  },
  nextButtonEnabled: {
    opacity: 1,
  },
  nextButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ffffff',
    textAlign: 'center',
  },
  nextButtonTextEnabled: {
    color: '#ffffff',
  },
  buttonsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonWrapper: {
    flexDirection: 'column',
    alignItems: 'center',
    padding: 5,
  },
  buttonText: {
    fontSize: 16,
    marginLeft: 5,
  },
  nextButtonContainer: {
    padding: 16,
  },
  disclimer:{
   alignContent: 'center',
   justifyContent: 'center',
   //flex:1,
   padding:5,
   marginLeft: 10,
  }
});

export default SelectedStocksScreen;
