import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import HomePage from './components/Homepage';
import MyBookings from './components/MyBookings';
import Teachers from './components/Teachers';
import BookingForm from './components/BookingForm';
import Sidebar from './components/Sidebar';
import Course from './components/Course';
import './stylesheets/sidebar.css';
import './stylesheets/App.css';
import './stylesheets/course.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <Sidebar />
        <div className="body">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/my-bookings" element={<MyBookings />} />
            <Route path="/booking-form" element={<BookingForm />} />
            <Route path="/teachers" element={<Teachers />} />
            <Route path="/course" element={<Course />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
