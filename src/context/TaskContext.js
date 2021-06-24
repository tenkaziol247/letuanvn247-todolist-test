import React, { useEffect, useReducer } from 'react';

export const TaskContext = React.createContext({});

const initialState = {
  tasks: [],
  activeTaskId: -1,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TASK':
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };
    case 'UPDATE_TASK':
      const updatedTaskIndex = state.tasks.findIndex(
        (task) => task.id === action.payload.id,
      );
      const tempTasks = [...state.tasks];
      tempTasks[updatedTaskIndex] = action.payload;
      return {
        ...state,
        tasks: tempTasks,
      };
    case 'DELETE_TASK':
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      };
    case 'INIT_TASKS':
      return {
        ...state,
        tasks: action.payload,
      };
    case 'UPDATE_ACTIVE_TASK_ID':
      return {
        ...state,
        activeTaskId: action.payload,
      };
    case 'CHECKED_ALL_TASKS':
      return {
        ...state,
        tasks: state.tasks.map((task) => ({ ...task, checked: true })),
      };
    case 'DELETE_ALL_TASKS':
      return {
        activeTaskId: -1,
        tasks: [],
      };
    default:
      return state;
  }
};

export const TaskContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const tasksJSON = localStorage.getItem('tasks');
    let tasks = [];
    let activeTaskId = -1;
    if (tasksJSON) {
      tasks = JSON.parse(tasksJSON);
    }

    if (tasks.length > 0) {
      activeTaskId = tasks[0].id;
    }

    dispatch({ type: 'INIT_TASKS', payload: tasks });
    dispatch({ type: 'UPDATE_ACTIVE_TASK_ID', payload: activeTaskId });
  }, []);

  useEffect(() => {
    if (state.tasks) {
      localStorage.setItem('tasks', JSON.stringify(state.tasks));
    }
  }, [state.tasks]);

  return (
    <TaskContext.Provider value={[state, dispatch]}>
      {props.children}
    </TaskContext.Provider>
  );
};
