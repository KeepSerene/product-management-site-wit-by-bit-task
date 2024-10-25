import "./ToggleButton.css";

function ToggleButton({ options, value, onChange }) {
  return (
    <div className="toggle-button">
      {options.map((option) => (
        <button
          key={option.value}
          className={`toggle-option ${value === option.value ? "active" : ""}`}
          onClick={() => onChange(option.value)}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}

export default ToggleButton;
