import { RootState } from "./store";

interface AuthType {
  isLoading: boolean;
  currentUser: {
    accessToken?: string | null;
    user?:
      | {
          name?: string;
        }
      | undefined;
  };
  error: string | null;
}

const authSelector = (state: RootState): AuthType => state.authSlice.login;

const productsSelector = (state: RootState) => state.productsSlice;
const dataListSelector = (state: RootState) => state.dataSlice;

export { productsSelector, dataListSelector, authSelector };
