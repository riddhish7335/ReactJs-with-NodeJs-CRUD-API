import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Layout from "./Layout/Layout";
import AddProduct from "./Pages/AddProduct";
import Home from "./Pages/Home";
import UpdateProduct from "./Pages/UpdateProduct";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />} >
            <Route index element={<Home />} />
            <Route path="product/add" element={<AddProduct/>} />
            <Route path="product/edit/:id" element={<UpdateProduct/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
