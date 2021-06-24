import React, { useContext } from 'react';
import classNames from 'classnames';

import CustomButton from '../CustomButton/CustomButton';
import { TaskContext } from '../../context/TaskContext';

import './MiniTask.scss';

function MiniTask({ task }) {
  const classes = classNames('MiniTask-title-checkbox', {
    checked: task.checked,
  });

  const [, dispatch] = useContext(TaskContext);

  const handleClickDetailButton = (taskId) => {
    dispatch({ type: 'UPDATE_ACTIVE_TASK_ID', payload: taskId });
  };

  const handleRemoveButton = (taskId) => {
    dispatch({ type: 'DELETE_TASK', payload: taskId });
  };

  const handleCheckTask = (e, taskSelect) => {
    const checked = e.target.checked;

    dispatch({
      type: 'UPDATE_TASK',
      payload: { ...taskSelect, checked: checked },
    });
  };

  return (
    <div className='MiniTask'>
      <div className='MiniTask-title'>
        <input
          id={`MiniTask-title-checkboxHide-${task.id}`}
          className='MiniTask-title-checkboxHide'
          type='checkbox'
          checked={task.checked}
          onChange={(e) => handleCheckTask(e, task)}
        />
        <label className={classes} htmlFor={`MiniTask-title-checkboxHide-${task.id}`}></label>
        <span className='MiniTask-title-text'>
          {task.title.length >= 22 ? task.title.substring(0, 24) + '...' : task.title}
        </span>
      </div>
      <div className='MiniTask-actions'>
        <span>
          <CustomButton handleClick={() => handleClickDetailButton(task.id)}>
            Detail
          </CustomButton>
        </span>
        <span>
          <CustomButton
            handleClick={() => handleRemoveButton(task.id)}
            color='secondary'
          >
            Remove
          </CustomButton>
        </span>
      </div>
    </div>
  );
}

export default MiniTask;
