import React from 'react';
import {TextInput, StyleSheet} from 'react-native';

import TBCard from './TBCard';
import {
  TBColors,
  TBComponentSize,
  TBFontFamily,
  TBFontSize,
  TBFontWeight,
  TBSpacing,
} from '../../theme/TBTheme';
import TBIcon from './TBIcon';
import TBText from './TBText';

const TBInput = ({
  placeholder,
  value,
  placeholderTextColor = TBColors.placeholderWhite,
  onChangeText,
  autoCapitalize,
  keyboardType,
  secureTextEntry,
  textInputStyle,
  left = false,
  leftText,
  leftIconUrl,
  right = false,
  rightText,
  onRightIconPress,
  spaceBetween,
  color,
  rightIconUrl,
  height = TBSpacing.xxxxxl,
  maxLength,
  editable,
  returnKeyType,
  multiline = false,
  textAlignVertical,
  leftImageSource,
  rightImageSource,
}) => {
  return (
    <TBCard
      centerAligned
      pRight={TBSpacing.medium}
      pLeft={left ? TBSpacing.medium : undefined}
      row
      radius={TBSpacing.medium}
      color={color ? color : TBColors.grey}
      spaceBetween={spaceBetween}
      height={height}>
      {left && leftIconUrl && (
        <TBIcon
          url={leftIconUrl}
          height={TBComponentSize.iconHeightM}
          width={TBComponentSize.iconWidthM}
          source={leftImageSource}
        />
      )}
      {left && (leftText || leftImageSource) && (
        <TBText
          style={{paddingBottom: TBSpacing.small / 2}}
          semibold
          color={TBColors.placeholderWhite}
          fontSize={TBFontSize.large}>
          {leftText}
        </TBText>
      )}
      <TextInput
        placeholder={placeholder}
        value={value}
        placeholderTextColor={placeholderTextColor}
        onFocus={() => {}}
        onChangeText={onChangeText}
        autoCapitalize={autoCapitalize}
        keyboardType={keyboardType}
        secureTextEntry={secureTextEntry}
        style={[styles.baseStyle, textInputStyle, {height: height}]}
        maxLength={maxLength}
        editable={editable}
        returnKeyType={returnKeyType ?? 'done'}
        multiline={multiline}
        textAlignVertical={textAlignVertical}
      />
      {right && (rightIconUrl || rightImageSource) && (
        <TBIcon
          url={rightIconUrl}
          height={TBComponentSize.iconHeightM}
          width={TBComponentSize.iconWidthM}
          onPress={onRightIconPress}
          source={rightImageSource}
        />
      )}
      {right && rightText && (
        <TBText
          style={{paddingBottom: TBSpacing.small / 2}}
          semibold
          color={TBColors.placeholderWhite}
          fontSize={TBFontSize.large}>
          {rightText}
        </TBText>
      )}
    </TBCard>
  );
};

const styles = StyleSheet.create({
  baseStyle: {
    color: TBColors.white,
    fontSize: TBFontSize.large,
    fontWeight: TBFontWeight.medium,
    marginLeft: TBSpacing.xm,
    marginRight: TBSpacing.xm,
    flex: 1,
    fontFamily: TBFontFamily.regular,
  },
});

export default TBInput;
