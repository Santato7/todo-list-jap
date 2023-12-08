import { createSlice } from "@reduxjs/toolkit";

export const taskListFilterSlice = createSlice({
  name: "taskListFilter",
  initialState: {
    value: false,
  },
  reducers: {
    changeListFilter: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { changeListFilter } = taskListFilterSlice.actions;

export default taskListFilterSlice.reducer;
