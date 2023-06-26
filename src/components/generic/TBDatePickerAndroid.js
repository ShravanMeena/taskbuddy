import React, {useState} from 'react';
import {View, Button, Modal, TextInput} from 'react-native';

const CustomDateTimePicker = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedMonth, setSelectedMonth] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [selectedAMPM, setSelectedAMPM] = useState('');

  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const handleConfirm = () => {
    // Handle the selected date and time
    const formattedDate = `${selectedDate} ${selectedMonth}`;
    const formattedTime =
      selectedTime !== '' ? `${selectedTime} ${selectedAMPM}` : '';
    const selectedDateTime = `${formattedDate} ${formattedTime}`;

    console.log(selectedDateTime);

    // Close the date-time picker
    setModalVisible(false);
  };

  const renderMonthOptions = () => {
    return months.map(month => (
      <Button
        key={month}
        title={month}
        onPress={() => setSelectedMonth(month)}
      />
    ));
  };

  return (
    <View>
      <Button
        title="Select Date & Time"
        onPress={() => setModalVisible(true)}
      />

      <Modal
        visible={modalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setModalVisible(false)}>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <View style={{backgroundColor: 'white', padding: 16}}>
            <TextInput
              placeholder="Select Date"
              value={selectedDate}
              onChangeText={text => setSelectedDate(text)}
            />

            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              {renderMonthOptions()}
            </View>

            <TextInput
              placeholder="Select Time"
              value={selectedTime}
              onChangeText={text => setSelectedTime(text)}
              keyboardType="numeric"
            />

            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Button title="AM" onPress={() => setSelectedAMPM('AM')} />
              <Button title="PM" onPress={() => setSelectedAMPM('PM')} />
            </View>

            <Button title="Confirm" onPress={handleConfirm} />
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default CustomDateTimePicker;
