import { configureStore } from "@reduxjs/toolkit";
import taskListSlice from "./taskListSlice";

export default configureStore({
  reducer: {
    taskList: taskListSlice,
  },
});
