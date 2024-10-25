import "./OutputJSON.css";

// Library import
import { Home } from "lucide-react";
import { useNavigate } from "react-router-dom";

// Context imports
import { useProductContext } from "../../contexts/ProductContext";

function OutputJson() {
  const navigate = useNavigate();
  const { productData, categories } = useProductContext();

  const formatJSONData = () => {
    return {
      products: {
        name: productData.description.name,
        category: productData.description.category,
        brand: productData.description.brand,
        image: productData.description.image,
        variants: productData.variants,
        combinations: productData.combinations,
        priceInr: Number(productData.priceInfo.priceInr),
        discount: {
          method: productData.priceInfo.discount.method,
          value: Number(productData.priceInfo.discount.value),
        },
      },
      categories: categories,
    };
  };

  return (
    <div className="output-json">
      <section className="output-header">
        <h1 className="page-title">Output JSON</h1>

        <button
          className="button-secondary back-home-button"
          onClick={() => navigate("/")}
        >
          <Home size={16} />
          Back to Home
        </button>
      </section>

      <div className="json-output">
        <pre className="json-content">
          {JSON.stringify(formatJSONData(), null, 2)}
        </pre>
      </div>
    </div>
  );
}

export default OutputJson;
