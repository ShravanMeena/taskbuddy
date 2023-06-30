import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  createTaskAction,
  deleteTaskAction,
  updateTaskAction,
} from '../../redux/actions/todoActions';
import {
  TBColors,
  TBComponentSize,
  TBFontSize,
  TBSpacing,
} from '../../theme/TBTheme';

import {
  TBButton,
  TBCard,
  TBDivider,
  TBInput,
  TBModal,
  TBSwitch,
  TBText,
  TBDatePickerAndroid,
  TBSpacer,
} from '../atoms';
import {CategoriesList, PrioritiesList} from './components';

import {generateUUID, toastShow} from '../../utils/CommonUtils';
import {Alert} from 'react-native';
import LogHelper from '../../utils/LogHelper';
import {TBStrings} from '../../constants/TBConstants';

const UpdateAndCreateTask = ({closeModal}) => {
  const {readTask} = useSelector(state => state.todoReducer);

  const [taskTitle, setTaskTitle] = useState(readTask?.title || '');
  const [taskDescription, setTaskDescription] = useState(
    readTask?.description || '',
  );
  const [taskCategory, setTaskCategory] = useState(readTask?.category);
  const [taskPriority, setTaskPriority] = useState(readTask?.priority);
  const [completed, setCompleted] = useState(readTask?.completed || false);
  const [selectedDate, setSelectedDate] = useState(
    readTask?.selectedDate || {},
  );

  const dispatch = useDispatch();

  const createAndUpdateTaskHandler = duplicate => {
    if (!taskTitle || !taskDescription) {
      toastShow(TBStrings.taskCRUDErrRequired);
      return;
    }
    const newTask = {
      id: readTask && !duplicate ? readTask.id : generateUUID(),
      title: taskTitle,
      description: taskDescription,
      priority: taskPriority,
      category: taskCategory,
      completed,
      selectedDate,
    };

    if (readTask && !duplicate) {
      dispatch(updateTaskAction(readTask.id, newTask));
    } else {
      dispatch(createTaskAction(newTask));
    }
    clearState();
    closeModal();
  };

  const clearState = () => {
    setTaskTitle('');
    setTaskDescription('');
    setCompleted(false);
    setTaskPriority('');
    setTaskCategory('');
    setSelectedDate('');
  };

  const deleteTaskHandler = () => {
    Alert.alert(TBStrings.deleteAlertTitle, '', [
      {
        text: 'Cancel',
        onPress: () => LogHelper.log('Cancel Pressed'),
        style: 'cancel',
      },
      {
        text: 'CONFIRM',
        onPress: () => {
          dispatch(deleteTaskAction(readTask.id));
          closeModal();
        },
      },
    ]);
  };

  return (
    <TBCard width={TBComponentSize.contentWidth}>
      <TBInput
        placeholder={TBStrings.taskTitlePlaceholder}
        value={taskTitle}
        onChangeText={text => setTaskTitle(text)}
      />
      <TBInput
        placeholder={TBStrings.taskDescPlaceholder}
        value={taskDescription}
        onChangeText={text => setTaskDescription(text)}
      />
      <TBSpacer />
      <TBCard row>
        <TBText fontSize={TBFontSize.xxl}>
          {TBStrings.taskIsCompletedText}
        </TBText>
        <TBSwitch
          value={completed}
          onValueChange={setCompleted}
          trueTrackColor={TBColors.primary}
        />
      </TBCard>

      <TBSpacer />
      <TBCard row>
        <TBModal
          renderComponent={() => (
            <PrioritiesList setTaskPriority={setTaskPriority} />
          )}>
          <TBButton
            title={taskPriority || TBStrings.taskPriorityBtnText}
            disabled
          />
        </TBModal>
        <TBSpacer />

        <TBModal
          renderComponent={() => (
            <CategoriesList setTaskCategory={setTaskCategory} />
          )}>
          <TBButton
            title={taskCategory || TBStrings.taskCategoriesBtnText}
            disabled
          />
        </TBModal>
      </TBCard>
      <TBSpacer />

      <TBText>
        {TBStrings.taskDateSelectText} {selectedDate?.fullDate}
      </TBText>
      <TBDatePickerAndroid
        activeDate={selectedDate}
        onPress={e => setSelectedDate(e)}
      />

      <TBSpacer />
      <TBDivider
        color={TBColors.bleachGrey}
        height={TBSpacing.xss}
        width={TBComponentSize.contentWidth}
      />
      <TBSpacer />
      <TBCard row spaceBetween>
        <TBButton
          title={
            readTask ? TBStrings.taskUpdateBtnText : TBStrings.taskCreateBtnText
          }
          onPress={createAndUpdateTaskHandler}
        />

        {readTask && (
          <>
            <TBButton
              backgroundColor={TBColors.green}
              title={TBStrings.taskDuplicateBtnText}
              onPress={() => createAndUpdateTaskHandler(true)}
            />

            <TBButton
              backgroundColor={TBColors.redText}
              title={TBStrings.taskDeleteBtnText}
              onPress={deleteTaskHandler}
            />
          </>
        )}
      </TBCard>
    </TBCard>
  );
};

export default UpdateAndCreateTask;
