import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { authSelector } from "@/redux/selector";
import { AppDispatch } from "@/redux/store";
import { login } from "@/api/requestApi";
import { loginForm } from "@/reactHookForm";

const SignIn = () => {
  const methods = useForm({
    resolver: zodResolver(loginForm),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const dispatch = useDispatch<AppDispatch>();

  const navigate = useNavigate();

  const handleSubmit = async (data: any) => {
    const isLogin = await login(data, dispatch);
    if (isLogin.status === 400) {
      window.alert("Incorrect account or password");
      return;
    }
    navigate("/");
  };

  const { currentUser } = useSelector(authSelector);
  if (currentUser) {
    const { accessToken } = currentUser;
    localStorage.setItem("token", JSON.stringify({ token: accessToken }));
  }

  return (
    <div className="text-white w-[420px] m-auto  border border-white rounded-lg">
      <div className="p-10">
        <h1 className="text-center text-3xl font-bold">Sign in</h1>
        <FormProvider {...methods}>
          <form
            className="flex flex-col gap-4 mt-4"
            onSubmit={methods.handleSubmit((data) => {
              handleSubmit(data);
            })}
          >
            <div className="form-input">
              <label className="input input-bordered flex items-center gap-2   bg-second">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="h-4 w-4 opacity-70"
                >
                  <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                  <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                </svg>
                <input
                  type="text"
                  className="grow"
                  placeholder="Email"
                  {...methods.register("email")}
                />
              </label>

              <span className="text-red-500">
                {methods.formState.errors.email?.message}
              </span>
            </div>
            <div className="form-input">
              <label className="input input-bordered flex items-center gap-2 bg-second">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="h-4 w-4 opacity-70"
                >
                  <path
                    fillRule="evenodd"
                    d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                    clipRule="evenodd"
                  />
                </svg>
                <input
                  type="password"
                  className="grow"
                  placeholder="password"
                  {...methods.register("password")}
                />
              </label>
              <span className="text-red-500">
                {methods.formState.errors.password?.message}
              </span>
            </div>
            <button className="btn btn-neutral">Sign In</button>
          </form>
        </FormProvider>
        <div className="flex items-center gap-2 mt-2">
          <span className="text-text-second">Haven't an account</span>
          <NavLink to="/users/register" className="link link-info">
            Sign up
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default SignIn;