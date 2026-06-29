import Navbar from "../components/Navbar";
import MenuBar from "../components/MenuBar";

function Wishlist() {
  const products = [
    {
      name: "Fresh Apples",
      price: "₹120",
      image: "🍎",
    },
    {
      name: "Fresh Milk",
      price: "₹56",
      image: "🥛",
    },
    {
      name: "Brown Bread",
      price: "₹45",
      image: "🍞",
    },
    {
      name: "Bananas",
      price: "₹60",
      image: "🍌",
    },
  ];

  return (
    <>
      <Navbar />
      <MenuBar />

      <div className="wishlist-container">
        <div className="wishlist-card">

          <h2>My Wishlist</h2>

          <div className="wishlist-grid">

            {products.map((product, index) => (
              <div className="wishlist-product" key={index}>

                <div className="wishlist-image">
                  {product.image}
                </div>

                <h3>{product.name}</h3>

                <p>{product.price}</p>

                <button className="wishlist-btn">
                  Move To Cart
                </button>

              </div>
            ))}

          </div>

        </div>
      </div>
    </>
  );
}

export default Wishlist;