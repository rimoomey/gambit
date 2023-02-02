import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "normalize.css";
import "./App.css"
import App from "./App";
import AccountInformationPage from "./components/AccountInformationPage";
import FriendsPage from "./components/FriendsPage";
import GameHistoryPage from "./components/GameHistoryPage";
import LoginPage from "./components/LoginPage";
import PlayPage from "./components/PlayPage";
import ErrorPage from "./ErrorPage";
import reportWebVitals from "./reportWebVitals";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App style={{width: '100%'}}/>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/play",
        element: <PlayPage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/friends",
        element: <FriendsPage />,
      },
      {
        path: "/previous-games",
        element: <GameHistoryPage />,
      },
      {
        path: "/account",
        element: <AccountInformationPage />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
