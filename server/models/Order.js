const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },

    items: [
      {
        productId: String,
        name: String,
        price: Number,
        quantity: Number,
        image: String,
      },
    ],

    address: {
      fullName: String,
      phone: String,
      fullAddress: String,
      city: String,
      pincode: String,
    },

    totalPrice: Number,

    paymentMethod: {
      type: String,
      default: "Dummy Cash on Delivery",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Order", orderSchema);