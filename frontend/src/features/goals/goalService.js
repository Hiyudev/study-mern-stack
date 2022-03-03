import axios from "axios";

const API_URL = "/api/goals/";

const createGoal = async (goalData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const res = await axios.post(API_URL, goalData, config);

  return res.data;
};

const getGoals = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const res = await axios.get(API_URL, config);

  return res.data;
};

const deleteGoal = async (goalId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const res = await axios.delete(API_URL + goalId, config);

  return res.data;
};

const editGoal = async (goalData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const data = {
    text: goalData.text,
  };

  const res = await axios.put(API_URL + goalData.id, data, config);

  return res.data;
};

const goalService = {
  createGoal,
  getGoals,
  deleteGoal,
  editGoal,
};

export default goalService;
