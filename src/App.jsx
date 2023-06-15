import {
  RouterProvider,
  createBrowserRouter,
  Navigate,
} from "react-router-dom";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Todo from "./pages/Todo";
const token = true;
const router = createBrowserRouter([
  {
    path: "/",
    element: <SignIn />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/todo",
    element: token ? <Todo /> : <Navigate to="/" replace />,
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
