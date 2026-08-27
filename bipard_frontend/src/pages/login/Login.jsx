// src/pages/Login.jsx
import React from "react";
import CandidateLogin from "./CandidateLogin";

export default function Login() {
  return (
    // The Layout shell handles the Navbar, Ticker, and Footer. 
    // This just injects the new perfectly styled component into the main body.
    <CandidateLogin />
  );
}