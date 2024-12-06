// import { createAsyncThunk } from "@reduxjs/toolkit";
// import { instanceLocal } from "./instance";

// const getTodoList = createAsyncThunk(
//   "todo/getTodoList",
//   async ({ id }: { id: number }) => {
//     try {
//       const res = await instanceLocal.get("/carts");
//       const data = res.data.filter(
//         (todo: { userId: number }): any => todo.userId === id
//       );
//       return data;
//     } catch (error) {
//       console.log(error);
//     }
//   }
// );

// export { getTodoList };
