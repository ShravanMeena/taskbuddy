import React from 'react';
import {
  TBColors,
  TBFontSize,
  TBFontWeight,
  TBSpacing,
} from '../../theme/TBTheme';
import TBSpacer from '../atoms/TBSpacer';
import {TBCard, TBModal, TBText} from '../atoms';
import {TBStrings} from '../../constants/TBConstants';

export default function CreateNewTaskButton() {
  return (
    <TBModal>
      <TBCard center>
        <TBCard
          center
          cardStyle={{
            backgroundColor: TBColors.primary,
            padding: TBSpacing.medium,
            borderRadius: TBSpacing.llx,
            width: '80%',
          }}>
          <TBText
            fontSize={TBFontSize.xxxl}
            fontWeight={TBFontWeight.bolder}
            color={TBColors.white}>
            {TBStrings.commonCreateBtnText}
          </TBText>
        </TBCard>
      </TBCard>
      <TBSpacer />
    </TBModal>
  );
}
