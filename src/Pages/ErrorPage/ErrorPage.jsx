import { Link } from "react-router-dom";
const ErrorPage = () => {
  return (
    <div>
    <img className="mx-auto mt-28" src="/src/assets/error.jpg" alt="" />
    <Link to="/" className="flex justify-center font-extrabold mt-2"><span>Go Home</span></Link>
  </div>
  );
};

export default ErrorPage;