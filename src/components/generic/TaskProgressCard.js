import React from 'react';
import TBCard from '../atoms/TBCard';
import {
  TBColors,
  TBFontSize,
  TBFontWeight,
  TBSpacing,
} from '../../theme/TBTheme';
import TBText from '../atoms/TBText';
import TBSpacer from '../atoms/TBSpacer';
import TBDivider from '../atoms/TBDivider';

export default function TaskProgressCard() {
  return (
    <>
      <TBCard
        cardStyle={{
          padding: TBSpacing.large,
          backgroundColor: TBColors.white,
          borderTopLeftRadius: TBSpacing.medium,
          borderTopRightRadius: TBSpacing.medium,
        }}>
        <TBText fontSize={TBFontSize.xxxl} fontWeight={TBFontWeight.semibold}>
          Design UI To-Do App
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
        <TBText fontSize={TBFontSize.large}>
          Dooit is a task management and productivity booster app. You can write
          what you need to do every day. Never miss a task and focus on what
          matters to your productivity.
        </TBText>
        <TBSpacer />
        <TBCard row spaceBetween>
          <TBCard>
            <TBText fontSize={TBFontSize.large} color={TBColors.lightGreyText}>
              Priority:
            </TBText>
            <TBText fontSize={TBFontSize.large}>HIGH</TBText>
          </TBCard>
          <TBCard>
            <TBText fontSize={TBFontSize.large} color={TBColors.lightGreyText}>
              Category:
            </TBText>
            <TBText fontSize={TBFontSize.large}>Personal</TBText>
          </TBCard>
        </TBCard>
      </TBCard>
      <TBCard
        cardStyle={{
          height: 10,
          backgroundColor: '#ffe8c7',
          borderBottomLeftRadius: TBSpacing.medium,
          borderBottomRightRadius: TBSpacing.medium,
        }}
      />
    </>
  );
}
