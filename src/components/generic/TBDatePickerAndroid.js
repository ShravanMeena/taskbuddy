/* eslint-disable react/no-unstable-nested-components */
import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from 'react-native';
import TBModal from '../atoms/TBModal';
import TBCard from '../atoms/TBCard';
import {TBComponentSize, TBSpacing} from '../../theme/TBTheme';
import {
  dates,
  hours,
  minutes,
  months,
  monthsShort,
  years,
} from '../../models/monthData';
import TBSpacer from '../atoms/TBSpacer';
import TBButton from '../atoms/TBButton';

const TBDatePickerAndroid = ({onPress}) => {
  const [selectedYear, setSelectedYear] = useState(2023);
  const [selectedMonth, setSelectedMonth] = useState('Jan');
  const [selectedDate, setSelectedDate] = useState('01');
  const [selectedHour, setSelectedHour] = useState('00');
  const [selectedMinute, setSelectedMinute] = useState('00');

  const Option = ({value, selectedValue, onSelect}) => (
    <TouchableOpacity onPress={() => onSelect(value)}>
      <Text
        style={value === selectedValue ? styles.selected : styles.unselected}>
        {value}
      </Text>
    </TouchableOpacity>
  );

  const saveTimeAndDate = () => {
    let timeDate = `${selectedDate} ${selectedMonth}, ${selectedHour}:${selectedMinute}, ${selectedYear}`;
    onPress(timeDate);
  };

  useEffect(() => {
    saveTimeAndDate();
  }, [selectedDate, selectedHour, selectedMinute, selectedMonth, selectedYear]);

  return (
    <View>
      <TBModal
        renderComponent={() => (
          <TBCard>
            <TBCard
              row
              spaceBetween
              cardStyle={{
                paddingVertical: TBSpacing.large,
              }}>
              <TBCard
                cardStyle={{
                  marginLeft: TBSpacing.large,
                }}>
                <Text>Year</Text>
                <TBSpacer />
                <ScrollView
                  showsVerticalScrollIndicator={false}
                  style={{
                    height: TBComponentSize.cardHeightL,
                  }}>
                  {years.map((year, index) => (
                    <Option
                      key={index}
                      value={year}
                      selectedValue={selectedYear}
                      onSelect={setSelectedYear}
                    />
                  ))}
                </ScrollView>
              </TBCard>
              <TBCard
                cardStyle={{
                  marginLeft: TBSpacing.large,
                }}>
                <Text>Month</Text>
                <TBSpacer />

                <ScrollView
                  showsVerticalScrollIndicator={false}
                  style={{
                    height: TBComponentSize.cardHeightS,
                  }}>
                  {months.map((month, index) => (
                    <Option
                      key={index}
                      value={monthsShort[month]}
                      selectedValue={selectedMonth}
                      onSelect={setSelectedMonth}
                    />
                  ))}
                </ScrollView>
              </TBCard>

              <TBCard
                cardStyle={{
                  marginLeft: TBSpacing.large,
                }}>
                <Text>Date</Text>
                <TBSpacer />

                <ScrollView
                  showsVerticalScrollIndicator={false}
                  style={{
                    height: TBComponentSize.cardHeightS,
                  }}>
                  {dates.map((date, index) => (
                    <Option
                      key={index}
                      value={date}
                      selectedValue={selectedDate}
                      onSelect={setSelectedDate}
                    />
                  ))}
                </ScrollView>
              </TBCard>

              <TBCard
                cardStyle={{
                  marginLeft: TBSpacing.large,
                }}>
                <Text>Hour</Text>
                <TBSpacer />

                <ScrollView
                  showsVerticalScrollIndicator={false}
                  style={{
                    height: TBComponentSize.cardHeightS,
                  }}>
                  {hours.map((hour, index) => (
                    <Option
                      key={index}
                      value={hour}
                      selectedValue={selectedHour}
                      onSelect={setSelectedHour}
                    />
                  ))}
                </ScrollView>
              </TBCard>

              <TBCard
                cardStyle={{
                  marginLeft: TBSpacing.large,
                }}>
                <Text>Minute</Text>
                <TBSpacer />

                <ScrollView
                  showsVerticalScrollIndicator={false}
                  style={{
                    height: TBComponentSize.cardHeightS,
                  }}>
                  {minutes.map((minute, index) => (
                    <Option
                      key={index}
                      value={minute}
                      selectedValue={selectedMinute}
                      onSelect={setSelectedMinute}
                    />
                  ))}
                </ScrollView>
              </TBCard>
            </TBCard>
          </TBCard>
        )}>
        <TBButton title={'Select Date And Time'} disabled />
      </TBModal>
    </View>
  );
};

const styles = StyleSheet.create({
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  selected: {
    fontSize: 20,
    color: 'black',
  },
  unselected: {
    fontSize: 18,
    color: 'gray',
  },
});

export default TBDatePickerAndroid;
