import React from 'react'
import { NavLink, Link } from 'react-router-dom';
import { useForm } from 'react-hook-form'
import axios from 'axios'


const RegisterForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()
    
    const onSubmit = (data) => {
        axios.post("http://localhost:3000/users", data).then((response) => {
          console.log(response);
        });
      };
    
  return (
        <div className="w-full px-5 py-24 text-gray-600 justify-self-center sm:w-[85%] bg-lime-400 sm:justify-self-end sm:py-16 min-h-screen">
          <div className="max-w-sm m-auto bg-white bg-opacity-25 rounded shadow-xl">
            <form className="p-10" onSubmit={handleSubmit}>
              <p className="mb-8 text-2xl font-light text-center text-gray-700">
                Sign up
              </p>
              <div className="mb-2">
                <input
                  type="text"
                  name="username" {...register("username")}
                  className="flex-1 w-full px-4 py-2 text-base text-gray-700 placeholder-gray-400 bg-white border border-transparent border-gray-300 rounded-lg shadow-sm appearance-none focus:outline-none focus:ring-2 focus:ring-lime-400 focus:border-transparent"
                  placeholder="Username"
                />
              </div>
              <div className="mb-2">
                <input
                  type="text"
                  name="email" {...register("email")}
                  className="flex-1 w-full px-4 py-2 text-base text-gray-700 placeholder-gray-400 bg-white border border-transparent border-gray-300 rounded-lg shadow-sm appearance-none focus:outline-none focus:ring-2 focus:ring-lime-400 focus:border-transparent"
                  placeholder="Email"
                />
              </div>

              <div className="mb-2">
                <input
                  type="password"
                  name="password" {...register("password")}
                  className="flex-1 w-full px-4 py-2 text-base text-gray-700 placeholder-gray-400 bg-white border border-transparent border-gray-300 rounded-lg shadow-sm appearance-none focus:outline-none focus:ring-2 focus:ring-lime-400 focus:border-transparent"
                  placeholder="Password"
                />
              </div>
              <div className="mb-2">
                <input
                  type="password"
                  name="confirmation" {...register("password")}
                  className="flex-1 w-full px-4 py-2 text-base text-gray-700 placeholder-gray-400 bg-white border border-transparent border-gray-300 rounded-lg shadow-sm appearance-none focus:outline-none focus:ring-2 focus:ring-lime-400 focus:border-transparent"
                  placeholder="Confirm Password"
                />
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
          <Link to="/login" className="text-base font-medium align-baseline hover:text-gray-800">
            Login
          </Link>
        </div>
      </div>
    </div>
  )
}

export default RegisterForm