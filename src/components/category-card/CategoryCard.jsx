import "./CategoryCard.css";

function CategoryCard({ category, products }) {
  return (
    <article className="category-card">
      <h2 className="category-title">{category.name}</h2>

      <div className="products-grid">
        {products.map((product) => (
          <section key={product.id} className="product-item">
            <h3>{product.name}</h3>

            <p>{product.brand}</p>

            <p>₹{product.price}</p>
          </section>
        ))}
      </div>
    </article>
  );
}

export default CategoryCard;
