import { getDataList } from "@/api/requestApi";
import { createSlice } from "@reduxjs/toolkit";

interface initialStateState {
  todoList: any[];
  loading: boolean;
  error: null | string | undefined;
  filters: {
    search: string;
    status: string;
    priorities: string[];
  };
}

const initialState: initialStateState = {
  todoList: [],
  loading: false,
  error: null,
  filters: {
    search: "",
    status: "All",
    priorities: [],
  },
};

const todoSlice = createSlice({
  name: "todoSlice",
  initialState,
  reducers: {
    updateTodo: (state, action) => {
      state.todoList = state.todoList.map((todo) =>
        todo.id === action.payload.id ? { ...todo, ...action.payload } : todo
      );
    },
    deleteTodo: (state, action) => {
      state.todoList = state.todoList.filter(
        (todo) => todo.id !== action.payload
      );
    },
    filterBySearch: (state, action) => {
      state.filters.search = action.payload;
    },
    filterByStatus: (state, action) => {
      state.filters.status = action.payload;
    },
    filterByPriority: (state, action) => {
      if (!state.filters.priorities.includes(action.payload)) {
        state.filters.priorities = [
          ...state.filters.priorities,
          action.payload,
        ];
      } else {
        const index = state.filters.priorities.indexOf(action.payload);
        state.filters.priorities.splice(index, 1);
      }
    },
  },
  extraReducers(builder) {
    builder.addCase(getDataList.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getDataList.fulfilled, (state, action) => {
      state.loading = true;
      state.todoList = action.payload;
      state.error = null;
    });
    builder.addCase(getDataList.rejected, (state, action) => {
      state.error = action.error.message;
    });
  },
});

export default todoSlice.reducer;

export const {
  updateTodo,
  deleteTodo,
  filterBySearch,
  filterByStatus,
  filterByPriority,
} = todoSlice.actions;
