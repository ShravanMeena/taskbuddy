import React, {useState} from 'react';
import TBInput from '../atoms/TBInput';
import TBButton from '../atoms/TBButton';
import {useDispatch, useSelector} from 'react-redux';
import {
  createTaskAction,
  deleteTaskAction,
  updateTaskAction,
} from '../../redux/actions/todoActions';
import TBSpacer from '../atoms/TBSpacer';
import {
  TBColors,
  TBComponentSize,
  TBFontSize,
  TBSpacing,
} from '../../theme/TBTheme';
import TBSwitch from '../atoms/TBSwitch';
import TBCard from '../atoms/TBCard';
import TBText from '../atoms/TBText';
import {generateUUID} from '../../utils/CommonUtils';
import TBModal from '../atoms/TBModal';
import CategoriesList from './components/CategoriesList';
import PrioritiesList from './components/PrioritiesList';
import TBDivider from '../atoms/TBDivider';
import {Alert} from 'react-native';
import LogHelper from '../../utils/LogHelper';
import TBDatePickerAndroid from './TBDatePickerAndroid';

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
    readTask?.selectedDate || '',
  );

  const dispatch = useDispatch();

  const createAndUpdateTaskHandler = duplicate => {
    if (!taskTitle || !taskDescription) {
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

      setTaskTitle('');
      setTaskDescription('');
      setCompleted(false);
      setTaskPriority('');
      setTaskCategory('');
    }

    closeModal();
  };

  const deleteTaskHandler = () => {
    Alert.alert('Do you want to delete?', '', [
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
        placeholder="Task Title"
        value={taskTitle}
        onChangeText={text => setTaskTitle(text)}
      />
      <TBInput
        placeholder="Task Description"
        value={taskDescription}
        onChangeText={text => setTaskDescription(text)}
      />
      <TBSpacer />
      <TBCard row>
        <TBText fontSize={TBFontSize.xxl}>Is this task completed?</TBText>
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
          <TBButton title={taskPriority || 'Priority'} disabled />
        </TBModal>
        <TBSpacer />

        <TBModal
          renderComponent={() => (
            <CategoriesList setTaskCategory={setTaskCategory} />
          )}>
          <TBButton title={taskCategory || 'Categories'} disabled />
        </TBModal>
      </TBCard>
      <TBSpacer />

      {/* <TBText>Date: {selectedDate}</TBText> */}
      <TBDatePickerAndroid onPress={e => setSelectedDate(e)} />

      <TBSpacer />
      <TBDivider
        color={TBColors.bleachGrey}
        height={TBSpacing.xss}
        width={TBComponentSize.contentWidth}
      />
      <TBSpacer />
      <TBCard row spaceBetween>
        <TBButton
          title={readTask ? 'UPDATE TASK' : 'CREATE NEW TASK'}
          onPress={createAndUpdateTaskHandler}
        />

        {readTask && (
          <>
            <TBButton
              backgroundColor={TBColors.green}
              title="DUPLICATE TASK"
              onPress={() => createAndUpdateTaskHandler(true)}
            />

            <TBButton
              backgroundColor={TBColors.redText}
              title="DELETE"
              onPress={deleteTaskHandler}
            />
          </>
        )}
      </TBCard>
    </TBCard>
  );
};

export default UpdateAndCreateTask;
