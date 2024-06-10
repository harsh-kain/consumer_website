import { FunctionComponent } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import AppLayout from "./AppLayout";
import { ApiProvider } from "@reduxjs/toolkit/query/react";
import { api } from "./services/api";
import AppointmentBookingPage from './pages/AppointmentBookingPage'
const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/appointment-booking",
        element: <AppointmentBookingPage />,
      },
    ],
  },
]);

const App: FunctionComponent = () => {
  return (
    <ApiProvider api={api}>
      <RouterProvider router={router} />
    </ApiProvider>
  );
};

export default App;
