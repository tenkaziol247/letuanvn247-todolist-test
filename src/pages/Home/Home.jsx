import React from 'react';

import NewTask from '../../containers/NewTask/NewTask';
import TaskList from '../../containers/TaskList/TaskList';
import {TaskContextProvider} from '../../context/TaskContext';

import './Home.scss';

function Home(props) {
  return (
    <TaskContextProvider>
      <div className='Home'>
        <NewTask />
        <TaskList />
      </div>
    </TaskContextProvider>
  );
}

export default Home;
