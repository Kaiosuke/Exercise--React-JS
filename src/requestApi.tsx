import axios from "axios";

// interface ApiType {
//   path: string;
//   debouncedSearch: string;
//   limit: number;
//   skip: number;
//   sortBy: string;
//   order: string;
// }

const getProduct = async (id: number) => {
  try {
    const res = await axios.get(`https://dummyjson.com/products/${id}`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

const getApi = async (
  path: string,
  debouncedSearch: string,
  limit: number,
  skip: number,
  sortBy: string,
  order: string
) => {
  try {
    const res = await axios.get(`${path}/products/search`, {
      params: {
        q: debouncedSearch,
        limit: limit,
        skip: skip,
        sortBy: sortBy,
        order: order,
      },
    });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

const getDataList = async (path: string) => {
  try {
    const res = await axios.get(`http://localhost:3000/${path}`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

const getData = async (path: string, id: number) => {
  try {
    const res = await axios.get(`http://localhost:3000/${path}/${id}`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

const addData = async (path: string, data: any[]) => {
  try {
    let headersList = {
      Accept: "*/*",
      "User-Agent": "Thunder Client (https://www.thunderclient.com)",
      "Content-Type": "application/json",
    };
    let bodyContent = JSON.stringify(data);
    await fetch(`http://localhost:3000/${path}`, {
      method: "POST",
      body: bodyContent,
      headers: headersList,
    });
  } catch (error) {
    console.log(error);
  }
};

const updateData = async (path: string, id: number, data: any[]) => {
  try {
    let headersList = {
      Accept: "*/*",
      "User-Agent": "Thunder Client (https://www.thunderclient.com)",
      "Content-Type": "application/json",
    };
    let bodyContent = JSON.stringify(data);
    await fetch(`http://localhost:3000/${path}/${id}`, {
      method: "PATCH",
      body: bodyContent,
      headers: headersList,
    });
  } catch (error) {
    console.log(error);
  }
};

const deleteData = async (path: string, id: number) => {
  try {
    let headersList = {
      Accept: "*/*",
      "User-Agent": "Thunder Client (https://www.thunderclient.com)",
    };

    await fetch(`http://localhost:3000/${path}/${id}`, {
      method: "DELETE",
      headers: headersList,
    });
  } catch (error) {
    console.log(error);
  }
};

export {
  getProduct,
  getApi,
  getDataList,
  getData,
  updateData,
  deleteData,
  addData,
};
