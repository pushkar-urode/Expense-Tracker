# Expense Tracker 💰

A simple expense tracking app built with React + Vite frontend and Express + MongoDB backend.

✨ Features
- User authentication (JWT)
- Create, read, update, delete expenses
- Responsive design with Tailwind CSS
- Hot reload for fast development

🛠️ Tech Stack
- **Frontend**: React, Vite, Tailwind CSS, Axios
- **Backend**: Node.js, Express, MongoDB, Mongoose, JWT

📦 Setup

Backend
```bash
cd backend
npm install
# Create .env file with: MONGO_URI, JWT_SECRET, PORT=5000
npm run dev
```

Frontend
```bash
cd frontend
npm install
# Create .env.local file with: VITE_API_URL=http://localhost:5000
npm run dev
```

📋 Prerequisites
- Node.js (v18+)
- npm
- MongoDB

📡 API Endpoints
- `GET /api` - Health check
- `POST /api/auth/register` - Register user
- `POST /api/auth/login` - Login user
- `GET /api/expenses` - Get all expenses
- `POST /api/expenses` - Create expense
- `PUT /api/expenses/:id` - Update expense
- `DELETE /api/expenses/:id` - Delete expense

🤝 Contributing
Open an issue or submit a PR with clear description.

📧 Contact
For questions, open an issue or contact the repository owner.
