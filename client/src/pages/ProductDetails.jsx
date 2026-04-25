import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import API from "../api/api";
import { useCart } from "../context/CartContext";

function ProductDetails() {
  const { id } = useParams();
  const { addToCart } = useCart();

  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await API.get(`/products/${id}`);
        setProduct(res.data);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetchProduct();
  }, [id]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-10">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow p-6 grid md:grid-cols-2 gap-6">
        <div className="w-full h-80 bg-gray-100 rounded-lg flex items-center justify-center">
          <img
            src={product.image}
            alt={product.name}
            className="max-w-full max-h-full object-contain p-4"
          />
        </div>

        <div>
          <h1 className="text-3xl font-bold">{product.name}</h1>

          <p className="text-blue-600 text-2xl font-bold mt-3">
            ₹{product.price}
          </p>

          <p className="text-gray-600 mt-4">{product.description}</p>

          <button
            onClick={() => {
              addToCart(product);
              alert("Product added to cart!");
            }}
            className="mt-6 w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
