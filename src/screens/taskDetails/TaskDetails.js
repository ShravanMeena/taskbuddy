/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import TBCard from '../../components/atoms/TBCard';
import TBHeader from '../../components/atoms/TBHeader';
import TaskProgressCard from '../../components/generic/TaskProgressCard';
import {FlatList} from 'react-native';
import {TBSpacing} from '../../theme/TBTheme';
import {useSelector} from 'react-redux';
import TBText from '../../components/atoms/TBText';

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
        <TBCard center>
          <TBText>No Task here</TBText>
        </TBCard>
      )}
    </TBCard>
  );
}
