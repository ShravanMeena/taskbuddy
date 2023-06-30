import React from 'react';
import TBButton from '../../atoms/TBButton';
import {TBComponentSize} from '../../../theme/TBTheme';
import {FlatList} from 'react-native';
import {CategoriesListData} from '../../../models/dummyTasksData';

export default function CategoriesList({setTaskCategory}) {
  const renderItem = ({item}) => (
    <TBButton
      title={item.name}
      width={TBComponentSize.buttonWidthXS}
      onPress={() => setTaskCategory(item.name)}
    />
  );
  return (
    <FlatList
      data={CategoriesListData}
      showsHorizontalScrollIndicator={false}
      horizontal
      renderItem={renderItem}
      keyExtractor={item => item}
    />
  );
}
