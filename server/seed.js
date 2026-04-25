require("dotenv").config();
const mongoose = require("mongoose");
const Product = require("./models/Product");

mongoose.connect(process.env.MONGO_URI);

const products = [
  {
    name: "iPhone 15",
    price: 79999,
    image: "https://images.unsplash.com/photo-1702289613082-1252ec3eb5d4?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aXBob25lJTIwMTUlMjBwcm98ZW58MHx8MHx8fDA%3D",
    description: "Latest Apple smartphone",
    category: "Electronics",
    rating: 4.5,
  },
  {
    name: "Samsung Galaxy S24",
    price: 69999,
    image: "https://images.unsplash.com/photo-1706372124814-417e2f0c3fe0?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8U2Ftc3VuZyUyMEdhbGF4eSUyMFMyNHxlbnwwfHwwfHx8MA%3D%3D",
    description: "Powerful Android phone",
    category: "Electronics",
    rating: 4.6,
  },
  {
    name: "Laptop",
    price: 55999,
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400",
    description: "High performance laptop",
    category: "Electronics",
    rating: 4.4,
  },
  {
    name: "Headphones",
    price: 2999,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400",
    description: "Wireless headphones",
    category: "Accessories",
    rating: 4.3,
  },
  {
    name: "Smart Watch",
    price: 4999,
    image: "https://images.unsplash.com/photo-1617043983671-adaadcaa2460?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c21hcnQlMjB3YXRjaHxlbnwwfHwwfHx8MA%3D%3D",
    description: "Fitness tracking smart watch",
    category: "Accessories",
    rating: 4.2,
  },
  {
    name: "Bluetooth Speaker",
    price: 1999,
    image: "https://images.unsplash.com/photo-1507878566509-a0dbe19677a5?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fEJsdWV0b290aCUyMFNwZWFrZXJ8ZW58MHx8MHx8fDA%3D",
    description: "Portable Bluetooth speaker",
    category: "Accessories",
    rating: 4.1,
  },
  {
    name: "T-Shirt",
    price: 999,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400",
    description: "Comfortable cotton t-shirt",
    category: "Fashion",
    rating: 4.0,
  },
  {
    name: "Jeans",
    price: 1999,
    image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=400",
    description: "Stylish blue denim jeans",
    category: "Fashion",
    rating: 4.2,
  },
  {
    name: "Backpack",
    price: 1499,
    image: "https://images.unsplash.com/photo-1509762774605-f07235a08f1f?w=400",
    description: "Durable travel backpack",
    category: "Bags",
    rating: 4.3,
  },
  {
    name: "Running Shoes",
    price: 3499,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400",
    description: "Comfortable running shoes",
    category: "Footwear",
    rating: 4.5,
  },
  {
    name: "Gaming Mouse",
    price: 1299,
    image: "https://images.unsplash.com/photo-1632160871990-be30194885aa?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8R2FtaW5nJTIwTW91c2V8ZW58MHx8MHx8fDA%3D",
    description: "High precision gaming mouse",
    category: "Electronics",
    rating: 4.4,
  },
  {
    name: "Keyboard",
    price: 1599,
    image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=400",
    description: "Mechanical keyboard",
    category: "Electronics",
    rating: 4.3,
  },
];

const seedData = async () => {
  await Product.deleteMany();
  await Product.insertMany(products);

  console.log("Products inserted");
  process.exit();
};

seedData();