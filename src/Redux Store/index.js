import { configureStore } from '@reduxjs/toolkit'
import { employeesReducer } from './EmployeeSlice.js';
import { tasksReducer } from './TasksSlice.js';

const store = configureStore({
  reducer: {
    // Define a top-level state field
    employees: employeesReducer,
    tasks: tasksReducer,
  }
})

export default store;