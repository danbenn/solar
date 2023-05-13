import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import './App.css';
import { OperatorDashboard } from "./pages/OperatorDashboard";

const router = createBrowserRouter([
  {
    path: "/farms/:farmID",
    element: <OperatorDashboard />,
  },
]);

function App() {
  return (
    <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
  );
}

export default App;
