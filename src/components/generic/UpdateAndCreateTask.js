import React, {useState} from 'react';
import TBInput from '../atoms/TBInput';
import TBButton from '../atoms/TBButton';
// import TBDropdown from '../atoms/TBDropdown';
// import LogHelper from '../../utils/LogHelper';
import {useDispatch, useSelector} from 'react-redux';
import {
  createTaskAction,
  deleteTaskAction,
  updateTaskAction,
} from '../../redux/actions/todoActions';
import TBSpacer from '../atoms/TBSpacer';
import {TBColors, TBFontSize} from '../../theme/TBTheme';
import TBSwitch from '../atoms/TBSwitch';
import TBCard from '../atoms/TBCard';
import TBText from '../atoms/TBText';

const UpdateAndCreateTask = () => {
  const {readTask} = useSelector(state => state.todoReducer);

  const [taskTitle, setTaskTitle] = useState(readTask?.title || '');
  const [taskDescription, setTaskDescription] = useState(
    readTask?.description || '',
  );
  const [taskCategory, setTaskCategory] = useState('general');
  const [taskPriority, setTaskPriority] = useState('low');
  const [completed, setCompleted] = useState(readTask?.completed || false);

  const dispatch = useDispatch();
  const {tasks} = useSelector(state => state.todoReducer);

  const createTaskHandler = () => {
    const newTask = {
      id: readTask ? readTask.id : tasks.length + 1,
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
    }
  };

  const deleteTaskHandler = () => {
    dispatch(deleteTaskAction(readTask.id));
  };

  return (
    <>
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
      {/* <TBDropdown
        options={[1, 2, 3, 5]}
        placeholder={'selectBankPlaceholder'}
        value={'asdad'}
        onSelect={e => {
          LogHelper.log(e);
        }}
      /> */}

      <TBCard row>
        <TBText fontSize={TBFontSize.xxl}>Is this task completed?</TBText>
        <TBSwitch
          value={completed}
          onValueChange={setCompleted}
          trueTrackColor={TBColors.primary}
        />
      </TBCard>
      <TBSpacer />
      <TBButton
        title={readTask ? 'UPDATE TASK' : 'CREATE TASK'}
        onPress={createTaskHandler}
      />
      <TBSpacer />
      <TBButton
        backgroundColor={TBColors.redText}
        title="DELETE TASK"
        onPress={deleteTaskHandler}
      />
    </>
  );
};

export default UpdateAndCreateTask;
