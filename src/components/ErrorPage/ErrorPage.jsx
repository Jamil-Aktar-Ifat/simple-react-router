import { useRouteError } from "react-router-dom";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <div>
      <h3>Oops!!</h3>
      <p>{error.statusText || error.message}</p>
      {error.status === 404 && (
        <div>
          <h3>Page not found</h3>
          <p>Go back to the homepage</p>
          <Link to="/">
            <button>Home</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default ErrorPage;
