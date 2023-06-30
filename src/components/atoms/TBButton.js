import React from 'react';

import {
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
  Dimensions,
} from 'react-native';

import {TBColors, TBComponentSize, TBFontSize, TBSpacing} from '@theme/TBTheme';
import {TBText, TBSpacer, TBImage} from './';

const TBButton = ({
  title,
  containerStyle,
  titleStyle,
  disabled,
  onPress,
  activeOpacity,
  testID,
  titleColor,
  iconLeft,
  iconRight,
  borderRadius,
  children,
  height,
  width,
  backgroundColor,
  iconLeftUrl,
  iconRightUrl,
  loading = false,
  loadingText = '',
  iconHeight = TBComponentSize.iconHeight,
  iconWidth = TBComponentSize.iconWidth,
}) => {
  const titleComponent = title ? (
    <TBText
      semibold
      color={
        titleColor ? titleColor : disabled ? TBColors.white : TBColors.white
      }
      //@ts-ignore
      style={{...styles.titleStyle, ...titleStyle}}>
      {title}
    </TBText>
  ) : (
    children
  );

  const loadingComponent = loadingText ? (
    <TBText
      semibold
      color={
        titleColor ? titleColor : disabled ? TBColors.white : TBColors.black
      }
      //@ts-ignore
      style={{...styles.titleStyle, ...titleStyle}}>
      {loadingText}
    </TBText>
  ) : (
    children
  );

  return (
    <TouchableOpacity
      style={{
        ...styles.container,
        ...containerStyle,
        backgroundColor: backgroundColor ? backgroundColor : TBColors.primary,
        ...(disabled && styles.greyBackGround),
        ...{borderRadius: borderRadius},
        ...(height && {height: height}),
        ...(width && {width: width}),
        ...{},
      }}
      disabled={disabled || loading}
      onPress={() => {
        onPress();
      }}
      activeOpacity={activeOpacity}
      testID={testID}>
      {!loading && iconLeft && (
        <TBImage source={iconLeft} height={iconHeight} width={iconWidth} />
      )}
      {!loading && iconLeftUrl && (
        <TBImage url={iconLeftUrl} height={iconHeight} width={iconWidth} />
      )}
      <TBSpacer width={TBSpacing.small} />
      {loading ? (
        <>
          {loadingText ? (
            <>
              <ActivityIndicator size={8} color="#000" />
              <TBSpacer width={TBSpacing.small} />
              {loadingComponent}
            </>
          ) : (
            <ActivityIndicator size={12} color="#000" />
          )}
        </>
      ) : (
        titleComponent
      )}
      <TBSpacer width={TBSpacing.small} />
      {!loading && iconRight && (
        <TBImage source={iconRight} height={iconHeight} width={iconWidth} />
      )}
      {!loading && iconRightUrl && (
        <TBImage url={iconRightUrl} height={iconHeight} width={iconWidth} />
      )}
    </TouchableOpacity>
  );
};

const {width} = Dimensions.get('screen');

const styles = StyleSheet.create({
  container: {
    // width: width - TBSpacing.small,
    height: 3 * TBSpacing.medium,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  greyBackGround: {
    backgroundColor: TBColors.grey,
  },
  titleStyle: {
    fontSize: TBFontSize.large,
  },
});

export default TBButton;
