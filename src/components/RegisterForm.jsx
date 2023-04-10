import { useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const RegisterForm = () => {
  const navigate = useNavigate();

  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: 'onBlur' });
  const password = useRef({});
  password.current = watch('password', '');
  const onSubmit = (data) => {
    axios
      .post(
        'http://localhost:3000/users',
        {
          user: {
            name: data.username,
            email: data.email,
            password: data.password,
          },
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      )
      .then((response) => {
        window.localStorage.setItem(
          'authToken',
          response.headers.authorization,
        );
        navigate('/dashboard');
      });
  };

  return (
    <div className="w-full px-5 py-24 text-gray-600 justify-self-center bg-lime-400 sm:justify-self-end sm:py-16 min-h-screen">
      <div className="max-w-sm m-auto bg-white bg-opacity-25 rounded shadow-xl">
        <form className="p-10" onSubmit={handleSubmit(onSubmit)}>
          <p className="mb-8 text-2xl font-light text-center text-gray-700">
            Sign up
          </p>
          <div className="mb-2">
            <input
              type="text"
              name="username"
              {...register('username', { required: true })}
              className="flex-1 w-full px-4 py-2 text-base text-gray-700 placeholder-gray-400 bg-white border border-transparent border-gray-300 rounded-lg shadow-sm appearance-none focus:outline-none focus:ring-2 focus:ring-lime-400 focus:border-transparent"
              placeholder="Username"
            />
          </div>
          <div className="mb-2">
            <input
              type="text"
              name="email"
              {...register('email', { required: true })}
              className="flex-1 w-full px-4 py-2 text-base text-gray-700 placeholder-gray-400 bg-white border border-transparent border-gray-300 rounded-lg shadow-sm appearance-none focus:outline-none focus:ring-2 focus:ring-lime-400 focus:border-transparent"
              placeholder="Email"
            />
          </div>

          <div className="mb-2">
            <input
              type="password"
              name="password"
              {...register('password', { required: true })}
              className="flex-1 w-full px-4 py-2 text-base text-gray-700 placeholder-gray-400 bg-white border border-transparent border-gray-300 rounded-lg shadow-sm appearance-none focus:outline-none focus:ring-2 focus:ring-lime-400 focus:border-transparent"
              placeholder="Password"
            />
            {errors.password && <span>This field is required</span>}
          </div>
          <div className="mb-2">
            <input
              type="password"
              name="confirmation"
              {...register('password_confirmation', {
                validate: (value) => value === password.current || 'The passwords do not match',
              })}
              className="flex-1 w-full px-4 py-2 text-base text-gray-700 placeholder-gray-400 bg-white border border-transparent border-gray-300 rounded-lg shadow-sm appearance-none focus:outline-none focus:ring-2 focus:ring-lime-400 focus:border-transparent"
              placeholder="Confirm Password"
            />
            {errors.password_confirmation && (
              <span>{errors.password_confirmation.message}</span>
            )}
          </div>
          <div className="flex items-center justify-between mt-4">
            <button
              type="submit"
              className="w-full px-4 py-2 text-base font-semibold text-center text-white transition duration-200 ease-in rounded-lg shadow-md disabled:opacity-50 bg-lime-800 focus:ring-lime-400 focus:ring-offset-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 enabled:disabled:hover:bg-lime-500"
            >
              Signup
            </button>
          </div>
        </form>
        <div className="py-5 text-center">
          <Link
            to="/"
            className="text-base font-medium align-baseline hover:text-gray-800"
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
