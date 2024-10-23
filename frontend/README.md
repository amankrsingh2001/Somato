# 🍔 **Somato** - Your Favorite Food Delivered Fast! 🚀

Welcome to **Somato**, a full-stack food-ordering application designed to satisfy your cravings with ease! Whether you're in the mood for pizza, sushi, or dessert, **Somato** makes ordering simple and fast. 😋

## 🌟 Features
- 🛒 **Add Items to Cart**: Browse a variety of dishes and add them to your cart.
- 🔐 **Secure Authentication**: JWT-based authentication for secure logins using **Bcrypt**.
- 💳 **Stripe Payments**: Secure payments with **Stripe** integration.
- 📦 **Order Tracking**: Monitor your orders from kitchen to doorstep.
- ❌ **Order Cancellation**: Cancel orders before preparation starts.
- 🌐 **Responsive Design**: Built with **React** & **Tailwind CSS** for a smooth, responsive user experience.
- 📸 **Image Upload**: Manage food images via **Cloudinary**.

## 💻 Tech Stack
### Frontend 🌐: **React**, **Tailwind CSS**, **Context API**  
### Backend 🔧: **Node.js**, **Express.js**, **MongoDB**, **Cloudinary**, **Multer**  
### Payments 💳: **Stripe**  
### Authentication 🔒: **Bcrypt**, **JWT**

## 🛠️ Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/somato.git
   cd somato
2. Install dependencies:
    ```bash
    cd backend && npm install
    cd ../frontend && npm install
3. Create a .env file in the backend folder with:
    ```bash
    MONGO_URI=<your-mongodb-uri>
    JWT_SECRET=<your-jwt-secret>
    CLOUDINARY_CLOUD_NAME=<your-cloudinary-cloud-name>
    CLOUDINARY_API_KEY=<your-cloudinary-api-key>
    CLOUDINARY_API_SECRET=<your-cloudinary-api-secret>
    STRIPE_SECRET_KEY=<your-stripe-secret-key>
4. Start servers:
   ```bash
    cd backend && npm run dev
    cd ../frontend && npm start

# 🚀 Future Enhancements
### 🛵 Real-time Order Tracking using WebSockets.
### 💬 Customer Reviews for food items.
### 🛡️ Admin Dashboard for managing restaurants and orders.
### 📱 Mobile App for easier ordering.
# 🤝 Contributing
### Fork this repo, make your changes, and submit a pull request. Let's improve Somato together! 🍽️


📧 Contact
Aman Kumar Singh: amankrsingh082001@gmail.com