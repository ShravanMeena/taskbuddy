/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  TBColors,
  TBComponentSize,
  TBFontSize,
  TBFontWeight,
  TBSpacing,
} from '../../theme/TBTheme';
import TBCard from './TBCard';
import TBText from './TBText';
import TBButton from './TBButton';
import {useNavigation} from '@react-navigation/native';

export default function TBHeader({title, btnText, screen}) {
  const {navigate} = useNavigation();

  const navigateToTaskDetails = () => {
    navigate(screen);
  };

  return (
    <TBCard row spaceBetween pLeft={TBSpacing.medium} pRight={TBSpacing.medium}>
      <TBText fontSize={TBFontSize.xxxl} fontWeight={TBFontWeight.bold}>
        {title}
      </TBText>
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
    </TBCard>
  );
}
