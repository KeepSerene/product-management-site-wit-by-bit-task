import "./Variants.css";

// React imports
import { useEffect, useState } from "react";

// Library imports
import { Plus, Trash2 } from "lucide-react";

// Context imports
import { useProductContext } from "../../../contexts/ProductContext";

function Variants() {
  const { setProductData } = useProductContext();
  const [options, setOptions] = useState([{ name: "", values: [""] }]);

  useEffect(() => {
    setProductData((prev) => ({
      ...prev,
      variants: options.filter((opt) => opt.name && opt.values[0]),
    }));
  }, [options, setProductData]);

  const handleAddOption = () => {
    setOptions([...options, { name: "", values: [""] }]);
  };

  const handleDeleteOption = (index) => {
    setOptions(options.filter((_, i) => i !== index));
  };

  return (
    <div className="variants-form form">
      <div className="variants-header">
        <p className="option-column">Option *</p>
        <p className="values-column">Values *</p>
      </div>

      {options.map((option, optionIndex) => (
        <div key={optionIndex} className="option-row">
          <div className="option-column">
            <label htmlFor={`option-input${optionIndex}`} className="sr-only">
              Enter an option
            </label>

            <input
              type="text"
              id={`option-input${optionIndex}`}
              value={option.name}
              onChange={(event) => {
                const newOptions = [...options];
                newOptions[optionIndex].name = event.target.value;
                setOptions(newOptions);
              }}
              className="form-input"
            />

            {!option.name && (
              <div className="error-message">Option can't be empty</div>
            )}
          </div>

          <div className="values-column">
            <label htmlFor={`value-input${optionIndex}`} className="sr-only">
              Enter the corresponding value
            </label>

            <input
              type="text"
              id={`value-input${optionIndex}`}
              value={option.values[0]}
              onChange={(event) => {
                const newOptions = [...options];
                newOptions[optionIndex].values[0] = event.target.value;
                setOptions(newOptions);
              }}
              className="form-input"
            />

            <button
              type="button"
              onClick={() => handleDeleteOption(optionIndex)}
              aria-label="Click to delete the current option"
              className="delete-button"
            >
              <Trash2 size={20} />
            </button>
          </div>
        </div>
      ))}

      <button
        type="button"
        className="button-secondary add-option-button"
        onClick={handleAddOption}
      >
        <Plus size={16} />
        Add Option
      </button>
    </div>
  );
}

export default Variants;
