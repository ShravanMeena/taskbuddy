/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  TBColors,
  TBComponentSize,
  TBFontSize,
  TBFontWeight,
  TBSpacing,
} from '@theme/TBTheme';

import {TBPriorityColor} from '@constants/TBConstants';

import {TBModal, TBDivider, TBText, TBCard} from '../atoms/TBModal';

export default function TaskCompletedCard({task}) {
  let {fullDate} = task.selectedDate;

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
          <TBText fontSize={TBFontSize.xl}>{fullDate}</TBText>
        </TBCard>
      </TBCard>
    </TBModal>
  );
}
