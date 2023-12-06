import { createSlice } from "@reduxjs/toolkit";

export const taskListFilterSlice = createSlice({
  name: "taskListFilter",
  initialState: {
    value: false,
  },
  reducers: {
    toggleListFilter: (state) => {
      state.value = !state.value;
    },
  },
});

export const { toggleListFilter } = taskListFilterSlice.actions;

export default taskListFilterSlice.reducer;
