# 🛒 ShoppyGlobe Backend

## #GitHub link: https://github.com/adityasoam55/Ecommerce-API-Proj

## 🚀 Features

✅ **Authentication & Authorization**

- JWT-based login and registration for both Users and Vendors
- Secure cookie-based access and refresh tokens
- Protected routes using middleware

✅ **Product Management**

- Vendors can add, update, and delete products
- Products can include images, thumbnails, and detailed information
- Users can view products and post reviews

✅ **Cart Management**

- Add, update, or delete items from cart
- Retrieve full cart with product details
- Only accessible to authenticated users

✅ **Checkout & Orders**

- Checkout splits orders by vendor automatically
- Total price calculation for each vendor
- Vendors can view orders placed for their products

✅ **Reviews**

- Authenticated users can add reviews for products

✅ **Error Handling**

- Centralized error handler using `APIerror`, `APIresponse`, and `asyncHandler`
- Comprehensive validation for inputs

## 🏗️ Tech Stack

| Layer              | Technology              |
| ------------------ | ----------------------- |
| **Backend**        | Node.js, Express.js     |
| **Database**       | MongoDB (Mongoose ODM)  |
| **Authentication** | JWT + Cookies           |
| **Validation**     | Custom middlewares      |
| **Testing**        | ThunderClient / Postman |

---

## 📁 Folder Structure

````

backend/
│
├── server.js
│
├── models/
│   ├── User.model.js
│   ├── Product.model.js
│   └── Cart.model.js
│
├── controllers/
│   ├── auth.controller.js
│   ├── product.controller.js
│   └── cart.controller.js
│
├── routes/
│   ├── auth.routes.js
│   ├── product.routes.js
│   └── cart.routes.js
│
├── middleware/
    └── auth.middleware.js

---

## ⚙️ Environment Variables

Create a `.env` file in the root directory:

```env
PORT=5000
MONGODB_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/<DB name>
JWT_SECRET=<your-secret-key>
````

---

## 🧩 API Routes Overview

### 👤 User Routes (`/api/v1/user`)

| Method | Endpoint    | Description                  |
| ------ | ----------- | ---------------------------- |
| POST   | `/register` | Register new user            |
| POST   | `/login`    | Login user and return tokens |

---

### 🛍️ Product Routes (`/api/v1/products`)

| Method | Endpoint        | Description          |
| ------ | --------------- | -------------------- |
| GET    | `/products`     | Get all products     |
| GET    | `/products/:id` | Get a single product |

---

### 🛒 Cart Routes (`/api/v1/cart`)

| Method | Endpoint | Description                  |
| ------ | -------- | ---------------------------- |
| GET    | `/`      | Get all items in user’s cart |
| POST   | `/`      | Add product to cart          |
| PUT    | `/:id`   | Update quantity in cart      |
| DELETE | `/:id`   | Remove product from cart     |

---

## 🧪 Testing with ThunderClient / Postman

### 1️⃣ User Authentication

- **Register** → `POST /api/v1/user/register`
- **Login** → `POST /api/v1/user/login`
- Copy cookies or use Bearer token for subsequent routes

### 2️⃣ Product Routes

- Get all or specific products

### 3️⃣ Cart Routes

- Add, update, and delete items from cart while logged in

---

## 🛠️ Installation and Running Locally

```bash
# Clone repository
git clone https://github.com/adityasoam55/Ecommerce-API-Proj

# Move into project
cd Ecommerce-API-Proj

# Install dependencies
npm install

# Create .env file and fill credentials
touch .env

# Run the app
npm run dev
```

App runs on:
👉 `http://localhost:5000`

---

## 🧑‍💻 Developer

**👤 Ashreek A R**
📧 (mailto:adityasoam55@gmail.com)

---
