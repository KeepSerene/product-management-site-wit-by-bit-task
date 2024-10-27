import "./Description.css";

// Library imports
import { Image } from "lucide-react";

// Context imports
import { useProductContext } from "../../../contexts/ProductContext";

// React imports
import { useEffect, useRef } from "react";

function Description() {
  const { productData, setProductData, categories } = useProductContext();

  const productNameInputRef = useRef(null);

  useEffect(() => productNameInputRef.current?.focus(), []);

  const handleChange = (field, value) => {
    setProductData((prev) => ({
      ...prev,
      description: {
        ...prev.description,
        [field]: value,
      },
    }));
  };

  return (
    <div className="description-form form">
      <h2 className="form-title">Description</h2>

      <div className="form-group">
        <label htmlFor="product-name-input" className="form-label">
          Product name *
        </label>

        <input
          type="text"
          ref={productNameInputRef}
          id="product-name-input"
          value={productData.description.name}
          onChange={(event) => handleChange("name", event.target.value)}
          className="form-input"
        />
      </div>

      <div className="form-group">
        <label htmlFor="category-select-input" className="form-label">
          Category *
        </label>

        <select
          id="category-select-input"
          value={productData.description.category}
          onChange={(event) => handleChange("category", event.target.value)}
          className="form-input"
        >
          <option value="">Select a category</option>

          {categories.map((category) => (
            <option key={category.id} value={category.name}>
              {category.name}
            </option>
          ))}
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="brand-input" className="form-label">
          Brand *
        </label>

        <input
          type="text"
          id="brand-input"
          value={productData.description.brand}
          onChange={(event) => handleChange("brand", event.target.value)}
          className="form-input"
        />
      </div>

      <div className="form-group">
        <button type="button" className="upload-button">
          <Image size={16} />
          Upload Image
        </button>
      </div>
    </div>
  );
}

export default Description;
