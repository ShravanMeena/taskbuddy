import React from 'react';
import {TBComponentSize} from '../../../theme/TBTheme';
import TBButton from '../../atoms/TBButton';
import {prioritiesList} from '../../../models/dummyTasksData';
import {FlatList} from 'react-native';

export default function PrioritiesList({setTaskPriority}) {
  const renderItem = ({item}) => (
    <TBButton
      title={item.name}
      width={TBComponentSize.buttonWidthXS}
      onPress={() => setTaskPriority(item.name)}
    />
  );
  return (
    <FlatList
      data={prioritiesList}
      showsHorizontalScrollIndicator={false}
      horizontal
      renderItem={renderItem}
      keyExtractor={item => item.id}
    />
  );
}
