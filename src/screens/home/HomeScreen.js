/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import TBCard from '../../components/atoms/TBCard';
import TBHeader from '../../components/atoms/TBHeader';
import TBSpacer from '../../components/atoms/TBSpacer';
import {FlatList, ScrollView} from 'react-native';
import {TBSpacing} from '../../theme/TBTheme';
import {ScreensName} from '../../constants/NavigationConstants';
import {useSelector} from 'react-redux';
import TBText from '../../components/atoms/TBText';
import {
  renderItemForCompleted,
  renderItemForProgreess,
} from './components/renderItems';

export default function HomeScreen() {
  const {tasks} = useSelector(state => state.todoReducer);

  let completedTasks = tasks.filter(todo => todo.completed);
  let onGoingTasks = tasks.filter(todo => !todo.completed);

  return (
    // <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <ScrollView
      nestedScrollEnabled
      showsVerticalScrollIndicator={false}
      style={{zIndex: 1000}}>
      <TBSpacer />
      <TBCard>
        <TBHeader
          title="On Progress"
          completed={false}
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
            <TBCard center>
              <TBText>No On Going Tasks</TBText>
            </TBCard>
          )}
        </TBCard>
        <TBSpacer />
        <TBHeader
          title="Completed"
          completed
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
            <TBCard center>
              <TBText>No On completed Tasks</TBText>
            </TBCard>
          )}
        </TBCard>
        <TBSpacer />
      </TBCard>
    </ScrollView>
    // </TouchableWithoutFeedback>
  );
}
