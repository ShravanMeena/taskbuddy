import React from 'react';
import {View, StyleSheet} from 'react-native';
import {TBColors} from '@theme/TBTheme';

export const TBCard = ({
  children,
  center,
  centerAligned,
  row,
  color,
  even,
  spaceBetween,
  pTop,
  pBottom,
  pLeft,
  pRight,
  mTop,
  mBottom,
  mLeft,
  mRight,
  radius,
  reverse,
  height,
  width,
  radiusBottom,
  radiusTop,
  flex,
  end,
  justifyCenter,
  overflow,
  bottomLeftRadius,
  bottomRightRadius,
  fill,
  topLeftRadius,
  topRightRadius,
  absolute,
  avoidTouch,
  cardStyle,
  borderWidth,
  borderColor,
  backgroundColor,
  flexWrap,
}) => {
  return (
    <View
      pointerEvents={avoidTouch ? 'none' : 'auto'}
      style={[
        {
          ...(row && styles.row),
          ...(centerAligned && styles.centerAligned),
          ...(center && styles.center),
          ...(even && styles.evenSpaced),
          ...(spaceBetween && styles.spaceBetween),
          ...(reverse && styles.reverse),
          ...(end && styles.end),
          ...(justifyCenter && styles.justifyCenter),
          ...(flex && {flex: flex}),
          ...(fill && {flex: 1}),
          ...(bottomLeftRadius && {borderBottomLeftRadius: bottomLeftRadius}),
          ...(bottomRightRadius && {
            borderBottomRightRadius: bottomRightRadius,
          }),
          ...(topLeftRadius && {borderTopLeftRadius: topLeftRadius}),
          ...(topRightRadius && {borderTopRightRadius: topRightRadius}),
          backgroundColor: color || TBColors.transparent,
          ...(absolute && {
            position: 'absolute',
            top: pTop,
            bottom: pBottom,
            left: pLeft,
            right: pRight,
          }),
          ...(pBottom && {paddingBottom: pBottom}),
          ...(pLeft && {paddingLeft: pLeft}),
          ...(pRight && {paddingRight: pRight}),
          ...(pTop && {paddingTop: pTop}),
          marginBottom: mBottom || 0,
          marginLeft: mLeft || 0,
          marginRight: mRight || 0,
          marginTop: mTop || 0,
          borderRadius: radius || 0,
          overflow: overflow || 'visible',
          height: height,
          width: width,
          borderWidth: borderWidth || 0,
          borderColor: borderColor || TBColors.transparent,
          flexWrap: flexWrap,
          ...(cardStyle && cardStyle),
        },
      ]}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
  centerAligned: {
    alignItems: 'center',
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  evenSpaced: {
    justifyContent: 'space-evenly',
  },
  spaceBetween: {
    justifyContent: 'space-between',
  },
  reverse: {
    alignContent: 'flex-end',
  },
  end: {
    justifyContent: 'flex-end',
  },
  justifyCenter: {
    justifyContent: 'center',

  },
});

export default TBCard;
