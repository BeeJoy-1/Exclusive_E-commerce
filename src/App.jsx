import React from "react";
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home/Home";
import RootLayout from "./components/RootLayout/RootLayout";
import ProductPage from "./pages/ProductPage/ProductPage";
import ProductDetail from "./pages/ProductDetail/ProductDetail";
import Login from "./pages/Auth/Login/Login";
import WishList from "./pages/WishList/WishList";
import AddToCart from "./pages/AddToCart/AddToCart";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />}></Route>
        <Route path="/Home" element={<Home />}></Route>
        <Route path="/About" element={<ProductPage />}></Route>
        <Route path="/ProductDetail/:id" element={<ProductDetail />}></Route>
        <Route path="/ProductDetail" element={<ProductPage />}></Route>
        <Route path="/Login" element={<Login />}></Route>
        <Route path="/WishList" element={<WishList />}></Route>
        <Route path="/AddToCart" element={<AddToCart />}></Route>
      </Route>
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
