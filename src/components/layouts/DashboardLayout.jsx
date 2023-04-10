import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Sidebar from '../Sidebar';

function DashboardLayout() {
  const navigate = useNavigate();
  useEffect(() => {
    const authUser = localStorage.getItem('authToken');
    if (!authUser) {
      navigate('/');
    }
  });

  const handlelogout = () => {
    axios
      .delete('http://localhost:3000/users/sign_out', {
        headers: {
          'Content-Type': 'application/json',
          Authorization: window.localStorage.getItem('authToken'),
        },
      })
      .then(() => {
        window.localStorage.removeItem('authToken');
        navigate('/');
      });
  };

  return (
    <>
      <div className="flex justify-end mr-10 ">
        <button
          type="button"
          onClick={handlelogout}
          className="rounded bg-lime-400 p-2 mt-4 font-semibold"
        >
          Logout
        </button>
      </div>
      <Sidebar />
      <div className="body">
        <Outlet />
      </div>
    </>
  );
}

export default DashboardLayout;