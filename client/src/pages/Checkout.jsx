import { useState } from "react";
import { useCart } from "../context/CartContext";
import API from "../api/api";

function Checkout() {
  const { cartItems, clearCart } = useCart();

  const [address, setAddress] = useState({
    fullName: "",
    phone: "",
    fullAddress: "",
    city: "",
    pincode: "",
  });

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handlePlaceOrder = async () => {
    try {
      const orderItems = cartItems.map((item) => ({
        productId: item._id || item.id,
        name: item.name,
        price: item.price,
        quantity: item.quantity,
        image: item.image,
      }));

      const res = await API.post("/orders", {
        items: orderItems,
        address,
        totalPrice,
      });

      alert(res.data.message);
      clearCart();
    } catch (error) {
      alert(error.response?.data?.message || "Order failed");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-10">
      <h1 className="text-3xl font-bold mb-8">Checkout</h1>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="text-xl font-bold mb-4">Delivery Address</h2>

          <input
            type="text"
            placeholder="Full Name"
            value={address.fullName}
            onChange={(e) =>
              setAddress({ ...address, fullName: e.target.value })
            }
            className="w-full border p-3 rounded mb-4"
          />

          <input
            type="text"
            placeholder="Phone Number"
            value={address.phone}
            onChange={(e) =>
              setAddress({ ...address, phone: e.target.value })
            }
            className="w-full border p-3 rounded mb-4"
          />

          <textarea
            placeholder="Full Address"
            value={address.fullAddress}
            onChange={(e) =>
              setAddress({ ...address, fullAddress: e.target.value })
            }
            className="w-full border p-3 rounded mb-4"
            rows="4"
          />

          <input
            type="text"
            placeholder="City"
            value={address.city}
            onChange={(e) =>
              setAddress({ ...address, city: e.target.value })
            }
            className="w-full border p-3 rounded mb-4"
          />

          <input
            type="text"
            placeholder="Pincode"
            value={address.pincode}
            onChange={(e) =>
              setAddress({ ...address, pincode: e.target.value })
            }
            className="w-full border p-3 rounded"
          />
        </div>

        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="text-xl font-bold mb-4">Payment Summary</h2>

          <p className="text-gray-600 mb-2">
            Payment Method: Dummy Cash on Delivery
          </p>

          <p className="text-2xl font-bold mb-6">Total: ₹{totalPrice}</p>

          <button
            onClick={handlePlaceOrder}
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700"
          >
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
}

export default Checkout;