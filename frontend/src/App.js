import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Layout from "./Layout/Layout";
import AddProduct from "./Pages/AddProduct";
import Home from "./Pages/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />} >
            <Route index element={<Home />} />
            <Route path="add-new-product" element={<AddProduct/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
