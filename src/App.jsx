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

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />}></Route>
        <Route path="/Home" element={<Home />}></Route>
        <Route path="/About" element={<ProductPage />}></Route>
        {/* <Route path="/Contact" element={"asd"}></Route>
        <Route path="/Signup" element={"sda"}></Route> */}
      </Route>
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
