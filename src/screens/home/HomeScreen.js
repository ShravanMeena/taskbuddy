/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {FlatList, ScrollView} from 'react-native';
import {ScreensName} from '../../constants/NavigationConstants';
import {useSelector} from 'react-redux';

import {TBSpacing} from '../../theme/TBTheme';
import {TBCard, TBHeader, TBSpacer, TBText} from '../../components/atoms';
import {CreateNewTaskButton} from '../../components/generic';

import {
  renderItemForCompleted,
  renderItemForProgreess,
} from './components/renderItems';
import {TBStrings} from '../../constants/TBConstants';
import TBEmptyCard from '../../components/atoms/TBEmptyCard';

export default function HomeScreen() {
  const {completedTasks, onGoingTasks} = useSelector(
    state => state.todoReducer,
  );

  return (
    <>
      <ScrollView nestedScrollEnabled showsVerticalScrollIndicator={false}>
        <TBSpacer />
        <TBCard>
          <TBHeader
            title={TBStrings.onGoingProgressBtnText}
            completed={false}
            hideBtn={onGoingTasks.length <= 1}
            screen={ScreensName.TaskDetails}
          />

          <TBCard pLeft={TBSpacing.medium}>
            {onGoingTasks?.length > 0 ? (
              <FlatList
                data={onGoingTasks}
                showsHorizontalScrollIndicator={false}
                horizontal
                renderItem={renderItemForProgreess}
                keyExtractor={item => item.id}
              />
            ) : (
              <TBEmptyCard emptyMsg={TBStrings.emptyMsgNoProgressTask} />
            )}
          </TBCard>
          <TBSpacer />
          <TBHeader
            title={TBStrings.onCompletedBtnText}
            completed
            hideBtn={completedTasks.length <= 1}
            screen={ScreensName.TaskDetails}
          />
          <TBCard pLeft={TBSpacing.medium} pRight={TBSpacing.medium}>
            {completedTasks.length > 0 ? (
              <FlatList
                data={completedTasks}
                renderItem={renderItemForCompleted}
                keyExtractor={item => item.id}
              />
            ) : (
              <TBEmptyCard emptyMsg={TBStrings.emptyMsgNoCompletedTask} />
            )}
          </TBCard>
          <TBSpacer />
        </TBCard>
      </ScrollView>
      <CreateNewTaskButton />
    </>
  );
}
