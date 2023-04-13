import { useDispatch } from 'react-redux';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import Sidebar from '../Sidebar';
import { signOutUserAsync } from '../../features/auth/authSlice';
import useAuth from '../../hooks/useAuth';

function DashboardLayout() {
  const token = useAuth();
  const location = useLocation();
  const dispatch = useDispatch();

  const handlelogout = () => {
    dispatch(signOutUserAsync());
  };

  if (!token) {
    return <Navigate to="/" replace state={{ from: location }} />;
  }

  return (
    <>
      <Sidebar />
      <div className="body">
              <div className="flex justify-end mr-10 ">
        <button
          type="button"
          onClick={handlelogout}
          className="rounded bg-lime-400 p-2 mt-4 font-semibold"
        >
          Logout
        </button>
      </div>
        <Outlet />
      </div>
    </>
  );
}

export default DashboardLayout;
