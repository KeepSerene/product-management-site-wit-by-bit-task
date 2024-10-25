import { createContext, useContext, useState } from "react";

const ProductContext = createContext();

export function ProductContextProvider({ children }) {
  const [productData, setProductData] = useState({
    description: {
      name: "",
      category: "",
      brand: "",
      image: "",
    },

    variants: [],

    combinations: {},

    priceInfo: {
      priceInr: "",
      discount: {
        method: "pct",
        value: "",
      },
    },
  });

  const [categories, setCategories] = useState([
    { id: "abc", name: "Shoes" },
    { id: "xyz", name: "T-shirt" },
  ]);

  const addCategory = (categoryName) => {
    const newCategory = {
      id: Math.random().toString(36).substring(2, 9),
      name: categoryName,
    };

    setCategories((prevCategories) => [...prevCategories, newCategory]);
  };

  return (
    <ProductContext.Provider
      value={{
        productData,
        setProductData,
        categories,
        setCategories,
        addCategory,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}

export const useProductContext = () => useContext(ProductContext);
