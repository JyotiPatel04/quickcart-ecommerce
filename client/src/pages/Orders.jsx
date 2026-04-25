import { useEffect, useState } from "react";
import API from "../api/api";

function Orders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const res = await API.get("/orders");
        setOrders(res.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchOrders();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-10">
      <h1 className="text-3xl font-bold mb-8">My Orders</h1>

      {orders.length === 0 ? (
        <p>No orders found.</p>
      ) : (
        orders.map((order) => (
          <div
            key={order._id}
            className="bg-white rounded-xl shadow p-6 mb-6"
          >
            <h2 className="font-bold mb-3">
              Order ID: {order._id}
            </h2>

            <p className="mb-2">
              Total: ₹{order.totalPrice}
            </p>

            <p className="text-gray-500 mb-3">
              Date: {new Date(order.createdAt).toLocaleString()}
            </p>

            {order.items.map((item, index) => (
              <div key={index}>
                {item.name} — ₹{item.price} × {item.quantity}
              </div>
            ))}
          </div>
        ))
      )}
    </div>
  );
}

export default Orders;