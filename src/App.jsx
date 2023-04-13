import { createContext } from 'react';
import PropTypes from 'prop-types';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { useSelector } from 'react-redux';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import DashboardLayout from './components/layouts/DashboardLayout';
import HomePage from './components/Homepage';
import MyBookings from './components/MyBookings';
import Teachers from './components/Teachers';
import BookingForm from './components/BookingForm';
import CourseDetails from './components/CourseDetails';
import TeachersDetails from './components/TeachersDetails';
import './stylesheets/sidebar.css';
import './stylesheets/index.css';
import './stylesheets/App.css';
import './stylesheets/course.css';
import './stylesheets/bookingform.css';

export const AuthContext = createContext(null);

function AuthProvider({ children }) {
  const token = useSelector((state) => state.auth.token);
  return <AuthContext.Provider value={token}>{children}</AuthContext.Provider>;
}

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route element={<DashboardLayout />}>
            <Route path="/courses" element={<HomePage />} />
            <Route path="/my-bookings" element={<MyBookings />} />
            <Route path="/booking-form" element={<BookingForm />} />
            <Route path="/teachers" element={<Teachers />} />
            <Route path="/courses/:id" element={<CourseDetails />} />
            <Route path="/courses/:id/:teacher" element={<TeachersDetails />} />
          </Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
