import axiosInstance from '../../axiosConfig';

function registerUser(data) {
  const { username, email, password } = data;

  return axiosInstance.post('/users', {
    user: {
      name: username,
      email,
      password,
    },
  });
}

function loginUser(data) {
  return axiosInstance.post('/users/sign_in', { user: data });
}

function signOutUser() {
  return axiosInstance.delete('/users/sign_out');
}

export default {
  loginUser,
  registerUser,
  signOutUser,
};
