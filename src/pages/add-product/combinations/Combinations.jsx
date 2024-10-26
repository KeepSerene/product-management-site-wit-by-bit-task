import "./Combinations.css";

// React imports
import { useEffect, useRef, useState } from "react";

// Component imports
import ToggleButton from "../../../components/toggle-button/ToggleButton";

// Context imports
import { useProductContext } from "../../../contexts/ProductContext";

function Combinations() {
  const [combinations, setCombinations] = useState({});
  const [isInitialLoad, setIsInitialLoad] = useState(true);

  const { productData, setProductData } = useProductContext();

  const firstSKUInputRef = useRef(null);

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

  // Handle initial focus only
  useEffect(() => {
    if (isInitialLoad && Object.keys(combinations).length > 0) {
      firstSKUInputRef.current?.focus();
      setIsInitialLoad(false); // Prevent future focuses
    }
  }, [combinations, isInitialLoad]);

  return (
    <div className="combinations-form form">
      {/* Desktop headers */}
      <div className="combinations-header">
        <p>Combination</p>
        <p>SKU *</p>
        <p>In stock</p>
        <p>Quantity</p>
      </div>

      {Object.entries(combinations).map(([key, combo], index) => (
        <div key={key} className="combination-row">
          {/* "field-label & field-groups are added because of a smaller-screen-friendly layout" */}
          <p className="combo-name">
            <span className="field-label">Combination: </span>
            {combo.name}
          </p>

          <div className="field-group sku-field">
            <span className="field-label">SKU *</span>

            <label htmlFor="sku-input" className="sr-only">
              Enter SKU
            </label>

            <input
              type="text"
              ref={index === 0 ? firstSKUInputRef : null}
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

          <div className="field-group toggle-field">
            <span className="field-label">In stock</span>

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
              variant="switch"
            />
          </div>

          <div className="field-group quantity-field">
            <span className="field-label">Quantity</span>

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
              disabled={!combo.inStock}
              className="form-input"
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default Combinations;
