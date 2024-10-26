import "./ToggleButton.css";

function ToggleButton({ options, value, onChange, variant = "default" }) {
  if (variant === "switch") {
    return (
      <div className="switch-button">
        <button
          type="button"
          className={`switch-track ${value ? "active" : ""}`}
          onClick={() => onChange(!value)}
          role="switch"
          aria-checked={value}
        >
          <span className="switch-thumb"></span>

          <span className="switch-labels">
            <span className={`switch-label on ${value ? "active" : ""}`}>
              On
            </span>

            <span className={`switch-label off ${!value ? "active" : ""}`}>
              Off
            </span>
          </span>
        </button>
      </div>
    );
  }

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
