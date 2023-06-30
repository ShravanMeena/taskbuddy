import React from 'react';
import {FlatList} from 'react-native';

import {TBButton} from '../../atoms';
import {TBComponentSize} from '@theme/TBTheme';

export default function List({setValue, data}) {
  const renderItem = ({item}) => (
    <TBButton
      title={item.name}
      containerStyle={{marginLeft: 10}}
      width={TBComponentSize.buttonWidthXS}
      onPress={() => setValue(item.name)}
    />
  );
  return (
    <FlatList
      data={data}
      showsHorizontalScrollIndicator={false}
      horizontal
      renderItem={renderItem}
      keyExtractor={item => item.id}
    />
  );
}
