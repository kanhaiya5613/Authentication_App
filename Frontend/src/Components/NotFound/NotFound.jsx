import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold">404</h1>
      <p className="text-gray-500 mb-4">Sorry, Page Not Found</p>
      <Link to="/" className="text-blue-500 underline">
        Go Home
      </Link>
    </div>
  );
};

export default NotFound;
