import "./Home.css";

// React imports
import { useEffect, useRef, useState } from "react";

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

  const [shouldShowModal, setShouldShowModal] = useState(false);
  const [newCategoryName, setNewCategoryName] = useState("");

  const { categories, addCategory } = useProductContext();

  const categoryButtonRef = useRef(null);
  const modalInputRef = useRef(null);

  const handleAddCategory = () => {
    if (newCategoryName.trim()) {
      addCategory(newCategoryName);
      setShouldShowModal(false);
      setNewCategoryName("");
    }
  };

  const handleCloseModal = () => {
    setShouldShowModal(false);

    categoryButtonRef.current?.focus();
  };

  useEffect(() => modalInputRef.current?.focus(), [shouldShowModal]);

  return (
    <div className="home">
      <section className="home-header">
        <h1 className="page-title">Products</h1>

        <div className="home-buttons">
          <button
            type="button"
            ref={categoryButtonRef}
            onClick={() => setShouldShowModal(true)}
            className="button-secondary"
          >
            <Plus size={16} />
            Add Category
          </button>

          <button
            type="button"
            onClick={() => navigate("/add-product/description")}
            className="button-primary"
          >
            <Plus size={16} />
            Add Product
          </button>
        </div>
      </section>

      {categories.map((category) => (
        <CategoryCard key={category.id} category={category} products={[]} />
      ))}

      {shouldShowModal && (
        <Modal
          title="Add Category"
          onClose={() => handleCloseModal()}
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
                ref={modalInputRef}
                value={newCategoryName}
                onChange={(event) => setNewCategoryName(event.target.value)}
                required
                placeholder="T-shirt"
                className="form-input"
              />
            </div>

            <div className="modal-buttons">
              <button
                type="button"
                className="button-secondary"
                onClick={handleCloseModal}
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
