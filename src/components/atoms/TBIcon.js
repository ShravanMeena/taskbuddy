import React from 'react';
import {Pressable} from 'react-native';
import TBCard from './TBCard';
import TBImage from './TBImage';
import {TBComponentSize} from '../../theme/TBTheme';

const TBIcon = ({
  imageContainerStyles,
  url,
  onPress,
  iconContainerStyles,
  radius,
  color,
  justifyCenter,
  height,
  width,
  tintColor,
  source,
  hitSlop,
}) => {
  return onPress ? (
    <TBCard radius={radius} justifyCenter={justifyCenter} color={color}>
      <Pressable
        // eslint-disable-next-line react-native/no-inline-styles
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          ...imageContainerStyles,
        }}
        onPress={() => {
          onPress();
        }}
        hitSlop={hitSlop}>
        {source ? (
          <TBImage
            source={source}
            height={height ? height : TBComponentSize.iconHeightM}
            width={width ? width : TBComponentSize.iconWidthM}
            tintColor={tintColor}
          />
        ) : (
          <TBImage
            url={url}
            height={height ? height : TBComponentSize.iconHeightM}
            width={width ? width : TBComponentSize.iconWidthM}
            tintColor={tintColor}
          />
        )}
      </Pressable>
    </TBCard>
  ) : (
    <TBCard
      radius={radius}
      center={justifyCenter}
      color={color}
      cardStyle={{...imageContainerStyles}}>
      {source ? (
        <TBImage
          source={source}
          height={height ? height : TBComponentSize.iconHeightM}
          width={width ? width : TBComponentSize.iconWidthM}
          imageStyle={iconContainerStyles}
          tintColor={tintColor}
        />
      ) : (
        <TBImage
          url={url}
          height={height ? height : TBComponentSize.iconHeightM}
          width={width ? width : TBComponentSize.iconWidthM}
          imageStyle={iconContainerStyles}
          tintColor={tintColor}
        />
      )}
    </TBCard>
  );
};

export default TBIcon;
