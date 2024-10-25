import "./Home.css";

// React imports
import { useState } from "react";

// Library imports
import { useNavigate } from "react-router-dom";
import { Plus } from "lucide-react";

// Component imports
import CategoryCard from "../../components/category-card/CategoryCard";
import Modal from "../../components/modal/Modal";

function Home() {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [categories, setCategories] = useState([
    { id: "abc", name: "Shoes" },
    { id: "xyz", name: "T-shirt" },
  ]);

  const [newCategory, setNewCategory] = useState("");

  const handleAddCategory = () => {
    if (newCategory.trim()) {
      setCategories([
        ...categories,
        {
          id: Math.random().toString(36).substr(2, 9),
          name: newCategory,
        },
      ]);
      setShowModal(false);
      setNewCategory("");
    }
  };

  return (
    <div className="wrapper">
      <div className="home-header">
        <h1 className="page-title">Products</h1>
        <div className="home-buttons">
          <button className="button-primary" onClick={() => setShowModal(true)}>
            <Plus size={16} />
            Add Category
          </button>
          <button
            className="button-primary"
            onClick={() => navigate("/add-product/description")}
          >
            <Plus size={16} />
            Add Product
          </button>
        </div>
      </div>

      {categories.map((category) => (
        <CategoryCard
          key={category.id}
          category={category}
          products={[]} // Add sample products here
        />
      ))}

      {showModal && (
        <Modal title="Add Category" onClose={() => setShowModal(false)}>
          <div className="form-group">
            <label className="form-label">Category name *</label>
            <input
              type="text"
              className="form-input"
              placeholder="T-shirt"
              value={newCategory}
              onChange={(e) => setNewCategory(e.target.value)}
            />
          </div>
          <div className="modal-buttons">
            <button
              className="button-secondary"
              onClick={() => setShowModal(false)}
            >
              Cancel
            </button>
            <button className="button-primary" onClick={handleAddCategory}>
              Save
            </button>
          </div>
        </Modal>
      )}
    </div>
  );
}

export default Home;
