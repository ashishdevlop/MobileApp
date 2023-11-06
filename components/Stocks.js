import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image, FlatList } from 'react-native';
import SelectedStocksScreen from '../screens/NextSelection';
import ButtonGroup from './ButtonGroup';
import FilterOptions from './FilterOptions';

const StockScreen = () => {
  const navigation = useNavigation();
  const [selectedStocks, setSelectedStocks] = useState([]);
  const [showSelectedStocksScreen, setShowSelectedStocksScreen] = useState(false);
  const maxSelectedStocks = 6; // Set the maximum number of selected stocks
  const [selectedOption, setSelectedOption] = useState('Option 1');
  const options = ['Trend(Today)', 'Name', 'selected by', ' s'];

  const handleOptionChange = (newOption) => {
    setSelectedOption(newOption); }

  const [buttons, setButtons] = useState([
    { name: 'SCREENER' },
    { name: 'Movement' },
    { name: 'Fantasy' },
    { name: 'Last Create' },
  ]);

  const handleButtonRename = (oldName, newName) => {
    // Update the button name when it's renamed
    // setButtons((prevButtons) =>
    //   prevButtons.map((button) =>
    //     button.name === oldName ? { ...button, name: newName } : button
    //   )
    // );
  }
  
  const handleSelectStock = (stock) => {
    // Check if the stock is already selected
    if (selectedStocks.find((selected) => selected.symbol === stock.symbol)) {
      // Deselect the stock
      setSelectedStocks(selectedStocks.filter((selected) => selected.symbol !== stock.symbol));
    } else {
      // Check if the maximum number of selected stocks has been reached
      if (selectedStocks.length < maxSelectedStocks) {
        // Select the stock
        setSelectedStocks([...selectedStocks, stock]);
      } else {
        // Maximum number of selected stocks reached
        // You can show an alert or provide some feedback to the user
      }
    }
  };
  const handleStocksSelected = (selectedButtons) => {
    // Do something with the selected buttons (e.g., save to state or perform an action)
    console.log('Selected Buttons:', selectedButtons);
    // You can hide the SelectedStocksScreen by updating showSelectedStocksScreen state.
    setShowSelectedStocksScreen(false);
  };


  return (
    <View style={styles.container}>
    {/* stock appreance here */}
      {showSelectedStocksScreen ? (
        <SelectedStocksScreen selectedStocks={selectedStocks} onStocksSelected={handleStocksSelected} />
      ) : (
        <>
          {/* Selected stocks logos */}
          {selectedStocks.length > 0 && (
            <View style={styles.selectedStocks}>
              <FlatList
                horizontal
                data={selectedStocks}
                keyExtractor={(item) => item.symbol}
                renderItem={({ item }) => (
                  <Image source={{ uri: item.logo.uri }} style={styles.selectedStockLogo} />
                )}
              />
            </View>
          )}
          {/* buttons appreance here */}
          <ButtonGroup style={styles.buttonClick}
          buttons={buttons} onButtonPress={handleButtonRename} />
          {/* //filter options here */}
          <FilterOptions  options={options}
                 selectedOption={selectedOption}
                 onOptionChange={handleOptionChange}
           />
           {/* all stocks here */}
        <ScrollView style={styles.stockList}>
            {stocks.map((stock) => (
              <TouchableOpacity
                key={stock.symbol}
                onPress={() => handleSelectStock(stock)}
                style={[
                  styles.stockItem,
                  selectedStocks.some((selected) => selected.symbol === stock.symbol) &&
                    styles.selectedStockItem,
                ]}
              >
                <View style={styles.stockItemRow}>
                  <Image source={{ uri: stock.logo.uri }} style={styles.stockLogo} />
                  <View style={styles.stockInfo}>
                    <View style={styles.stockItemColumn1}>
                      <Text style={styles.stockSymbol}>{stock.symbol}</Text>
                      <Text style={styles.stockSector}>{stock.sector}</Text>
                    </View>
                  </View>
                </View>
                <View style={styles.stockItemColumn}>
                  <Text style={styles.stockMovement}>{stock.movement}</Text>
                  <Text style={styles.stockRate}>{stock.rate}</Text>
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>
          {/* button  */}
          <View>
            <TouchableOpacity
              style={[styles.nextButton, selectedStocks.length >= 6 && styles.nextButtonEnabled]}
              disabled={selectedStocks.length < 6}
              onPress={() => navigation.navigate("SelectedStocksScreen", { selectedStocks: selectedStocks })}>
              <Text
                style={[styles.nextButtonText, selectedStocks.length >= 6 && styles.nextButtonTextEnabled]}
              >
                Next
              </Text>
            </TouchableOpacity>
          </View>
        </>
      )}
    </View>
  );
  
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    padding: 16,
    alignItems: 'center',
    backgroundColor: '#F0FFF0',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 16,
  },
 
  stockItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    borderWidth: 1,
    borderColor: '#D3D3D3',
  },
  selectedStockItem: {
    backgroundColor: '#e0e0e0',
  },
  stockInfo: {
    flexDirection: 'row',
    alignItems: 'center',
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
  stockMovement: {
    fontSize: 20,
    color: 'green',
  },
  stockRate: {
    fontSize: 12,
    color: '#000000',
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
  selectedStocks: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  selectedStockLogo: {
    width: 40,
    height: 30,
    margin: 8,
  },
  stockItemRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  stockItemColumn: {
    flexDirection: 'column',
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  stockItemColumn: {
    flexDirection: 'column',
    //alignItems: 'flex-end',
    justifyContent: 'center',
  },
 buttonClick:{
  color: 'blue',
  backgroundColor: 'gray',
 }
});



const stocks = [
  {
    symbol: 'HCLTECH',
    movement: '+ 3.82%',
    sector: 'IT',
    rate: 'sel by 25.73%',
    x1: '6.5%',
    x2:'3.1%',
    logo: {
        uri:
          'https://i0.wp.com/www.itvoice.in/wp-content/uploads/2013/02/hcl_logo_blue.jpg?ssl=1',
      },
    },
  {
    symbol: 'TITAN',
    movement: '+1.65%',
    sector: 'Consumer Goods',
    rate: 'sel by 37.97%',
    x1: '2.8%',
    x2:'7.0%',
   logo: {
        uri:
        'https://companieslogo.com/img/orig/TITAN.NS-49ba0c5f.png?t=1599629294',
    },
  },
  {
    symbol: 'POWERGRID',
    movement: '+1.08%',
    sector: 'Power',
    rate: 'sel by 32.42%',
    x1: '5.3%',
    x2:'5.2%',
    logo: {
        uri:
        'https://companieslogo.com/img/orig/POWERGRID.NS-c91577ca.png?t=1599629469',
    },
  },
  {
    symbol: 'LTIM',
    movement: '+ 0.91%',
    sector: 'IT',
    rate:'sel by 32.69%',
    x1: '3.6%',
    x2:'6.5%',
    logo: {
        uri:
        'data:image/png;base64,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',
    },
  },
  {
    symbol: 'TATASTEEL',
    movement: '+0.79%',
    sector: 'Metals',
    rate:'sel by 37%',
    x1: '6.5%',
    x2:'3.1%',
    logo: {
        uri:
        'https://w7.pngwing.com/pngs/614/66/png-transparent-tata-business-support-services-tata-consultancy-services-tata-group-consultant-business-blue-angle-text.png',
    },
  },
  {
    symbol: 'APOLLOHOSP',
    movement: '+0.68%',
    sector: 'Pharma',
    rate:'sel by 22.22%',
    x1: '6.5%',
    x2:'3.1%',
    logo: {
        uri:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeFEmWDx66XM3NbgqZRzMZi4l2xGM17RbSKg&usqp=CAU',
    },
  },
  {
    symbol: 'NETMEDES',
    movement: '+0.28%',
    sector: 'Pharma',
    rate:'sel by 20.22%',
    x1: '6.5%',
    x2:'3.1%',
    logo: {
        uri:
        'https://i0.wp.com/cdn.askmeoffers.com/wp-content/uploads/2023/06/28063706/netmeds-coupon-codes-netmeds-offers-deals.png?ssl=1'    },
  },
  {
    symbol: 'SBI',
    movement: '+0.58%',
    sector: 'IT',
    rate:'sel by 29.43%',
    x1: '6.5%',
    x2:'3.1%',
    logo: {
        uri:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/SBI-logo.svg/2048px-SBI-logo.svg.png',
    },
  },
  // Add more stock objects with logos, symbols, sectors, movements, and rates
];

export default StockScreen;
