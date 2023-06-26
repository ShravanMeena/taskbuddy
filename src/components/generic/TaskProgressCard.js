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
import TBSpacer from '../atoms/TBSpacer';
import TBDivider from '../atoms/TBDivider';
import TBModal from './TBModal';

export default function TaskProgressCard({task}) {
  return (
    <TBModal task={task}>
      <TBCard
        cardStyle={{
          padding: TBSpacing.large,
          backgroundColor: TBColors.white,
          borderTopLeftRadius: TBSpacing.medium,
          borderTopRightRadius: TBSpacing.medium,
        }}>
        <TBText fontSize={TBFontSize.xxxl} fontWeight={TBFontWeight.semibold}>
          {task.title}
        </TBText>
        <TBSpacer />
        <TBText fontSize={TBFontSize.xl}>Friday, 09 July 2023</TBText>
        <TBDivider
          mTop={TBSpacing.large}
          mBottom={TBSpacing.large}
          color={TBColors.lightGreyText}
          width={'100%'}
          height={1}
        />
        <TBText fontSize={TBFontSize.large} color={TBColors.lightGreyText}>
          Description:
        </TBText>
        <TBText fontSize={TBFontSize.large}>{task.description}</TBText>
        <TBSpacer />
        <TBCard row spaceBetween>
          <TBCard>
            <TBText fontSize={TBFontSize.large} color={TBColors.lightGreyText}>
              Priority:
            </TBText>
            <TBText fontSize={TBFontSize.large}>
              {task.priority?.toUpperCase()}
            </TBText>
          </TBCard>
          <TBCard>
            <TBText fontSize={TBFontSize.large} color={TBColors.lightGreyText}>
              Category:
            </TBText>
            <TBText fontSize={TBFontSize.large}>
              {task.category?.toUpperCase()}
            </TBText>
          </TBCard>
        </TBCard>
      </TBCard>
      <TBCard
        cardStyle={{
          height: TBComponentSize.iconHeightS,
          backgroundColor: '#ffe8c7',
          borderBottomLeftRadius: TBSpacing.medium,
          borderBottomRightRadius: TBSpacing.medium,
        }}
      />
    </TBModal>
  );
}
