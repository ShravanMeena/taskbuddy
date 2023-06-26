import {
  CREATE_TASK,
  DELETE_TASK,
  READ_TASK,
  READ_TASK_BY_ID,
  UPDATE_TASK,
} from '../types';

export const createTaskAction = todo => {
  return {
    type: CREATE_TASK,
    payload: todo,
  };
};

export const readTaskAction = () => {
  return {
    type: READ_TASK,
  };
};

export const readByIdTaskAction = task => {
  return {
    type: READ_TASK_BY_ID,
    payload: task,
  };
};

export const updateTaskAction = (id, updatedTodo) => {
  return {
    type: UPDATE_TASK,
    payload: {id, updatedTodo},
  };
};

export const deleteTaskAction = id => {
  return {
    type: DELETE_TASK,
    payload: id,
  };
};
