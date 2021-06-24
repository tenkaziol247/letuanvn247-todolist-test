import React from 'react';
import { ACTION } from '../../constants/constants';
import classNames from 'classnames';

import MiniTask from '../MiniTask/MiniTask';
import Task from '../Task/Task';

import './FullTask.scss';

function FullTask({ task, active }) {
  const classes = classNames('FullTask-collapse', { active });

  return (
    <div className='FullTask'>
      <MiniTask task={task} />
      <div className={classes}>
        <Task action={ACTION.UPDATE} taskInfo={task} />
      </div>
    </div>
  );
}

export default FullTask;
