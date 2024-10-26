import "./PriceInfo.css";

// Component imports
import ToggleButton from "../../../components/toggle-button/ToggleButton";

// Context imports
import { useProductContext } from "../../../contexts/ProductContext";

// React imports
import { useEffect, useRef } from "react";

function PriceInfo() {
  const { productData, setProductData } = useProductContext();

  const priceInputRef = useRef(null);

  useEffect(() => priceInputRef.current?.focus(), []);

  const handlePriceChange = (value) => {
    setProductData((prev) => ({
      ...prev,
      priceInfo: {
        ...prev.priceInfo,
        priceInr: value,
      },
    }));
  };

  const handleDiscountChange = (value, field) => {
    setProductData((prev) => ({
      ...prev,
      priceInfo: {
        ...prev.priceInfo,
        discount: {
          ...prev.priceInfo.discount,
          [field]: value,
        },
      },
    }));
  };

  return (
    <div className="price-info-form form">
      <div className="form-group">
        <label htmlFor="price-input" className="form-label">
          Price *
        </label>

        <div className="price-field">
          <span className="currency-symbol">₹</span>

          <input
            type="number"
            ref={priceInputRef}
            id="price-input"
            min={0}
            step={0.01}
            value={productData.priceInfo.priceInr}
            onChange={(event) => handlePriceChange(event.target.value)}
            className="form-input price-input"
          />
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="discount-input" className="form-label">
          Discount
        </label>

        <div className="discount-row">
          <input
            type="number"
            id="discount-input"
            min={0}
            step={0.5}
            value={productData.priceInfo.discount.value}
            onChange={(event) =>
              handleDiscountChange(event.target.value, "value")
            }
            className="form-input"
          />

          <div className="discount-toggle-btn">
            <ToggleButton
              options={[
                { value: "pct", label: "%" },
                { value: "flat", label: "₹" },
              ]}
              value={productData.priceInfo.discount.method}
              onChange={(value) => handleDiscountChange(value, "method")}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PriceInfo;
