import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App";
import Phones from "./components/Phones";
import AddNew from "./components/AddNew";
import Phone from "./components/Phone";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Phones />,
        loader: () => fetch("http://localhost:4000/phones"),
      },
      {
        path: "phones/:id",
        element: <Phone />,
        loader: ({ params }) =>
          fetch(`http://localhost:4000/phones/${params.id}`),
      },
      {
        path: "addnew",
        element: <AddNew />,
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
