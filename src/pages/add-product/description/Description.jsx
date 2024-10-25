import "./Description.css";

// React imports
import { useState } from "react";

// Library imports
import { Image } from "lucide-react";

function Description() {
  const [formData, setFormData] = useState({
    name: "",
    category: "Shoes",
    brand: "",
    image: null,
  });

  return (
    <div className="description-form">
      <div className="form-group">
        <label className="form-label">Product name *</label>

        <input
          type="text"
          className="form-input"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
      </div>

      <div className="form-group">
        <label className="form-label">Category *</label>

        <select
          className="form-input"
          value={formData.category}
          onChange={(event) =>
            setFormData({ ...formData, category: event.target.value })
          }
        >
          <option value="Shoes">Shoes</option>
          <option value="T-shirt">T-shirt</option>
        </select>
      </div>

      <div className="form-group">
        <label className="form-label">Brand *</label>

        <input
          type="text"
          className="form-input"
          value={formData.brand}
          onChange={(event) =>
            setFormData({ ...formData, brand: event.target.value })
          }
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
