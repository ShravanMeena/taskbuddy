/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import TBCard from '../atoms/TBCard';
import {
  TBColors,
  TBComponentSize,
  TBFontSize,
  TBFontWeight,
  TBSpacing,
} from '../../theme/TBTheme';
import TBText from '../atoms/TBText';
import TBDivider from '../atoms/TBDivider';
import TBModal from './TBModal';

export default function TaskCompletedCard({task}) {
  return (
    <TBModal task={task}>
      <TBCard
        row
        cardStyle={{
          backgroundColor: TBColors.white,
        }}>
        <TBCard
          cardStyle={{
            width: TBComponentSize.iconHeightS,
            backgroundColor: '#ffe8c7',
          }}
        />
        <TBCard
          cardStyle={{
            padding: TBSpacing.large,
          }}>
          <TBText
            fontSize={TBFontSize.xxxl}
            fontWeight={TBFontWeight.semibold}
            style={{
              textDecorationLine: 'line-through',
            }}>
            {task.title}
          </TBText>
          <TBText fontSize={TBFontSize.large}>{task.description}</TBText>
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
    </TBModal>
  );
}
