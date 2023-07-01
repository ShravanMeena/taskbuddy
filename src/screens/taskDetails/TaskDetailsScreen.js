import React from 'react';
import {FlatList} from 'react-native';
import {useSelector} from 'react-redux';

import {TBSpacing} from '@theme/TBTheme';

import {TBStrings} from '@constants/TBConstants';

import {TaskProgressCard} from '@components/generic';
import {TBCard, TBHeader, TBEmptyCard} from '@components/atoms';
import TBCommonHeader from '@components/atoms/TBCommonHeader';
import {goBack} from '@navigation/helper/NavigationHelper';

const {emptyMsgSeeAllTask} = TBStrings;

export default function TaskDetails({route}) {
  const {tasks} = useSelector(state => state.todoReducer);
  let params = route?.params;

  let allFilteredData = tasks.filter(
    todo => todo.completed === params?.completed,
  );

  const renderItemForProgreess = ({item}) => (
    <TBCard
      cardStyle={{
        marginBottom: TBSpacing.small,
      }}>
      <TaskProgressCard task={item} />
    </TBCard>
  );

  return (
    <>
      <TBCommonHeader left onPressLeft={() => goBack()} />

      <TBCard
        cardStyle={{
          padding: TBSpacing.large,
        }}>
        <TBHeader title={params?.title} hideBtn />
        {allFilteredData.length > 0 ? (
          <FlatList
            data={allFilteredData}
            renderItem={renderItemForProgreess}
            keyExtractor={item => item.id}
          />
        ) : (
          <TBEmptyCard emptyMsg={emptyMsgSeeAllTask} />
        )}
      </TBCard>
    </>
  );
}
