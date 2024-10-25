import "./Home.css";

// React imports
import { useState } from "react";

// Library imports
import { useNavigate } from "react-router-dom";
import { Plus } from "lucide-react";

// Component imports
import CategoryCard from "../../components/category-card/CategoryCard";
import Modal from "../../components/modal/Modal";

// Context imports
import { useProductContext } from "../../contexts/ProductContext";

function Home() {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const { categories, addCategory } = useProductContext();
  const [newCategoryName, setNewCategoryName] = useState("");

  const handleAddCategory = () => {
    if (newCategoryName.trim()) {
      addCategory(newCategoryName);
      setShowModal(false);
      setNewCategoryName("");
    }
  };

  return (
    <div className="wrapper">
      <section className="home-header">
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
      </section>

      {categories.map((category) => (
        <CategoryCard key={category.id} category={category} products={[]} />
      ))}

      {showModal && (
        <Modal
          title="Add Category"
          onClose={() => setShowModal(false)}
          onSubmit={handleAddCategory}
        >
          <form
            onSubmit={(event) => {
              event.preventDefault();

              handleAddCategory();
            }}
          >
            <div className="form-group">
              <label className="form-label">Category name *</label>

              <input
                type="text"
                className="form-input"
                placeholder="T-shirt"
                value={newCategoryName}
                onChange={(event) => setNewCategoryName(event.target.value)}
                required
              />
            </div>

            <div className="modal-buttons">
              <button
                type="button"
                className="button-secondary"
                onClick={() => setShowModal(false)}
              >
                Cancel
              </button>

              <button type="submit" className="button-primary">
                Save
              </button>
            </div>
          </form>
        </Modal>
      )}
    </div>
  );
}

export default Home;
