import {
  CREATE_TASK,
  DELETE_TASK,
  READ_TASK,
  READ_TASK_BY_ID,
  UPDATE_TASK,
} from '../types';

const initialState = {
  tasks: [],
  readTask: null,
  completedTasks: [],
  onGoingTasks: [],
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_TASK:
      let updatedTasks = [...state.tasks, action.payload];
      return {
        ...state,
        tasks: updatedTasks,
        completedTasks: updatedTasks.filter(todo => todo.completed),
        onGoingTasks: updatedTasks.filter(todo => !todo.completed),
      };
    case READ_TASK:
      // No changes required for reading tasks
      return state;
    case READ_TASK_BY_ID:
      return {
        ...state,
        readTask: action.payload,
      };
    case UPDATE_TASK:
      let updatedTasksNew = state.tasks.map(todo =>
        todo.id === action.payload.id ? action.payload.updatedTodo : todo,
      );
      return {
        ...state,
        tasks: updatedTasksNew,
        completedTasks: updatedTasksNew.filter(todo => todo.completed),
        onGoingTasks: updatedTasksNew.filter(todo => !todo.completed),
      };
    case DELETE_TASK:
      let updatedDeletedTasksNew = state.tasks.filter(
        todo => todo.id !== action.payload,
      );
      return {
        ...state,
        tasks: updatedDeletedTasksNew,
        completedTasks: updatedDeletedTasksNew.filter(todo => todo.completed),
        onGoingTasks: updatedDeletedTasksNew.filter(todo => !todo.completed),
      };
    default:
      return state;
  }
};

export default todoReducer;
