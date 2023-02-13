import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import AccountInformationPage from "./components/AccountInformationPage";
import GameHistoryPage from "./components/GameHistoryPage";
import HomePage from "./components/HomePage";
import PlayPage from "./components/PlayPage";
import ErrorPage from "./ErrorPage";
import reportWebVitals from "./reportWebVitals";

const router = createBrowserRouter([
  {
    element: <App style={{ width: "100vw" }} />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/play",
        element: <PlayPage />,
      },
      {
        path: "/previous-games",
        element: <GameHistoryPage />,
      },
      {
        path: "/account",
        element: <AccountInformationPage />,
      },
      {
        path: "/",
        element: <HomePage />
      }
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
