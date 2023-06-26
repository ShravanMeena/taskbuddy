import React from 'react';
import {Pressable, StyleSheet} from 'react-native';
import TBCard from './TBCard';
import TBImage from './TBImage';
import TBSpacer from './TBSpacer';
import TBText from './TBText';
import {TBColors, TBComponentSize, TBSpacing} from '../../theme/TBTheme';

const TBCircularButton = ({data, onPress, color = TBColors.grey}) => {
  return (
    <TBCard center width={'25%'} pTop={TBSpacing.xs}>
      <Pressable
        style={[styles.buttonContainer, {backgroundColor: color}]}
        onPress={() => onPress(data.key)}>
        <TBImage url={data.icon} height={14} width={15} />
      </Pressable>
      <TBSpacer height={TBSpacing.small} />
      <TBText semibold>{data.title}</TBText>
    </TBCard>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    height: TBComponentSize.circularButtonSize,
    width: TBComponentSize.circularButtonSize,
    borderRadius: TBComponentSize.circularButtonRadius,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default TBCircularButton;
