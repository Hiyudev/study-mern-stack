import axios from "axios";

const API_URL = "/api/users/";

const register = async (userData) => {
  const res = await axios.post(API_URL, userData);
  const {data} = res;

  if(data) {
    const strData = JSON.stringify(data);
    localStorage.setItem('user', strData)
  }
};

const authService = {
  register
}

export default authService;