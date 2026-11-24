import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Home from '../pages/Home/Home';
import Industries from '../pages/Industries/Industries';
import IndustryDetails from '../pages/IndustryDetails/IndustryDetails';
import Features from '../pages/Features/Features';
import About from '../pages/About/About';
import Contact from '../pages/Contact/Contact';
import Careers from '../pages/Careers/Careers';
import Life from '../pages/Life/Life';
import Team from '../pages/Team/Team';
import Blogs from '../pages/Blogs/Blogs';
import Events from '../pages/Events/Events';
import Testimonials from '../pages/Testimonials/Testimonials';
import Pricing from '../pages/Pricing/Pricing';
import AISolutions from '../pages/AISolutions/AISolutions';
import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';
import Dashboard from '../pages/Dashboard/Dashboard';

export const AppRoutes = () => {
  return (
    <Routes>
      {/* Public Pages wrapped in MainLayout (Header + Content + Footer) */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/industries" element={<Industries />} />
        <Route path="/industries/:slug" element={<IndustryDetails />} />
        <Route path="/features" element={<Features />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/life" element={<Life />} />
        <Route path="/team" element={<Team />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/events" element={<Events />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/ai-solutions" element={<AISolutions />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Route>

      {/* Dedicated Workspace Dashboard (Custom DashboardLayout inside) */}
      <Route path="/dashboard" element={<Dashboard />} />

      {/* 404 Catch-All */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default AppRoutes;
