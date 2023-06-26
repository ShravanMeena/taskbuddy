/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  TBColors,
  TBComponentSize,
  TBFontSize,
  TBFontWeight,
} from '../../theme/TBTheme';
import TBCard from './TBCard';
import TBText from './TBText';
import TBButton from './TBButton';

export default function TBHeader({title, btnText, onPress}) {
  return (
    <TBCard row spaceBetween>
      <TBText fontSize={TBFontSize.xxxl} fontWeight={TBFontWeight.bold}>
        {title}
      </TBText>
      <TBButton
        onPress={onPress}
        width={TBComponentSize.buttonWidthXS}
        backgroundColor={TBColors.transparent}
        containerStyle={{
          justifyContent: 'flex-end',
        }}
        titleStyle={{
          fontSize: TBFontSize.xl,
          color: TBColors.primary,
        }}
        title={btnText || 'See all'}
      />
    </TBCard>
  );
}
