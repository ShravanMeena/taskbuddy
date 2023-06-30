import React from 'react';
import {useNavigation} from '@react-navigation/native';

import {
  TBColors,
  TBComponentSize,
  TBFontSize,
  TBFontWeight,
  TBSpacing,
} from '@theme/TBTheme';

import {TBStrings} from '@constants/TBConstants';
import {ScreensName} from '@constants/NavigationConstants';

import {TBButton, TBCard, TBImage, TBSpacer, TBText} from '@components/atoms';

const ToDoListPng = require('@assets/images/to_do_list.png');

const {landingTitle, landingDescription, appName, startBtnText} = TBStrings;

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
          {landingTitle}{' '}
          <TBText
            style={{color: TBColors.primary, textDecorationLine: 'underline'}}
            fontSize={TBFontSize.xxxxxl}
            fontWeight={TBFontWeight.bolder}>
            {appName}
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
        <TBText fontSize={TBFontSize.xl}>{landingDescription}</TBText>
      </TBCard>

      <TBCard center>
        <TBButton
          onPress={navigateToHome}
          title={startBtnText}
          width={TBComponentSize.buttonWidth}
          borderRadius={TBComponentSize.circularButtonRadius}
          titleStyle={{color: TBColors.white, fontSize: TBFontSize.xxl}}
        />
      </TBCard>
    </TBCard>
  );
}
