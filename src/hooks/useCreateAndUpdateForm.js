import {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {TBStrings} from '../constants/TBConstants';
import {generateUUID, toastShow} from '../utils/CommonUtils';
import {
  createTaskAction,
  deleteTaskAction,
  updateTaskAction,
} from '../redux/actions/todoActions';
import LogHelper from '../utils/LogHelper';
import {Alert} from 'react-native';

function useCreateAndUpdateForm(closeModal) {
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

  return {
    createAndUpdateTaskHandler,
    deleteTaskHandler,
    getState: {
      taskCategory,
      taskTitle,
      taskPriority,
      taskDescription,
      completed,
      selectedDate,
    },
    values: {
      setTaskTitle,
      setTaskCategory,
      setTaskDescription,
      setTaskPriority,
      setSelectedDate,
      setCompleted,
    },
    readTask,
  };
}

export default useCreateAndUpdateForm;
