import { RootState } from "./store";
import { createSelector } from "@reduxjs/toolkit";

interface AuthType {
  isLoading: boolean;
  currentUser: {
    accessToke?: string | null;
    user?:
      | {
          name: string;
          isAdmin?: boolean;
          id: number;
        }
      | undefined;
  };
  error: string | null;
}

const authSelector = (state: RootState): AuthType => state.authSlice.login;
const productsSelector = (state: RootState) => state.productsSlice;
const dataListSelector = (state: RootState) => state.dataSlice;
const todoListSelector = (state: RootState): any => state.todoSlice;
const todoSearchSelector = (state: RootState) => state.todoSlice.filters.search;
const todoStatusSelector = (state: RootState) => state.todoSlice.filters.status;
const todoPrioritiesSelector = (state: RootState) =>
  state.todoSlice.filters.priorities;

export { productsSelector, dataListSelector, authSelector, todoListSelector };

export const todoRemainingSelector = createSelector(
  todoListSelector,
  todoSearchSelector,
  todoStatusSelector,
  todoPrioritiesSelector,
  (todoList, search, status, priorities) => {
    return todoList.todoList.filter(
      (todo: { status: boolean; title: string; priority: string }) => {
        if (status === "All") {
          return priorities.length
            ? todo.title.toLowerCase().includes(search.toLowerCase()) &&
                priorities.includes(todo.priority)
            : todo.title.toLowerCase().includes(search.toLowerCase());
        }
        return (
          todo.title.toLowerCase().includes(search.toLowerCase()) &&
          (status === "Completed" ? todo.status : !todo.status) &&
          priorities.length &&
          priorities.includes(todo.priority)
        );
      }
    );
  }
);
