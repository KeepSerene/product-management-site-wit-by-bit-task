import "./NotFound.css";

// Library imports
import { ArrowLeft, Home } from "lucide-react";
import { useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="not-found">
      <article className="not-found-content">
        <h1 className="not-found-title">404</h1>

        <section className="not-found-details">
          <h2 className="not-found-subtitle">Page Not Found</h2>
          <p className="not-found-text">
            The page you're looking for doesn't exist or has been moved.
          </p>
        </section>

        <div className="not-found-actions">
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="button-secondary"
          >
            <ArrowLeft size={16} />
            Go Back
          </button>

          <button
            type="button"
            onClick={() => navigate("/")}
            className="button-primary"
          >
            <Home size={16} />
            Back to Home
          </button>
        </div>
      </article>
    </div>
  );
}

export default NotFound;
