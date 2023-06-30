/* eslint-disable react-native/no-inline-styles */
import React from 'react';

import {TBStrings} from '../../constants/TBConstants';
import {useNavigation} from '@react-navigation/native';
import {ScreensName} from '../../constants/NavigationConstants';

import {
  TBButton,
  TBCard,
  TBImage,
  TBSpacer,
  TBText,
} from '../../components/atoms';

import {
  TBColors,
  TBComponentSize,
  TBFontSize,
  TBFontWeight,
  TBSpacing,
} from '../../theme/TBTheme';

const ToDoListPng = require('../../assets/images/to_do_list.png');

export default function Landing() {
  const {navigate} = useNavigation();

  const navigateToHome = () => {
    navigate(ScreensName.Home);
  };
  return (
    <TBCard
      flex={1}
      spaceBetween
      cardStyle={{
        padding: TBSpacing.large,
        backgroundColor: TBColors.white,
      }}>
      <TBCard>
        <TBText fontSize={TBFontSize.xxxxxl} fontWeight={TBFontWeight.bolder}>
          {TBStrings.landingTitle}{' '}
          <TBText
            style={{color: TBColors.primary, textDecorationLine: 'underline'}}
            fontSize={TBFontSize.xxxxxl}
            fontWeight={TBFontWeight.bolder}>
            {TBStrings.appName}
          </TBText>
        </TBText>
        <TBSpacer />
        <TBImage
          source={ToDoListPng}
          resizeMode="cover"
          style={{
            height: TBComponentSize.imageHeight,
          }}
        />
        <TBText fontSize={TBFontSize.xl}>{TBStrings.landingDescription}</TBText>
      </TBCard>

      <TBCard center>
        <TBButton
          onPress={navigateToHome}
          title={TBStrings.startBtnText}
          width={TBComponentSize.buttonWidth}
          borderRadius={TBComponentSize.circularButtonRadius}
          titleStyle={{color: TBColors.white, fontSize: TBFontSize.xxl}}
        />
      </TBCard>
    </TBCard>
  );
}
