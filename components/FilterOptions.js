import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const FilterOptions = ({ options, selectedOption, onOptionChange }) => {
  return (
    <View style={styles.filterOptions}>
      <Text style={styles.sortByText}>Sort by:</Text>
      <View style={styles.optionsContainer}>
        {options.map((option, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.option,
              option === selectedOption ? styles.selectedOption : null,
              index === options.length - 3 ? styles.lastOption : null,

              index === options.length - 2 ? styles.lastOption : null,

              index === options.length - 1 ? styles.lastOption : null,
            ]}
            onPress={() => onOptionChange(option)}
          >
            <Text style={[styles.optionText, option === selectedOption ? styles.selectedOptionText : null]}>
              {option}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = {
  filterOptions: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between', // Aligns the last option to the flex end
    borderBottomWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    backgroundColor: '#fff',
  },
  sortByText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  optionsContainer: {
    flexDirection: 'row',
    alignItems: 'center', // Aligns the options vertically in the center
    flex: 1, // Allows the last option to take the remaining space
  },
  option: {
    padding: 6,
    borderColor: '#ccc',
    backgroundColor: '#fff',
  },
  lastOption: {
    marginLeft: 'auto', // Pushes the last option to the flex end
  },
  optionText: {
    color: '#333',
    fontSize: 16,
  },
  selectedOptionText: {
    color: 'blue', // Text color for the selected option
  },
};

export default FilterOptions;
