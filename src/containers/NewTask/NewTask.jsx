import React from 'react';

import Task from '../../components/Task/Task';
import { ACTION } from '../../constants/constants';

import './NewTask.scss';

function NewTask (props) {

  return (
    <div className="NewTask">
      <div className="NewTask-container">
        <h2 className="NewTask-title">New Task</h2>
        <Task action={ACTION.ADD}/>
      </div>
    </div>
  );
};

export default NewTask;