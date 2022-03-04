import axios from "axios";

const API_URL = "/api/users/";

const register = async (userData) => {
  const res = await axios.post(API_URL, userData);
  const { data } = res;

  if (data) {
    const strData = JSON.stringify(data);
    localStorage.setItem("user", strData);
  }

  return data;
};

const login = async (userData) => {
  const res = await axios.post(API_URL + "login", userData);
  const { data } = res;

  if (data) {
    const strData = JSON.stringify(data);
    localStorage.setItem("user", strData);
  }

  return data;
};

const logout = async () => {
  localStorage.removeItem("user");
};

const deleteUser = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const res = await axios.delete(API_URL + "me", config);
  const { data } = res;

  if (data) {
    localStorage.removeItem("user");
  }

  return data;
};

const authService = {
  register,
  login,
  logout,
  deleteUser,
};

export default authService;
