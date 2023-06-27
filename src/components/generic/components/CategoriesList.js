import React from 'react';
import TBButton from '../../atoms/TBButton';
import {TBComponentSize} from '../../../theme/TBTheme';
import {FlatList} from 'react-native';

export default function CategoriesList({setTaskCategory}) {
  const renderItem = ({item}) => (
    <TBButton
      title={item}
      width={TBComponentSize.buttonWidthXS}
      onPress={() => setTaskCategory(item)}
    />
  );
  return (
    <FlatList
      data={['GENERAL', 'HOME', 'GYM']}
      showsHorizontalScrollIndicator={false}
      horizontal
      renderItem={renderItem}
      keyExtractor={item => item}
    />
  );
}
