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

const UpdateAndCreateTask = ({closeModal}) => {
  const {readTask} = useSelector(state => state.todoReducer);

  const [taskTitle, setTaskTitle] = useState(readTask?.title || '');
  const [taskDescription, setTaskDescription] = useState(
    readTask?.description || '',
  );
  const [taskCategory, setTaskCategory] = useState(readTask?.category);
  const [taskPriority, setTaskPriority] = useState(readTask?.priority);
  const [completed, setCompleted] = useState(readTask?.completed || false);

  const dispatch = useDispatch();

  const createTaskHandler = () => {
    if (!taskTitle || !taskDescription) {
      return;
    }

    const newTask = {
      id: readTask ? readTask.id : generateUUID(),
      title: taskTitle,
      description: taskDescription,
      priority: taskPriority,
      category: taskCategory,
      completed,
    };

    if (readTask) {
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
    dispatch(deleteTaskAction(readTask.id));
    closeModal();
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
      <TBDivider
        color={TBColors.bleachGrey}
        height={TBSpacing.xss}
        width={TBComponentSize.contentWidth}
      />
      <TBSpacer />
      <TBCard row spaceBetween>
        <TBButton
          title={readTask ? 'UPDATE TASK' : 'CREATE TASK'}
          onPress={createTaskHandler}
        />

        {readTask && (
          <TBButton
            backgroundColor={TBColors.redText}
            title="DELETE"
            onPress={deleteTaskHandler}
          />
        )}
      </TBCard>
    </TBCard>
  );
};

export default UpdateAndCreateTask;
