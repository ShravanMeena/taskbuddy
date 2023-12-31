/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  TBColors,
  TBComponentSize,
  TBFontSize,
  TBFontWeight,
  TBSpacing,
} from '@theme/TBTheme';
import {TBCard, TBText, TBButton} from './';

export default function TBHeader({title, btnText, screen, completed, hideBtn}) {
  const {navigate} = useNavigation();

  const navigateToTaskDetails = () => {
    navigate(screen, {title, completed});
  };

  return (
    <TBCard row spaceBetween pLeft={TBSpacing.medium} pRight={TBSpacing.medium}>
      <TBText fontSize={TBFontSize.xxxl} fontWeight={TBFontWeight.bold}>
        {title}
      </TBText>
      {!hideBtn && (
        <TBButton
          onPress={navigateToTaskDetails}
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
      )}
    </TBCard>
  );
}
