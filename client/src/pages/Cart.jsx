import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";
function Cart() {
  const { cartItems, increaseQuantity, decreaseQuantity, removeFromCart } =
    useCart();

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-10">
      <h1 className="text-3xl font-bold mb-8">Your Cart</h1>

      {cartItems.length === 0 ? (
        <p className="text-gray-600">Your cart is empty.</p>
      ) : (
        <div className="space-y-6">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow p-4 flex items-center gap-6"
            >
              <div className="w-24 h-24 bg-gray-100 rounded-lg flex items-center justify-center">
                <img
                  src={item.image}
                  alt={item.name}
                  className="max-w-full max-h-full object-contain"
                />
              </div>

              <div className="flex-1">
                <h2 className="text-lg font-semibold">{item.name}</h2>

                <p className="text-blue-600 font-bold">₹{item.price}</p>

                <div className="flex items-center gap-3 mt-2">
                  <button
                    onClick={() => decreaseQuantity(item.id)}
                    className="bg-gray-200 px-3 py-1 rounded hover:bg-gray-300"
                  >
                    -
                  </button>

                  <span className="font-semibold">{item.quantity}</span>

                  <button
                    onClick={() => increaseQuantity(item.id)}
                    className="bg-gray-200 px-3 py-1 rounded hover:bg-gray-300"
                  >
                    +
                  </button>

                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="ml-6 bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}

          <div className="bg-white rounded-xl shadow p-6 flex justify-between items-center">
            <h2 className="text-2xl font-bold">Total: ₹{totalPrice}</h2>

            <Link
              to="/checkout"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
            >
              Proceed to Checkout
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
