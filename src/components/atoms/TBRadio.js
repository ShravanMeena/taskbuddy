import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';

import {TBText, TBCard} from '.';
import {TBColors, TBComponentSize, TBFontSize, TBSpacing} from '@theme/TBTheme';

const TBRadio = ({isCompleted, onPress}) => {
  return (
    <TBCard center pTop={TBSpacing.xs}>
      <TouchableOpacity
        style={[styles.buttonContainer]}
        onPress={() => {
          onPress();
        }}>
        <TBText color={TBColors.green} fontSize={TBFontSize.xxxl}>
          {isCompleted ? '✔' : ''}
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
