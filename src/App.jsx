import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./features/Home";
import AppLayout from "./features/AppLayout";
import Track from "./features/Track";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "track/:id", element: <Track /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
