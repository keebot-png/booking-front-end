import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import DashboardLayout from './components/layouts/DashboardLayout';
import HomePage from './components/Homepage';
import MyBookings from './components/MyBookings';
import Teachers from './components/Teachers';
import BookingForm from './components/BookingForm';
import Course from './components/Course';
import './stylesheets/sidebar.css';
import './stylesheets/index.css';
import './stylesheets/App.css';
import './stylesheets/course.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route element={<DashboardLayout />}>
            <Route path="/dashboard" element={<HomePage />} />
            <Route path="/my-bookings" element={<MyBookings />} />
            <Route path="/booking-form" element={<BookingForm />} />
            <Route path="/teachers" element={<Teachers />} />
            <Route path="/course" element={<Course />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
