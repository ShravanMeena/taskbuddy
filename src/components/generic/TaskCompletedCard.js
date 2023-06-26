import {View, Text} from 'react-native';
import React from 'react';
import TBCard from '../atoms/TBCard';
import {
  TBColors,
  TBFontSize,
  TBFontWeight,
  TBSpacing,
} from '../../theme/TBTheme';
import TBText from '../atoms/TBText';
import TBDivider from '../atoms/TBDivider';

export default function TaskCompletedCard() {
  return (
    <TBCard row>
      <TBCard
        cardStyle={{
          width: 10,
          backgroundColor: '#ffe8c7',
          borderTopLeftRadius: TBSpacing.medium,
          borderBottomLeftRadius: TBSpacing.medium,
        }}
      />
      <TBCard
        cardStyle={{
          padding: TBSpacing.large,
          backgroundColor: TBColors.white,
          borderTopRightRadius: TBSpacing.medium,
          borderBottomRightRadius: TBSpacing.medium,
        }}>
        <TBText
          fontSize={TBFontSize.xxxl}
          fontWeight={TBFontWeight.semibold}
          style={{
            textDecorationLine: 'line-through',
          }}>
          Design UI To-Do App
        </TBText>
        <TBText fontSize={TBFontSize.large}>
          Dooit is a task management and productivity booster app. You can
          write...
        </TBText>
        <TBDivider
          mTop={TBSpacing.small}
          mBottom={TBSpacing.small}
          color={TBColors.lightGreyText}
          width={'100%'}
          height={1}
        />
        <TBText fontSize={TBFontSize.xl}>Friday, 09 July 2023</TBText>
      </TBCard>
    </TBCard>
  );
}
