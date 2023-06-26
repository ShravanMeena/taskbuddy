import React from 'react';
import {Text} from 'react-native';
import {TBColors, TBFontFamily, TBFontSize} from '../../theme/TBTheme';

const TBText = ({
  style,
  children,
  fontWeight,
  testID,
  fontStyle,
  fontSize,
  textAlign,
  // opacity,
  color,
  heavy,
  semibold,
  bold,
  medium,
  pLeft,
  pRight,
  pTop,
  pBottom,
  pHorizontal,
  pVertical,
  onPress,
  backgroundColor,
  regular,
}) => {
  const getFontFamily = () => {
    if (semibold) {
      return TBFontFamily.semiBold;
    } else if (heavy) {
      return TBFontFamily.heavy;
    } else if (bold) {
      return TBFontFamily.bold;
    } else if (medium) {
      return TBFontFamily.medium;
    } else if (regular) {
      return TBFontFamily.regular;
    }
    return TBFontFamily.medium;
  };

  return (
    <Text
      allowFontScaling={false}
      style={{
        fontStyle: fontStyle || 'normal',
        color: color || TBColors.black,
        fontFamily: getFontFamily(),
        fontSize: fontSize || TBFontSize.regular,
        textAlign: textAlign || 'auto',
        // opacity: opacity ? opacity : 1,
        fontWeight: fontWeight || null,
        backgroundColor: backgroundColor || TBColors.transparent,
        paddingBottom: pBottom || 0,
        paddingLeft: pLeft || 0,
        paddingRight: pRight || 0,
        paddingTop: pTop || 0,
        paddingVertical: pVertical || 0,
        paddingHorizontal: pHorizontal || 0,
        ...style,
      }}
      onPress={onPress}
      accessibilityLabel={testID}
      testID={testID}>
      {children}
    </Text>
  );
};

export default TBText;
