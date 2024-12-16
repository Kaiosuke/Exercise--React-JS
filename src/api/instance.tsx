import axios from "axios";

const instanceLocal = axios.create({
  baseURL: "http://localhost:3000/",
  headers: { "Content-type": "application/json" },
});

const instanceDummy = axios.create({
  baseURL: "https://dummyjson.com/",
  headers: { "Content-Type": "application/json" },
});

export { instanceLocal, instanceDummy };
