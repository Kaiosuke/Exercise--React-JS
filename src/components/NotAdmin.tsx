import { NavLink } from "react-router-dom";

const NotAdmin = () => {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Your are not Admin</h1>
          <div className="flex justify-center my-10">
            <img
              src="https://static-00.iconduck.com/assets.00/404-page-not-found-illustration-2048x998-yjzeuy4v.png"
              alt="not found"
            />
          </div>
          <NavLink to="/" className="btn btn-primary">
            Back to home
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default NotAdmin;
