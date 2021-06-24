import * as yup from 'yup';
import moment from 'moment';

export const inputLabels = {
  title: 'Title',
  description: 'Description',
  dueDate: 'Due Date',
  priority: 'Priority',
};

export const inputNames = {
  title: 'title',
  description: 'description',
  dueDate: 'dueDate',
  priority: 'priority',
};

export const inputPlaceholders = {
  title: 'Add new task.',
  description: 'Enter description ...',
  dueDate: 'Pick date.',
  priority: 'Select priority.',
};

export const validationSchema = yup.object({
  title: yup.string().trim().required('Title is required!').max(60),
  description: yup.string().trim(),
  dueDate: yup.date().required('Due date is required!').min(moment().format('YYYY-MM-DD'), 'Due date must be in the future!'),
});

export const PRIORITY_DATA = [
  { name: 'Normal', value: 'normal' },
  { name: 'High', value: 'high' },
  { name: 'Low', value: 'low' },
];

export const initialValues = {
  title: '',
  description: '',
  dueDate: moment().format('YYYY-MM-DD'),
  priority: PRIORITY_DATA[0].value,
};
