import { useDispatch, useSelector } from 'react-redux';
import { Navigate, NavLink, useLocation } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { loginUserAsync } from '../features/auth/authSlice';
import useAuth from '../hooks/useAuth';

const LoginForm = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const token = useAuth();
  const isLoggingIn = useSelector((state) => state.auth.isLoading);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    dispatch(loginUserAsync(data));
  };

  if (token) {
    return <Navigate to="/courses" replace state={{ from: location }} />;
  }

  return (
    <div className="w-full px-5 py-24 text-gray-600  justify-self-center bg-lime-400 sm:justify-self-end sm:py-16 min-h-screen">
      <div className="max-w-sm h-96 m-auto bg-white bg-opacity-25 rounded shadow-xl">
        <form className="p-10" onSubmit={handleSubmit(onSubmit)}>
          <p className="mb-8 text-2xl font-light text-center text-blue-600">
            Login
          </p>
          <div className="mb-2">
            <input
              type="text"
              name="email"
              {...register('email')}
              placeholder="Email"
              className="flex-1 w-full px-4 py-2 text-base text-gray-700 placeholder-gray-400 bg-white border border-transparent border-gray-300 rounded-lg shadow-sm appearance-none focus:outline-none focus:ring-2 focus:ring-lime-400 focus:border-transparent"
            />
          </div>
          <div className="mb-2">
            <input
              type="password"
              name="password"
              {...register('password')}
              placeholder="password"
              className="flex-1 w-full px-4 py-2 text-base text-gray-700 placeholder-gray-400 bg-white border border-transparent border-gray-300 rounded-lg shadow-sm appearance-none focus:outline-none focus:ring-2 focus:ring-lime-400 focus:border-transparent"
            />
            {errors.password && <span>This field is required</span>}
          </div>
          <div>
            <button
              className="w-full px-4 py-2 text-base font-semibold text-center text-white transition duration-200 ease-in rounded-lg shadow-md disabled:opacity-50 bg-lime-800 enabled:hover:bg-lime-500"
              type="submit"
              disabled={isLoggingIn}
            >
              {isLoggingIn ? 'Signing in...' : 'Login'}
            </button>
          </div>
        </form>
        <div className="py-5 text-center">
          <NavLink
            to="/register"
            className="text-base font-medium align-baseline hover:text-gray-800"
          >
            Create an account
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
