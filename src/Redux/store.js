import { configureStore } from '@reduxjs/toolkit'
import TaskSlice from './features/task/TaskSlice'

export const store = configureStore({
  reducer: {
    tasks: TaskSlice,
  },
})