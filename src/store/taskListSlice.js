import { createSlice } from "@reduxjs/toolkit";

export const taskListSlice = createSlice({
  name: "taskList",
  initialState: {
    value: [
      { title: "Task 01", completed: false },
      { title: "Task 02", completed: true },
    ],
  },
  reducers: {
    newTask: (state, action) => {
      state.value.push(action.payload);
    },
    deleteTask: (state, action) => {
      state.value.splice(action.payload.index, 1);
    },
    updateTaskStatus: (state, action) => {
      state.value[action.payload.index].completed =
        !state.value[action.payload.index].completed;
    },
  },
});

export const { newTask, deleteTask, updateTaskStatus } = taskListSlice.actions;

export default taskListSlice.reducer;
