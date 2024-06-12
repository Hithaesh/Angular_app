import {Task} from './Task';

//Todo: Adding the Interface for the Mock-task
//! As an array


export const TASKS: Task[] = [
  {
    id: 1,
    text: 'Doctors Appointment',
    day: 'May 5th at 2:30pm',
    reminder: true,
    // time: 2; //! It show's error, it doesn't match Task.ts Interface.
  },
  {
    id: 2,
    text: 'Meeting at School',
    day: 'May 6th at 1:30pm',
    reminder: true,
  },
  {
    id: 3,
    text: 'Food Shopping',
    day: 'May 7th at 12:30pm',
    reminder: false,
  },
  {
    id: 4,
    text: 'Test',
    day: 'May 7th at 12:30pm',
    reminder: false,
  },
  {
    id: 5,
    text: 'Test-1',
    day: 'May 7th at 12:30pm',
    reminder: false,
  },
];