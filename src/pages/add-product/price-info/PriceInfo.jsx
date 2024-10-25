import "./PriceInfo.css";

// React imports
import { useState } from "react";

// Component imports
import ToggleButton from "../../../components/toggle-button/ToggleButton";

function PriceInfo() {
  const [priceInfo, setPriceInfo] = useState({
    price: "12000",
    discount: "12",
    discountMethod: "pct",
  });

  return (
    <div className="price-info-form">
      <div className="form-group">
        <label htmlFor="price-input" className="form-label">
          Price *
        </label>

        <div className="price-field">
          <span className="currency-symbol">₹</span>

          <input
            type="number"
            id="price-input"
            value={priceInfo.price}
            onChange={(event) =>
              setPriceInfo({ ...priceInfo, price: event.target.value })
            }
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
            value={priceInfo.discount}
            onChange={(event) =>
              setPriceInfo({ ...priceInfo, discount: event.target.value })
            }
            className="form-input"
          />

          <div className="discount-toggle-btn">
            <ToggleButton
              options={[
                { value: "pct", label: "%" },
                { value: "flat", label: "₹" },
              ]}
              value={priceInfo.discountMethod}
              onChange={(value) =>
                setPriceInfo({ ...priceInfo, discountMethod: value })
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PriceInfo;
