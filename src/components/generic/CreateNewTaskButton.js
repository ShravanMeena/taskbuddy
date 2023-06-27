import React from 'react';
import TBModal from '../atoms/TBModal';
import TBCard from '../atoms/TBCard';
import {
  TBColors,
  TBFontSize,
  TBFontWeight,
  TBSpacing,
} from '../../theme/TBTheme';
import TBText from '../atoms/TBText';
import TBSpacer from '../atoms/TBSpacer';

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
            CREATE NEW TASK
          </TBText>
        </TBCard>
      </TBCard>
      <TBSpacer />
    </TBModal>
  );
}
