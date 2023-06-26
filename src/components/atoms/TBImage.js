import React from 'react';
import {Image} from 'react-native';

const TBImage = ({
  radius,
  url,
  imageStyle,
  resizeMode,
  fallbackUrl,
  onLoadEnd,
  testID,
  height,
  width,
  source,
  position,
  right,
  left,
  top,
  bottom,
  style,
  tintColor,
}) => {
  const [imageUrl, setImageUrl] = React.useState(url);
  const [fallbackTiggered, setFallbackTiggered] = React.useState(false);

  React.useEffect(() => {
    if (!!url) {
      setImageUrl(url);
    }
  }, [url]);

  if (!url) {
    return (
      <Image
        style={{height: height, width: width, borderRadius: radius, ...style}}
        source={source || 'tabHome'}
        resizeMode={resizeMode || 'contain'}
        accessibilityLabel={testID}
        testID={testID}
      />
    );
  }

  const onImageLoadEnd = () => {
    if (typeof onLoadEnd === 'function') {
      onLoadEnd();
    }
  };

  const onError = () => {
    if (!fallbackTiggered && fallbackUrl) {
      setImageUrl(fallbackUrl);
      setFallbackTiggered(true);
    } else {
      onImageLoadEnd();
    }
  };

  return (
    <Image
      style={{
        height: height,
        width: width,
        borderRadius: radius,
        position: position || 'relative',
        right: right,
        left: left,
        top: top,
        bottom: bottom,
        tintColor: tintColor,
      }}
      source={{uri: imageUrl, cache: 'force-cache'}}
      onLoadEnd={onLoadEnd}
      onError={onError}
      resizeMode={resizeMode || 'contain'}
      accessibilityLabel={testID}
      testID={testID}
    />
  );
};

export default TBImage;
