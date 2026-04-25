const Order = require("../models/Order");

const placeOrder = async (req, res) => {
  try {
    const { items, address, totalPrice } = req.body;

    const order = await Order.create({
      items,
      address,
      totalPrice,
    });

    res.status(201).json({
      message: "Order placed successfully",
      order,
    });
  } catch (error) {
    res.status(500).json({
      message: "Order failed",
      error: error.message,
    });
  }
};
const getOrders = async (req, res) => {
  try {
    const orders = await Order.find().sort({ createdAt: -1 });

    res.json(orders);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch orders",
    });
  }
};


module.exports = { placeOrder, getOrders };