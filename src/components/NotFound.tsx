import { NavLink } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <h1>Not Found Page</h1>
      <NavLink to="/">Back to Home</NavLink>
    </div>
  );
};

export default NotFound;
