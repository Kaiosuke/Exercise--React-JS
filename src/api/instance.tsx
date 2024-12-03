import axios from "axios";

const instanceLocal = axios.create({
  baseURL: "http://localhost:3000/",
  timeout: 5000,
  headers: { "Content-type": "application/json" },
});

const instanceDummy = axios.create({
  baseURL: "https://dummyjson.com/",
  timeout: 5000,
  headers: { "Content-type": "application/json" },
});

export { instanceLocal, instanceDummy };
