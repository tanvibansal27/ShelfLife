import { useParams } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import axios from "axios";

import Navbar from "../components/Navbar";
import MenuBar from "../components/MenuBar";
import Footer from "../components/Footer";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
function ProductDetails(){

    const { id } = useParams();
  const navigate = useNavigate();
const { addToCart } = useContext(CartContext);

const [product, setProduct] = useState(null);

useEffect(() => {
  axios
    .get(`http://localhost:5001/api/products/${id}`)
    .then((res) => {
      setProduct(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
}, [id]);
if (!product) {
  return <h2>Loading...</h2>;
}
    return (
  <>
    <Navbar />
    <button
className="back-btn"
onClick={() => navigate(-1)}
>
← Back
</button>
    <MenuBar />

    <div className="product-details-container">

      <div className="product-left">
        <img
          src={product.image}
          alt={product.title}
          width="300"
        />
      </div>

      <div className="product-right">

        <h1>{product.title}</h1>

<p className="rating">
⭐ {product.rating}
</p>

<h2>₹{product.price}</h2>

<h3>Description</h3>

<p>{product.description}</p>

        <p>
          <strong>Category:</strong> {product.category}
        </p>

        <p>
          <strong>Brand:</strong> {product.brand}
        </p>

        <p className="stock">
  In Stock ({product.stock})
</p>

       <div className="product-buttons">

<button onClick={() => addToCart(product)}>
  Add To Cart
</button>

<button className="buy-btn">
  Buy Now
</button>

</div>

      </div>

    </div>

    <Footer />
  </>
);

}

export default ProductDetails;