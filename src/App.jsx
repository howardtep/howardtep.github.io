import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./Home";
import Crypto from "./crypto/Crypto";

const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/crypto", element: <Crypto /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
