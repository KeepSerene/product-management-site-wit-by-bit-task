import "./Variants.css";

// React imports
import { Fragment, useState } from "react";

// Library imports
import { Plus, Trash2 } from "lucide-react";

function Variants() {
  const [options, setOptions] = useState([
    { name: "Size", values: ["M", "L"] },
    { name: "Color", values: ["Black", "Red"] },
  ]);

  const handleAddOption = () => {
    setOptions([...options, { name: "", values: [""] }]);
  };

  const handleDeleteOption = (index) => {
    setOptions(options.filter((_, i) => i !== index));
  };

  const handleOptionChange = (index, value) => {
    const newOptions = [...options];
    newOptions[index].name = value;
    setOptions(newOptions);
  };

  const handleValueChange = (optionIndex, valueIndex, value) => {
    const newOptions = [...options];
    newOptions[optionIndex].values[valueIndex] = value;
    setOptions(newOptions);
  };

  return (
    <div className="variants-form">
      <div className="variants-header">
        <p className="option-column">Option *</p>

        <p className="values-column">Values *</p>
      </div>

      {options.map((option, optionIndex) => (
        <div key={optionIndex} className="option-row">
          <div className="option-column">
            <label htmlFor={`option${optionIndex + 1}`} className="sr-only">
              Enter an option
            </label>

            <input
              type="text"
              id={`option${optionIndex + 1}`}
              value={option.name}
              onChange={(event) =>
                handleOptionChange(optionIndex, event.target.value)
              }
              className="form-input"
            />

            {!option.name && (
              <div className="error-message">Option can't be empty</div>
            )}
          </div>

          <div className="values-column">
            <div className="values-list">
              {option.values.map((value, valueIndex) => (
                <Fragment key={valueIndex}>
                  <label htmlFor={`value${valueIndex + 1}`} className="sr-only">
                    Enter a value for the chosen option
                  </label>

                  <input
                    type="text"
                    id={`value${valueIndex + 1}`}
                    value={value}
                    onChange={(event) =>
                      handleValueChange(
                        optionIndex,
                        valueIndex,
                        event.target.value
                      )
                    }
                    className="form-input"
                  />
                </Fragment>
              ))}
            </div>

            <button
              type="button"
              className="delete-button"
              onClick={() => handleDeleteOption(optionIndex)}
            >
              <Trash2 size={16} />
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
