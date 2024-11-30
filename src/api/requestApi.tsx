import { instanceDummy, instanceLocal } from "./instance";

// interface DataType {
//   path?: string;
//   id?: number;
//   product?: any[];
// }

const getProduct = async (path: string, id: number) => {
  try {
    const res = await instanceDummy.get(`${path}/${id}`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

const getAllProducts = async (
  path: string,
  debouncedSearch: string,
  limit: number,
  skip: number,
  sortBy: string,
  order: string
) => {
  try {
    const res = await instanceDummy.get(`${path}/search`, {
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
    const res = await instanceLocal.get(`${path}`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

const getData = async (path: string, id: number) => {
  try {
    const res = await instanceLocal.get(`${path}/${id}`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

const addData = async (path: string, data: any[]) => {
  try {
    const res = await instanceLocal.post(`${path}`, data);

    if (res.status !== 201) {
      return false;
    }
    return true;
  } catch (error) {
    console.log(error);
  }
};

const updateData = async (path: string, id: number, data: any[]) => {
  try {
    const res = await instanceLocal.patch(`${path}/${id}`, data);
    if (res.status !== 200) {
      return false;
    }
    return true;
  } catch (error) {
    console.log(error);
  }
};

const deleteData = async (path: string, id: number) => {
  try {
    const res = await instanceLocal.delete(`${path}/${id}`);
    if (res.status !== 200) {
      return false;
    }
    return true;
  } catch (error) {
    console.log(error);
  }
};

export {
  addData,
  deleteData,
  getAllProducts,
  getData,
  getDataList,
  getProduct,
  updateData,
};
