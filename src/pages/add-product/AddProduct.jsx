import "./AddProduct.css";

// Library imports
import { Outlet, useLocation, useNavigate } from "react-router-dom";

// Component imports
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";

const STEPS = [
  { path: "description", label: "Description" },
  { path: "variants", label: "Variants" },
  { path: "combinations", label: "Combinations" },
  { path: "price-info", label: "Price info" },
];

function AddProduct() {
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname.split("/").pop();
  const currentStepIndex = STEPS.findIndex((step) => step.path === currentPath);

  const handleBack = () => {
    if (currentStepIndex > 0) {
      navigate(`/add-product/${STEPS[currentStepIndex - 1].path}`);
    } else {
      navigate("/");
    }
  };

  const handleNext = () => {
    if (currentStepIndex < STEPS.length - 1) {
      navigate(`/add-product/${STEPS[currentStepIndex + 1].path}`);
    } else {
      navigate("/output-json");
    }
  };

  return (
    <section className="add-product">
      <h1 className="page-title">Add Product</h1>

      <Breadcrumb
        steps={STEPS.map((step) => step.label)}
        activeStep={currentStepIndex}
      />

      <div className="add-product-content">
        <Outlet />
      </div>

      <div className="form-buttons">
        <button type="button" className="button-secondary" onClick={handleBack}>
          {currentStepIndex === 0 ? "Cancel" : "Back"}
        </button>

        <button type="button" className="button-primary" onClick={handleNext}>
          {currentStepIndex === STEPS.length - 1 ? "Save" : "Next"}
        </button>
      </div>
    </section>
  );
}

export default AddProduct;
