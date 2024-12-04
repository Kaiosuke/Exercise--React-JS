import { RootState } from "./store";

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
const todoListSelector = (state: RootState) => state.todoSlice;

export { productsSelector, dataListSelector, authSelector, todoListSelector };
