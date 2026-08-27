import React from "react";
import { Routes, Route } from "react-router";
import Layout from "./components/Layout";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import CandidateRegistration from "./pages/registration/CandidateRegistration";
import CandidateDashboard from "./pages/candidates/CandidateDashboard";
// import Login from "./pages/Login";
// import Register from "./pages/Register";

// const Login = () => <div className="p-20 text-center text-2xl font-bold text-gov-blue flex-grow flex items-center justify-center">Login Page</div>;
const Register = () => <div className="p-20 text-center text-2xl font-bold text-gov-blue flex-grow flex items-center justify-center">Registration Page</div>;

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<CandidateRegistration />} />
        <Route path="application" element={<CandidateDashboard />} />
      </Route>
    </Routes>
  );
}