import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./pages/root/root";
import Home from "./pages/homepage.js/HomePage";
import ProductsPage from "./pages/Products/Products";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/products", element: <ProductsPage /> },
    ],
  },
]);

const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
