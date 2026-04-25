# QuickCart - MERN E-commerce Application

QuickCart is a full-stack e-commerce web application built using the MERN stack (MongoDB, Express.js, React, Node.js).

---

## Features

- User registration and login (JWT authentication)
- Protected routes
- Product listing
- Search, filter, sorting, and pagination
- Product details page
- Add to cart
- Update quantity and remove items
- Checkout functionality
- Orders saved in MongoDB
- My Orders page

---

## Tech Stack

### Frontend
- React
- Tailwind CSS
- React Router
- Axios

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- bcryptjs

---

## Folder Structure

QuickCart  
│  
├── client  
│   └── src  
│       ├── components  
│       ├── pages  
│       ├── api  
│       └── App.jsx  
│  
└── server  
    ├── models  
    ├── routes  
    ├── controllers  
    ├── seed.js  
    └── server.js  

---

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

Create a `.env` file inside the `server` folder:

MONGO_URI=your_mongodb_connection_string  
JWT_SECRET=your_jwt_secret  
PORT=5000  

---

## Future Improvements

- Admin dashboard
- Product add/update/delete
- Order status tracking
- Payment gateway integration
- Deployment on Vercel and Render
