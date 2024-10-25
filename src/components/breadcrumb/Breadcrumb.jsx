import "./Breadcrumb.css";

// React imports
import { Fragment } from "react";

// Library imports
import { ChevronRight } from "lucide-react";

function Breadcrumb({ steps, activeStep }) {
  return (
    <div className="breadcrumb">
      {steps.map((step, index) => (
        <Fragment key={step}>
          <div
            className={`breadcrumb-item ${
              activeStep === index ? "active" : ""
            }`}
          >
            {step}
          </div>

          {index < steps.length - 1 && (
            <ChevronRight className="breadcrumb-separator" size={16} />
          )}
        </Fragment>
      ))}
    </div>
  );
}

export default Breadcrumb;
