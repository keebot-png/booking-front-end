import axiosInstance from "../../axiosConfig";

function registerUser(data) {
console.log("axiosInstance:",axiosInstance.defaults.headers.common.Authorization)
  const { username, email, password } = data;

  return axiosInstance.post("/users", {
    user: {
      name: username,
      email,
      password,
    },
  });
}

function loginUser(data) {
    console.log("axiosInstance:",axiosInstance.defaults.headers.common.Authorization)
  return axiosInstance.post("/users/sign_in", { user: data })
}

function signOutUser() {
    console.log("axiosInstance:",axiosInstance.defaults.headers.common.Authorization)
  return axiosInstance.delete("/users/sign_out")
}

export default {
  loginUser,
  registerUser,
  signOutUser,
};
