import React from 'react';
import {View} from 'react-native';

import {TBColors} from '@theme/TBTheme';

const TBSpacer = ({height = 10, width = 10, color = TBColors.transparent}) => {
  return (
    <View
      style={{
        height: height,
        width: width,
        backgroundColor: color,
      }}
    />
  );
};

export default TBSpacer;
