import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useFormik } from 'formik';

import { ACTION } from '../../constants/constants';
import TextInput from '../../components/CustomInput/TextInput/TextInput';
import TextAreaInput from '../CustomInput/TextAreaInput/TextAreaInput';
import DateInput from '../CustomInput/DateInput/DateInput';
import SelectInput from '../CustomInput/SelectInput/SelectInput';
import CustomButton from '../CustomButton/CustomButton';
import { TaskContext } from '../../context/TaskContext';

import {
  inputLabels,
  inputNames,
  inputPlaceholders,
  validationSchema,
  PRIORITY_DATA,
  initialValues,
} from './Task.data';
import './Task.scss';

function Task({ action = 'Add', taskInfo }) {
  const [, dispatch] = useContext(TaskContext);

  const formik = useFormik({
    validationSchema,
    initialValues,
    onSubmit: (values) => {
      if (action === ACTION.ADD) {
        const taskValues = {
          ...values,
          checked: false,
          id: new Date().getTime(),
        };

        dispatch({ type: 'ADD_TASK', payload: taskValues });

        formik.resetForm();
        formik.setErrors({});
      }

      if (action === ACTION.UPDATE) {
        dispatch({ type: 'UPDATE_TASK', payload: values });
      }
    },
  });

  const generateSubmitName = (actionName) => {
    let title = '';

    if (actionName === ACTION.ADD) {
      title = ACTION.ADD;
    }
    if (actionName === ACTION.UPDATE) {
      title = ACTION.UPDATE;
    }

    return title;
  };

  const handleChangeDueDate = (e) => {
    if (e.target.value) {
      formik.setFieldValue(inputNames.dueDate, e.target.value);
    }
  };

  const handleChangePriority = (e) => {
    if (e.target.value) {
      formik.setFieldValue(inputNames.priority, e.target.value);
    }
  };

  useEffect(() => {
    if (taskInfo && action === ACTION.UPDATE) {
      formik.setValues(taskInfo);
    }
    //eslint-disable-next-line
  }, [taskInfo, action]);

  return (
    <div className='Task'>
      <form className='Task-form' onSubmit={formik.handleSubmit}>
        <TextInput
          required
          label={inputLabels.title}
          name={inputNames.title}
          placeholder={inputPlaceholders.title}
          value={formik.values.title}
          maxLength={60}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          errorMessage={
            formik.touched.title && formik.errors.title
              ? formik.errors.title
              : ''
          }
        />
        <TextAreaInput
          label={inputLabels.description}
          name={inputNames.description}
          placeholder={inputPlaceholders.description}
          value={formik.values.description}
          maxLength={30}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          errorMessage={
            formik.touched.description && formik.errors.description
              ? formik.errors.description
              : ''
          }
        />
        <div>
          <DateInput
            required
            label={inputLabels.dueDate}
            errorMessage={
              formik.touched.dueDate && formik.errors.dueDate
                ? formik.errors.dueDate
                : ''
            }
            onChange={handleChangeDueDate}
            value={formik.values.dueDate}
            name={inputNames.dueDate}
            placeholder={inputPlaceholders.dueDate}
          />
          <SelectInput
            label={inputLabels.priority}
            name={inputNames.priority}
            value={formik.values.priority}
            options={PRIORITY_DATA}
            onChange={handleChangePriority}
            placeholder={inputPlaceholders.priority}
            errorMessage={
              formik.touched.priority && formik.errors.priority
                ? formik.errors.priority
                : ''
            }
          />
        </div>
        <div className='Task-submit'>
          <CustomButton fullWidth color='tertiary'>
            {generateSubmitName(action)}
          </CustomButton>
        </div>
      </form>
    </div>
  );
}

Task.propTypes = {
  action: PropTypes.oneOf([ACTION.ADD, ACTION.UPDATE]).isRequired,
};

export default Task;
