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

export { getProduct, getApi };
