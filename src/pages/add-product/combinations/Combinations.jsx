import "./Combinations.css";

// React imports
import { useState } from "react";

// Component imports
import ToggleButton from "../../../components/toggle-button/ToggleButton";

function Combinations() {
  const [combinations, setCombinations] = useState([
    {
      name: "M/Black",
      sku: "ABC12",
      inStock: false,
      quantity: "",
    },
    {
      name: "M/Red",
      sku: "SDF3",
      inStock: true,
      quantity: "5",
    },
    {
      name: "L/Black",
      sku: "HWE2",
      inStock: false,
      quantity: "9",
    },
    {
      name: "L/Red",
      sku: "ABC12",
      inStock: true,
      quantity: "9",
    },
  ]);

  const checkDuplicateSku = (sku, index) => {
    return combinations.some((combo, i) => i !== index && combo.sku === sku);
  };

  return (
    <div className="combinations-form">
      <div className="combinations-header">
        <p>Combination</p>
        <p>SKU *</p>
        <p>In stock</p>
        <p>Quantity</p>
      </div>

      {combinations.map((combo, index) => (
        <div key={combo.name} className="combination-row">
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
                const newCombinations = [...combinations];
                newCombinations[index].sku = event.target.value;
                setCombinations(newCombinations);
              }}
              className="form-input"
            />

            {checkDuplicateSku(combo.sku, index) && (
              <div className="error-message">Duplicate SKU</div>
            )}
          </div>

          <div className="toggle-field">
            <ToggleButton
              options={[
                { value: true, label: "On" },
                { value: false, label: "Off" },
              ]}
              value={combo.inStock}
              onChange={(value) => {
                const newCombinations = [...combinations];
                newCombinations[index].inStock = value;
                setCombinations(newCombinations);
              }}
            />
          </div>

          <div className="quantity-field">
            <label htmlFor="quantity-input" className="sr-only">
              Enter the quantity
            </label>

            <input
              type="number"
              id="quantity-input"
              value={combo.quantity}
              onChange={(event) => {
                const newCombinations = [...combinations];
                newCombinations[index].quantity = event.target.value;
                setCombinations(newCombinations);
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
