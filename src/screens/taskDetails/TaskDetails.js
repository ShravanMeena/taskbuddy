/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import TBCard from '../../components/atoms/TBCard';
import TBHeader from '../../components/atoms/TBHeader';
import TaskProgressCard from '../../components/generic/TaskProgressCard';
import {FlatList} from 'react-native';
import {TBSpacing} from '../../theme/TBTheme';

const DATA = [1, 2, 34, 12, 3];

export default function TaskDetails() {
  const renderItemForProgreess = ({item}) => (
    <TBCard
      cardStyle={{
        marginBottom: TBSpacing.small,
      }}>
      <TaskProgressCard />
    </TBCard>
  );

  return (
    <TBCard
      cardStyle={{
        padding: TBSpacing.large,
      }}>
      <TBHeader title="On Progress" />
      <FlatList
        data={DATA}
        renderItem={renderItemForProgreess}
        keyExtractor={item => item}
      />
    </TBCard>
  );
}
