# QuickCart - MERN E-commerce Application

QuickCart is a full-stack e-commerce web application built using the MERN stack (MongoDB, Express.js, React, Node.js).
The application allows users to browse products, manage carts, place orders, and securely authenticate using JWT.

---

## Live Demo

Frontend: https://quickcart-ecommerce-seven.vercel.app
Backend: https://quickcart-backend-wptm.onrender.com

---

## Features

* User registration and login with JWT authentication
* Protected routes
* Product listing with search, filter, sorting, and pagination
* Product details page
* Add to cart functionality
* Update quantity and remove items from cart
* Checkout functionality
* Orders stored in MongoDB
* My Orders page
* Fully deployed full-stack application

---

## Tech Stack

### Frontend

* React
* Tailwind CSS
* React Router
* Axios

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT Authentication
* bcryptjs

---

### Folder Structure
QuickCart
├── client
│   └── src
│       ├── components
│       ├── context
│       ├── pages
│       ├── api
│       └── App.jsx
│
└── server
    ├── config
    ├── controllers
    ├── models
    ├── routes
    ├── seed.js
    └── server.js
    
----

## Installation and Setup

### Clone the repository

git clone https://github.com/JyotiPatel04/quickcart-ecommerce.git
cd quickcart-ecommerce

---


### Backend Setup

cd server
npm install
npm run dev

---


### Frontend Setup


cd client
npm install
npm run dev

---

## Environment Variables

### Server (.env)

Create a `.env` file inside the **server** folder:

MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
PORT=5000


---

### Client (.env)

Create a `.env` file inside the **client** folder:


VITE_API_URL=https://quickcart-backend-wptm.onrender.com/api


---

## API Endpoints

### Auth

POST /api/auth/register
POST /api/auth/login

### Products

GET /api/products
GET /api/products/:id

### Orders

POST /api/orders
GET /api/orders

---

## Deployment

Frontend deployed on **Vercel**
Backend deployed on **Render**
Database hosted on **MongoDB Atlas**

---

## Future Improvements

* Admin dashboard
* Product add/update/delete functionality
* Order status tracking
* Payment gateway integration
* Product image upload

---

## Author

Jyoti Patel
Full Stack MERN Developer
