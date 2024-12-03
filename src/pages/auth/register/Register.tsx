import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import { NavLink, useNavigate } from "react-router-dom";
import { register } from "@/api/requestApi";
import { registerForm } from "@/reactHookForm";

const Register = () => {
  const methods = useForm({
    resolver: zodResolver(registerForm),
    defaultValues: {
      email: "",
      name: "",
      password: "",
      confirmPassword: "",
    },
  });

  const navigate = useNavigate();

  const handleSubmit = async (data: any) => {
    const isRegister = await register(data);

    if (isRegister.status === 400) {
      window.alert(isRegister.message);
      return;
    }
    methods.reset();
    window.alert("Register Success");
    navigate("/users/signIn");
  };

  return (
    <div className="text-white w-[420px] m-auto  border border-white rounded-lg">
      <div className="p-10">
        <h1 className="text-center text-3xl font-bold">Register</h1>
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
                  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                </svg>
                <input
                  type="text"
                  className="grow"
                  placeholder="Username"
                  {...methods.register("name")}
                />
              </label>

              <span className="text-red-500">
                {methods.formState.errors.name?.message}
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
            <div className="form-input">
              <label className="input input-bordered flex items-center gap-2   bg-second">
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
                  placeholder="Confirm password"
                  {...methods.register("confirmPassword")}
                />
              </label>
              <span className="text-red-500">
                {methods.formState.errors.confirmPassword?.message}
              </span>
            </div>
            <button className="btn btn-neutral">Register</button>
          </form>
        </FormProvider>
        <div className="flex items-center gap-2 mt-2">
          <span className="text-text-second">Have an account</span>
          <NavLink to="/users/signIn" className="link link-info">
            Sign In
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Register;
