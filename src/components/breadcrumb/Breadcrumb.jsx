import "./Breadcrumb.css";

// React imports
import { Fragment } from "react";

// Library imports
import { ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

function Breadcrumb({ steps, activeStep }) {
  const navigate = useNavigate();

  return (
    <div className="breadcrumb">
      {steps.map((step, index) => (
        <Fragment key={step.label}>
          <div
            onClick={() => navigate(`/add-product/${step.path}`)}
            className={`breadcrumb-item ${
              activeStep === index
                ? "active"
                : index < activeStep
                ? "completed"
                : ""
            }`}
          >
            {step.label}
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
