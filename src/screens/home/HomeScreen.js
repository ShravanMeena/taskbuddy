/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import TBCard from '../../components/atoms/TBCard';
import TBHeader from '../../components/atoms/TBHeader';
import TBSpacer from '../../components/atoms/TBSpacer';
import TaskProgressCard from '../../components/generic/TaskProgressCard';
import {FlatList, ScrollView} from 'react-native';
import {TBComponentSize, TBSpacing} from '../../theme/TBTheme';
import TaskCompletedCard from '../../components/generic/TaskCompletedCard';

const DATA = [1, 2, 34, 56];

export default function HomeScreen() {
  const renderItemForProgreess = ({item}) => (
    <TBCard
      cardStyle={{
        width: TBComponentSize.cardBannerWidth,
        marginRight: TBSpacing.small,
      }}>
      <TaskProgressCard />
    </TBCard>
  );

  const renderItemForCompleted = ({item}) => (
    <TBCard
      cardStyle={{
        marginBottom: TBSpacing.small,
      }}>
      <TaskCompletedCard />
    </TBCard>
  );

  return (
    <ScrollView nestedScrollEnabled showsVerticalScrollIndicator={false}>
      <TBCard>
        <TBHeader title="Categories" />
        <TBSpacer />
        <TBHeader title="On Progress" />
        <FlatList
          data={DATA}
          showsHorizontalScrollIndicator={false}
          horizontal
          renderItem={renderItemForProgreess}
          keyExtractor={item => item}
        />

        <TBSpacer />
        <TBHeader title="Completed" />
        <FlatList
          data={DATA}
          renderItem={renderItemForCompleted}
          keyExtractor={item => item}
        />
        <TBSpacer />
      </TBCard>
    </ScrollView>
  );
}
