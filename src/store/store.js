import { configureStore } from "@reduxjs/toolkit";
import taskListSlice from "./taskListSlice";
import taskListFilterSlice from "./taskListFilterSlice";

export default configureStore({
  reducer: {
    taskList: taskListSlice,
    taskListFilter: taskListFilterSlice,
  },
});
