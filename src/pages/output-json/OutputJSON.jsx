import "./OutputJSON.css";

// Library import
import { Home } from "lucide-react";
import { useNavigate } from "react-router-dom";

function OutputJson() {
  const navigate = useNavigate();

  const jsonData = {
    products: {
      name: "Example Product",
      category: "Shoes",
      brand: "Example Brand",
      image: "",
      variants: [
        {
          name: "Size",
          values: ["M", "L"],
        },
        {
          name: "Color",
          values: ["Black", "Red"],
        },
      ],
      combinations: {
        a: {
          name: "M/Black",
          sku: "ABC12",
          quantity: 4,
          inStock: false,
        },
        b: {
          name: "L/Red",
          sku: "ABC12",
          quantity: null,
          inStock: true,
        },
      },
      priceInr: 500,
      discount: {
        method: "pct",
        value: 12,
      },
    },
    categories: [
      {
        id: "abc",
        name: "Shoes",
      },
      {
        id: "xyz",
        name: "T-shirt",
      },
    ],
  };

  return (
    <div className="output-json">
      <div className="output-header">
        <h1 className="page-title">Output JSON</h1>

        <button
          className="button-secondary back-home-button"
          onClick={() => navigate("/")}
        >
          <Home size={16} />
          Back to Home
        </button>
      </div>

      <div className="json-output">
        <pre className="json-content">{JSON.stringify(jsonData, null, 2)}</pre>
      </div>
    </div>
  );
}

export default OutputJson;
