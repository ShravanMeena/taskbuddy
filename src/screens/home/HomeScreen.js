/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import TBCard from '../../components/atoms/TBCard';
import TBHeader from '../../components/atoms/TBHeader';
import TBSpacer from '../../components/atoms/TBSpacer';
import TaskProgressCard from '../../components/generic/TaskProgressCard';
import {
  FlatList,
  Keyboard,
  ScrollView,
  TouchableWithoutFeedback,
} from 'react-native';
import {
  TBColors,
  TBComponentSize,
  TBFontSize,
  TBSpacing,
} from '../../theme/TBTheme';
import TaskCompletedCard from '../../components/generic/TaskCompletedCard';
import {ScreensName} from '../../constants/NavigationConstants';
import {useSelector} from 'react-redux';
import TBModal from '../../components/generic/TBModal';
import TBText from '../../components/atoms/TBText';

export default function HomeScreen() {
  const {tasks} = useSelector(state => state.todoReducer);

  let completedTasks = tasks.filter(todo => todo.completed);
  let onGoingTasks = tasks.filter(todo => !todo.completed);

  const renderItemForProgreess = ({item}) => (
    <TBCard
      cardStyle={{
        width:
          onGoingTasks?.length === 1
            ? TBComponentSize.contentWidth
            : TBComponentSize.cardBannerWidth,
        marginRight: TBSpacing.small,
      }}>
      <TaskProgressCard task={item} />
    </TBCard>
  );

  const renderItemForCompleted = ({item}) => (
    <TBCard
      cardStyle={{
        width: TBComponentSize.contentWidth,
        marginBottom: TBSpacing.small,
      }}>
      <TaskCompletedCard task={item} />
    </TBCard>
  );

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
          <FlatList
            data={onGoingTasks}
            showsHorizontalScrollIndicator={false}
            horizontal
            renderItem={renderItemForProgreess}
            keyExtractor={item => item.id}
          />
        </TBCard>
        <TBSpacer />
        <TBHeader
          title="Completed"
          completed
          screen={ScreensName.TaskDetails}
        />
        <TBCard pLeft={TBSpacing.medium} pRight={TBSpacing.medium}>
          <FlatList
            data={completedTasks}
            renderItem={renderItemForCompleted}
            keyExtractor={item => item.id}
          />
        </TBCard>
        <TBSpacer />
      </TBCard>
    </ScrollView>
    // </TouchableWithoutFeedback>
  );
}
