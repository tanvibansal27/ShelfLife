function FeaturedProducts({ search }) {
  const products = [
    {
      name: "Fresh Apples",
      price: "₹120",
      unit: "/kg",
      image: "🍎",
    },
    {
      name: "Bananas",
      price: "₹60",
      unit: "/dozen",
      image: "🍌",
    },
    {
      name: "Fresh Milk",
      price: "₹56",
      unit: "/L",
      image: "🥛",
    },
    {
      name: "Brown Bread",
      price: "₹45",
      unit: "/pack",
      image: "🍞",
    },
  ];

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="products-section">
      <h2>Featured Products</h2>

      <div className="products-grid">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product, index) => (
            <div className="product-card" key={index}>
              <div className="product-image">
                {product.image}
              </div>

              <h3>{product.name}</h3>

              <p className="price">
                {product.price}
                <span>{product.unit}</span>
              </p>

              <button>Add To Cart</button>
            </div>
          ))
        ) : (
          <h2 style={{ textAlign: "center", width: "100%" }}>
            No Products Found 😔
          </h2>
        )}
      </div>
    </section>
  );
}

export default FeaturedProducts;