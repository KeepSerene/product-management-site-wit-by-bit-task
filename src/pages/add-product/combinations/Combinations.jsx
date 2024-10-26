import "./Combinations.css";

// React imports
import { useEffect, useState } from "react";

// Component imports
import ToggleButton from "../../../components/toggle-button/ToggleButton";

// Context imports
import { useProductContext } from "../../../contexts/ProductContext";

function Combinations() {
  const [combinations, setCombinations] = useState({});

  const { productData, setProductData } = useProductContext();

  useEffect(() => {
    // Generate combinations based on variants
    if (productData.variants.length > 0) {
      const newCombinations = {};

      const generateCombos = (variants, current = [], index = 0) => {
        if (index === variants.length) {
          const name = current.join("/");

          if (!combinations[name]) {
            newCombinations[name] = {
              name,
              sku: "",
              inStock: false,
              quantity: "",
            };
          } else {
            newCombinations[name] = combinations[name];
          }
          return;
        }

        variants[index].values.forEach((value) => {
          generateCombos(variants, [...current, value], index + 1);
        });
      };

      generateCombos(productData.variants);
      setCombinations(newCombinations);
      setProductData((prev) => ({ ...prev, combinations: newCombinations }));
    }
  }, [productData.variants]);

  return (
    <div className="combinations-form form">
      <div className="combinations-header">
        <p>Combination</p>
        <p>SKU *</p>
        <p>In stock</p>
        <p>Quantity</p>
      </div>

      {Object.entries(combinations).map(([key, combo]) => (
        <div key={key} className="combination-row">
          <p>{combo.name}</p>

          <div className="sku-field">
            <label htmlFor="sku-input" className="sr-only">
              Enter SKU
            </label>

            <input
              type="text"
              id="sku-input"
              value={combo.sku}
              onChange={(event) => {
                const newCombinations = { ...combinations };
                newCombinations[key].sku = event.target.value;
                setCombinations(newCombinations);
                setProductData((prev) => ({
                  ...prev,
                  combinations: newCombinations,
                }));
              }}
              className="form-input"
            />
          </div>

          <div className="toggle-field">
            <ToggleButton
              options={[
                { value: true, label: "On" },
                { value: false, label: "Off" },
              ]}
              value={combo.inStock}
              onChange={(value) => {
                const newCombinations = { ...combinations };
                newCombinations[key].inStock = value;
                setCombinations(newCombinations);
                setProductData((prev) => ({
                  ...prev,
                  combinations: newCombinations,
                }));
              }}
            />
          </div>

          <div className="quantity-field">
            <label htmlFor="quantity-input" className="sr-only">
              Enter desired quantity
            </label>

            <input
              type="number"
              id="quantity-input"
              value={combo.quantity}
              onChange={(event) => {
                const newCombinations = { ...combinations };
                newCombinations[key].quantity = event.target.value;
                setCombinations(newCombinations);
                setProductData((prev) => ({
                  ...prev,
                  combinations: newCombinations,
                }));
              }}
              className="form-input"
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default Combinations;
