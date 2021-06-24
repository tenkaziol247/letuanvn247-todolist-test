import React, { useContext, useState } from 'react';
import { ImFilesEmpty } from 'react-icons/im';

import CustomButton from '../../components/CustomButton/CustomButton';
import SearchInput from '../../components/CustomInput/SearchInput/SearchInput';
import FullTask from '../../components/FullTask/FullTask';
import { TaskContext } from '../../context/TaskContext';

import './TaskList.scss';

function TaskList() {
  const [state, dispatch] = useContext(TaskContext);

  const [searchValue, setSearchValue] = useState('');

  const handleSearchInputChange = (e) => {
    const value = e.target.value;
    setSearchValue(value);
  };

  const handleCheckedAllTasks = () => {
    dispatch({ type: 'CHECKED_ALL_TASKS' });
  };

  const handleDeleteAllTasks = () => {
    dispatch({ type: 'DELETE_ALL_TASKS' });
  };

  return (
    <div className='TaskList'>
      <div className='TaskList-container'>
        <h2 className='TaskList-title'>To Do List</h2>
        <SearchInput
          value={searchValue}
          name='searchInput'
          placeholder='Search...'
          onChange={handleSearchInputChange}
        />
        <div className='TaskList-list'>
          {state.tasks && state.tasks.length > 0 ? (
            state.tasks
              .filter((task) =>
                task.title.toLowerCase().includes(searchValue.toLowerCase()),
              )
              .map((task) => (
                <FullTask
                  key={task.id}
                  task={task}
                  active={state.activeTaskId === task.id}
                />
              ))
          ) : (
            <div className='TaskList-list-nodata'>
              <ImFilesEmpty />
              <p>Empty List!</p>
            </div>
          )}
        </div>
        <div className='TaskList-bulk'>
          <div className='TaskList-bulk-title'>Bulk Action:</div>
          <div className='TaskList-bulk-actions'>
            <span>
              <CustomButton handleClick={handleCheckedAllTasks}>
                Done
              </CustomButton>
            </span>
            <span>
              <CustomButton
                color='secondary'
                handleClick={handleDeleteAllTasks}
              >
                Remove
              </CustomButton>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TaskList;
