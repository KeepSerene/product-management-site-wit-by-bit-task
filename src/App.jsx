import "./App.css";

// Library imports
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Route imports
import Home from "./pages/home/Home";
import AddProduct from "./pages/add-product/AddProduct";
import Description from "./pages/add-product/description/Description";
import Variants from "./pages/add-product/variants/Variants";
import Combinations from "./pages/add-product/combinations/Combinations";
import PriceInfo from "./pages/add-product/price-info/PriceInfo";
import OutputJSON from "./pages/output-json/OutputJSON";

// Context provider imports
import { ProductContextProvider } from "./contexts/ProductContext";

function App() {
  return (
    <BrowserRouter>
      <ProductContextProvider>
        <div className="app">
          <div className="app-wrapper">
            <Routes>
              <Route path="/" element={<Home />} />

              <Route path="/add-product" element={<AddProduct />}>
                <Route path="description" element={<Description />} />
                <Route path="variants" element={<Variants />} />
                <Route path="combinations" element={<Combinations />} />
                <Route path="price-info" element={<PriceInfo />} />
              </Route>

              <Route path="/output-json" element={<OutputJSON />} />
            </Routes>
          </div>
        </div>
      </ProductContextProvider>
    </BrowserRouter>
  );
}

export default App;
