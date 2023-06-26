/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {TBStrings} from '../../constants/TBConstants';
import {
  TBColors,
  TBComponentSize,
  TBFontSize,
  TBFontWeight,
} from '../../theme/TBTheme';

import TBText from '../../components/atoms/TBText';
import TBButton from '../../components/atoms/TBButton';
import TBCard from '../../components/atoms/TBCard';
import TBImage from '../../components/atoms/TBImage';
import TBSpacer from '../../components/atoms/TBSpacer';

const ToDoListPng = require('../../assets/images/to_do_list.png');

export default function Landing() {
  return (
    <TBCard flex={1} spaceBetween>
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
          title={TBStrings.startBtnText}
          width={TBComponentSize.buttonWidth}
          borderRadius={TBComponentSize.circularButtonRadius}
          titleStyle={{color: TBColors.white, fontSize: TBFontSize.xxl}}
        />
      </TBCard>
    </TBCard>
  );
}
