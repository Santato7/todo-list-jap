import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import "./index.css";

import { ThemeProvider, createTheme } from "@mui/material";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home";
import { Provider } from "react-redux";

import store from "./store/store";
import NewTask from "./pages/NewTask";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/newtask",
        element: <NewTask />,
      },
    ],
  },
]);

const theme = createTheme({
  palette: {
    primary: {
      main: "#DA6B05",
    },
    secondary: {
      main: "#111",
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
