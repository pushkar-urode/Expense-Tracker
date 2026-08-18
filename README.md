# Expense Tracker

A simple expense tracking application with a React + Vite frontend and an Express + MongoDB backend.

This repository contains two subprojects:

- `frontend` — React + Vite UI (Tailwind CSS, Axios)
- `backend` — Node.js + Express API (Mongoose, JWT authentication)

---

## Features

- User authentication (JWT)
- Create, read, update, delete expenses
- JSON API for expenses
- Local development for frontend and backend with hot reload

---

## Tech stack

- Frontend: React, Vite, Tailwind CSS, Axios
- Backend: Node.js, Express, Mongoose (MongoDB), bcryptjs, jsonwebtoken
- Dev tools: Vite, nodemon

---

## Prerequisites

- Node.js (v18+ recommended)
- npm
- MongoDB instance (local or hosted)

---

## Setup & Run (Backend)

1. Open a terminal and go to the backend folder:

   cd backend

2. Install dependencies:

   npm install

3. Create a `.env` file in `backend` with at least the following variables:

   MONGO_URI="your_mongodb_connection_string"
   JWT_SECRET="your_jwt_secret"
   PORT=5000

4. Start the backend in development mode (uses nodemon):

   npm run dev

The backend server listens on port 5000 by default and exposes a health endpoint at:

GET /api

which returns { "message": "api is working" }.

---

## Setup & Run (Frontend)

1. Open a terminal and go to the frontend folder:

   cd frontend

2. Install dependencies:

   npm install

3. Create a `.env` (or `.env.local`) in `frontend` with the API base URL used by the app (example):

   VITE_API_URL=http://localhost:5000

4. Start the development server:

   npm run dev

The Vite dev server runs on port 5173 by default (the backend CORS currently allows http://localhost:5173).

---

## Environment variables

Backend (required):

- MONGO_URI — MongoDB connection string
- JWT_SECRET — secret for signing JWT tokens
- PORT — (optional) port to run the backend (defaults to 5000 if not provided)

Frontend (optional):

- VITE_API_URL — base URL for API requests, e.g. http://localhost:5000

---

## API (overview)

- GET /api
  - Health check

- Authentication routes (in `backend/src/routes/authRoutes.js`)
  - likely endpoints: POST /register, POST /login — use these to create users and obtain JWTs

- Expense routes (mounted at `/api/expenses`)
  - Standard CRUD endpoints for managing expenses (create, list, update, delete)

Refer to the route files in `backend/src/routes/` for exact request shapes and required headers (Authorization: Bearer <token>)

---

## Development notes

- Backend: `server.js` connects to MongoDB using `connectDB()` from `backend/src/config/db.js`.
- Frontend uses Axios to talk to the backend; ensure `VITE_API_URL` points to your running backend.
- There are `vercel.json` files in both `frontend` and `backend` folders for deployment configuration.

---

## Contributing

Contributions are welcome. Open an issue or submit a pull request with a clear description of the change.

---

## License

This repository does not include a license file. Add a `LICENSE` if you want to make the license explicit.

---

## Contact

If you have questions, open an issue or contact the repository owner.
