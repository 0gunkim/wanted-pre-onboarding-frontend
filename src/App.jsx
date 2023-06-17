import {
  RouterProvider,
  createBrowserRouter,
  Navigate,
} from "react-router-dom";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Todo from "./pages/Todo";
const isToken = localStorage.getItem("access_token");

const router = createBrowserRouter([
  {
    path: "/",
    // element: isToken ? <Navigate to="/todo" replace /> : <SignIn />,
    element: <Navigate to="/signin" />,
  },
  {
    path: "/signin",
    element: isToken ? <Navigate to="/todo" /> : <SignIn />,
    // element: <SignIn />,
  },
  {
    path: "/signup",
    element: isToken ? <Navigate to="/todo" /> : <SignUp />,
  },
  {
    path: "/todo",
    element: isToken ? <Todo /> : <Navigate to="/signin" />,
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
