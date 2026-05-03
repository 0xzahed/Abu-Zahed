import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../pages/Home";
import Resume from "../pages/Resume";
import AdminAuthGate from "../pages/admin/AdminAuthGate";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/resume",
        Component: Resume,
      },
    ],
  },
  {
    path: "/admin",
    Component: AdminAuthGate,
  },
]);

export default router;
