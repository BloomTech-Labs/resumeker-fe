const axios = require("axios");

export default function () {
  return axios.create({
    baseURL: `"http://localhost:5000"`,
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
}
