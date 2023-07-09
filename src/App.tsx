import {
  RouterProvider,
  createBrowserRouter,
  Navigate,
} from "react-router-dom";
import { SignInPage, SignUpPage, TodoPage } from "./pages/pageModules";
const isToken = localStorage.getItem("access_token");

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/signin" />,
  },
  {
    path: "/signin",
    element: isToken ? <Navigate to="/todo" replace /> : <SignInPage />,
  },
  {
    path: "/signup",
    element: isToken ? <Navigate to="/todo" /> : <SignUpPage />,
  },
  {
    path: "/todo",
    element: <TodoPage />,
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
