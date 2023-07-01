/* eslint-disable react/react-in-jsx-scope */
import {TBColors, TBFontSize, TBIconSize, TBSpacing} from '@theme/TBTheme';
import {TBText, TBSpacer, TBIcon, TBCard} from './';
const backArrow = require('@assets/images/backArrow.png');

const TBCommonHeader = ({
  header,
  left,
  leftUrl,
  onPressLeft,
  right,
  rightUrl,
  onPressRight,
  flex,
  imageContainerStyles,
  height,
  width,
  backgroundColor,
  pLeft = TBSpacing.medium,
  pRight = TBSpacing.medium,
  pTop = TBSpacing.small,
  pBottom = TBSpacing.small,
  end,
  radius,
  justifyCenter,
  textColor = TBColors.white,
  subtitle,
  leftIconSize,
  rightIconSize,
  color = TBColors.primary,
  hideIconBackgroundColor,
  leftImageSource = backArrow,
  rightImageSource,
  leftComponent,
}) => {
  return (
    <TBCard
      pLeft={pLeft}
      pRight={pRight}
      pTop={pTop}
      pBottom={pBottom}
      flex={flex}
      end={end}
      color={color}>
      <TBCard center>
        {left && (leftUrl || leftImageSource) ? (
          <TBCard absolute pLeft={0}>
            <TBIcon
              color={!hideIconBackgroundColor ? backgroundColor : undefined}
              radius={radius}
              justifyCenter={justifyCenter}
              url={leftUrl}
              source={leftImageSource}
              height={leftIconSize}
              width={leftIconSize}
              onPress={() => onPressLeft && onPressLeft()}
              imageContainerStyles={{
                height: height || TBIconSize.iconContainerHeight,
                width: width || TBIconSize.iconContainerWidth,
              }}
            />
          </TBCard>
        ) : (
          <TBSpacer />
        )}
        {left && leftComponent && (
          <TBCard absolute pLeft={0} center>
            {leftComponent()}
          </TBCard>
        )}
        <TBText semibold fontSize={TBFontSize.xxxl} color={textColor}>
          {header}
        </TBText>
        {subtitle && (
          <>
            <TBSpacer height={TBSpacing.xs} />
            <TBText
              color={TBColors.white90}
              semibold
              fontSize={TBFontSize.medium}>
              {subtitle}
            </TBText>
          </>
        )}
        {right && rightUrl ? (
          <TBCard absolute pRight={0}>
            <TBIcon
              color={backgroundColor}
              radius={radius}
              justifyCenter={justifyCenter}
              url={rightUrl}
              source={rightImageSource}
              height={rightIconSize}
              width={rightIconSize}
              onPress={() => onPressRight && onPressRight()}
              imageContainerStyles={{
                height: height || TBIconSize.iconContainerHeight,
                width: width || TBIconSize.iconContainerWidth,
              }}
            />
          </TBCard>
        ) : (
          <TBSpacer />
        )}
      </TBCard>
    </TBCard>
  );
};

export default TBCommonHeader;
