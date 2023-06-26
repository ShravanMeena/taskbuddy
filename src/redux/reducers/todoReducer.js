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
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_TASK:
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
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
      console.log('====================================');
      console.log(action.payload.updatedTodo);
      console.log('====================================');
      return {
        ...state,
        tasks: state.tasks.map(todo =>
          todo.id === action.payload.id ? action.payload.updatedTodo : todo,
        ),
      };
    case DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter(todo => todo.id !== action.payload),
      };
    default:
      return state;
  }
};

export default todoReducer;
