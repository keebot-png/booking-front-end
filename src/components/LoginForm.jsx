import React from 'react'
import { useForm } from 'react-hook-form'
import axios from 'axios'

const LoginForm = () => {
const {
    register,
    handleSubmit,
    formState: { errors },
} = useForm()

const onSubmit = (data) => {
    axios.post("http://localhost:3000/users/sign_in", data).then((response) => {
      console.log(response);
    });
  };
  
  
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
                name="email" {...register("email")} 
                placeholder="Email"
                className="flex-1 w-full px-4 py-2 text-base text-gray-700 placeholder-gray-400 bg-white border border-transparent border-gray-300 rounded-lg shadow-sm appearance-none focus:outline-none focus:ring-2 focus:ring-lime-400 focus:border-transparent"

                />
                </div>
                <div className="mb-2">
                <input 
                type="password" 
                name="password" {...register("password")} 
                placeholder="password"
                className="flex-1 w-full px-4 py-2 text-base text-gray-700 placeholder-gray-400 bg-white border border-transparent border-gray-300 rounded-lg shadow-sm appearance-none focus:outline-none focus:ring-2 focus:ring-lime-400 focus:border-transparent"

                />
                </div>
                <div>
                <label></label>
                <button className="w-full px-4 py-2 text-base font-semibold text-center text-white transition duration-200 ease-in rounded-lg shadow-md disabled:opacity-50 bg-lime-800 enabled:hover:bg-lime-500"
                type="submit">
                    Login
                </button>
                </div>
            </form>
    {/* <div className="py-5 text-center">
        <Link to="/register" className="text-base font-medium align-baseline hover:text-gray-800">
           Create an account
        </Link>
    </div> */}

  </div>
</div>
      );

// return (
//     <div className="w-full px-5 py-24 text-gray-600 justify-self-center sm:w-[85%] bg-lime-400 sm:justify-self-end sm:py-16 min-h-screen">
//       <div className="max-w-sm m-auto bg-white bg-opacity-25 rounded shadow-xl">
//         <form className="p-10" onSubmit={handleSubmit}>
//           <p className="mb-8 text-2xl font-light text-center text-blue-600">
//             Login
//           </p>
//           <div className="mb-2">
//             <input
//               onChange={handleChange}
//               value={values.username}
//               type="text"
//               name="username"
//               className="flex-1 w-full px-4 py-2 text-base text-gray-700 placeholder-gray-400 bg-white border border-transparent border-gray-300 rounded-lg shadow-sm appearance-none focus:outline-none focus:ring-2 focus:ring-lime-400 focus:border-transparent"
//               placeholder="Username"
//             />
//           </div>
//           <div className="mb-2">
//             <input
//               onChange={handleChange}
//               value={values.password}
//               type="password"
//               name="password"
//               className="flex-1 w-full px-4 py-2 text-base text-gray-700 placeholder-gray-400 bg-white border border-transparent border-gray-300 rounded-lg shadow-sm appearance-none focus:outline-none focus:ring-2 focus:ring-lime-400 focus:border-transparent"
//               placeholder="Password"
//             />
//           </div>
//           <div className="flex items-center justify-between mt-4">
//             <button
//               disabled={isLoading
//                 || (values.password.length < 1 || values.username.length < 1)}
//               type="submit"
//               className="w-full px-4 py-2 text-base font-semibold text-center text-white transition duration-200 ease-in rounded-lg shadow-md disabled:opacity-50 bg-lime-800 enabled:hover:bg-lime-500"
//             >
//               Login
//             </button>
//           </div>
//         </form>
//         <div className="py-5 text-center">
//           <Link to="/register" className="text-base font-medium align-baseline hover:text-gray-800">
//             Create an account
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
}

export default LoginForm