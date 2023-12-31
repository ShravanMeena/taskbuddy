import React from 'react';
import {Switch} from 'react-native';
import {TBColors, TBSpacing} from '@theme/TBTheme';
import {TBCard} from './';

const TBSwitch = ({
  value,
  onValueChange,
  color = TBColors.transparent,
  trueTrackColor,
}) => {
  return (
    <TBCard color={color} radius={TBSpacing.medium}>
      <Switch
        onValueChange={onValueChange}
        value={value}
        trackColor={{true: trueTrackColor}}
        style={{transform: [{scaleX: 0.7}, {scaleY: 0.7}]}}
      />
    </TBCard>
  );
};

export default TBSwitch;
