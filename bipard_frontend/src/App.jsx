import React from "react";
import { Routes, Route } from "react-router";
import Layout from "./components/Layout";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import CandidateRegistration from "./pages/registration/CandidateRegistration";

import Application from "./pages/candidates/Application";
import Test from "./pages/candidates/Test";
import CandidateDashboard from "./pages/candidates/CandidateDashboard";

import PrivacyPolicy from "./pages/privacypolicy/PrivacyPolicy";
import RefundPolicy from "./pages/privacypolicy/RefundPolicy";


export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<CandidateRegistration />} />

        <Route path="application-form" element={<Application />} />
        <Route path="test" element={<Test />} />
        <Route path="application" element={<CandidateDashboard />} />

        <Route path="privacy-policy" element={<PrivacyPolicy/>} />
        <Route path="refund-policy" element={<RefundPolicy/>}/>

      </Route>
    </Routes>
  );
}