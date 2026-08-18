import React from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./Home/Home";
import Example from "./Home/Footer";
import Features from "./Home/Features";
import Test from "./Home/CoreFeatured";
import Signup from "./Home/Signup";
import Login from "./Home/Login";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./pages/ProtectedRoute";
import AddExpense from "./pages/AddExpense";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Home Page */}
        <Route
          path="/"
          element={
            <>
              <Home />
              <Test />
              <Features />
              <Example />
            </>
          }
        />

        {/* Signup Page */}
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={
          <ProtectedRoute>
          <Dashboard />
          </ProtectedRoute>
          } />
        <Route path="/dashboard/create" element={
          <ProtectedRoute>
            <AddExpense/>
          </ProtectedRoute>
        }/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
