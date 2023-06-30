import React, {useState} from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';

import {TBText, TBCard} from '.';
import {TBColors, TBComponentSize, TBFontSize, TBSpacing} from '@theme/TBTheme';

const TBRadio = ({isCompleted, onPress}) => {
  const [active, setActive] = useState(isCompleted);

  return (
    <TBCard center pTop={TBSpacing.xs}>
      <TouchableOpacity
        style={[styles.buttonContainer]}
        onPress={() => {
          onPress();
          setActive(!active);
        }}>
        <TBText color={TBColors.green} fontSize={TBFontSize.xxxl}>
          {active ? '✔' : ''}
        </TBText>
      </TouchableOpacity>
    </TBCard>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    height: TBComponentSize.circularButtonSize,
    width: TBComponentSize.circularButtonSize,
    borderWidth: 2,
    borderColor: TBColors.green,
    borderRadius: TBComponentSize.circularButtonRadius,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default TBRadio;
