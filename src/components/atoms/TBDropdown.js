import React, {useState} from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';
import {TBCard, TBText} from './';

const TBDropdown = ({options, onSelect}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionSelect = option => {
    setSelectedOption(option);
    onSelect(option);
    setIsOpen(false);
  };

  return (
    <TBCard style={styles.container}>
      <TouchableOpacity style={styles.dropdownHeader} onPress={toggleDropdown}>
        <TBText style={styles.selectedOption}>
          {selectedOption || 'Select an option'}
        </TBText>
        <TBText style={styles.arrow}>{isOpen ? '▲' : '▼'}</TBText>
      </TouchableOpacity>
      {isOpen && (
        <TBCard style={styles.dropdownOptions}>
          {options.map(option => (
            <TouchableOpacity
              key={option}
              style={styles.option}
              onPress={() => handleOptionSelect(option)}>
              <TBText>{option}</TBText>
            </TouchableOpacity>
          ))}
        </TBCard>
      )}
    </TBCard>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    zIndex: 1,
  },
  dropdownHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: '#f2f2f2',
  },
  selectedOption: {
    flex: 1,
    marginRight: 10,
  },
  arrow: {
    fontSize: 14,
  },
  dropdownOptions: {
    // position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    padding: 10,
    maxHeight: 200,
    zIndex: 2,
  },
  option: {
    paddingVertical: 8,
    paddingHorizontal: 12,
  },
});

export default TBDropdown;
