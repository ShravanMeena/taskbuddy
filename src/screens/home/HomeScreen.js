import React from 'react';
import {FlatList, ScrollView} from 'react-native';
import {useSelector} from 'react-redux';

import {TBSpacing} from '@theme/TBTheme';

import {TBStrings} from '@constants/TBConstants';
import {ScreensName} from '@constants/NavigationConstants';

import {TBCard, TBHeader, TBSpacer, TBEmptyCard} from '@components/atoms';
import {CreateNewTaskButton} from '@components/generic';

import {
  renderItemForCompleted,
  renderItemForProgreess,
} from './components/renderItems';

const {
  onGoingProgressBtnText,
  emptyMsgNoProgressTask,
  onCompletedBtnText,
  emptyMsgNoCompletedTask,
} = TBStrings;

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
            title={onGoingProgressBtnText}
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
              <TBEmptyCard emptyMsg={emptyMsgNoProgressTask} />
            )}
          </TBCard>
          <TBSpacer />
          <TBHeader
            title={onCompletedBtnText}
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
              <TBEmptyCard emptyMsg={emptyMsgNoCompletedTask} />
            )}
          </TBCard>
          <TBSpacer />
        </TBCard>
      </ScrollView>
      <CreateNewTaskButton />
    </>
  );
}
