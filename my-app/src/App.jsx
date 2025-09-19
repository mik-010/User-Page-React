import { UserProvider } from "./components/userProvider/UserProvider.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LogIn from "./pages/Login.jsx";
import User from "./pages/User.jsx";
import Default from "./pages/default/Default.jsx";
import Article from "./pages/article/Article.jsx";
import "./App.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LogIn />,
  },
  {
    path: "/user/:id",
    element: <User />,
  },
  {
    path: "/user/:id/article",
    element: <Article />,
  },
  {
    path: "*",
    element: <Default />,
  },
]);

function App() {
  return (
    <UserProvider>
      <RouterProvider router={router} />
    </UserProvider>
  );
}

export default App;