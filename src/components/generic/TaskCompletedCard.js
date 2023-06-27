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
import TBModal from '../atoms/TBModal';
import {TBPriorityColor} from '../../constants/TBConstants';

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
            backgroundColor: TBPriorityColor[task.priority],
          }}
        />
        <TBCard
          cardStyle={{
            padding: TBSpacing.large,
          }}>
          <TBText
            numberOfLines={1}
            fontSize={TBFontSize.xxxl}
            fontWeight={TBFontWeight.semibold}
            style={{
              textDecorationLine: 'line-through',
            }}>
            {task.title}
          </TBText>
          <TBText numberOfLines={2} fontSize={TBFontSize.large}>
            {task.description}
          </TBText>
          <TBDivider
            mTop={TBSpacing.small}
            mBottom={TBSpacing.small}
            color={TBColors.lightGreyText}
            width={'100%'}
            height={1}
          />
          <TBText fontSize={TBFontSize.xl}>{task.selectedDate}</TBText>
        </TBCard>
      </TBCard>
    </TBModal>
  );
}
