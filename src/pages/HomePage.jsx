import PhoneFrame from "../components/PhoneFrame";
import { Link } from 'react-router-dom';
import { Header } from "../components/Header";

export const HomePage = () => {
  return (
    <PhoneFrame>
      <h1 className="text-xl font-bold">Welcome</h1>
      <p className="text-gray-600">This is the home page of the app.</p>
      <Link
        to="/login"
        className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
      >
        Go to Login
      </Link>
    </PhoneFrame>
  );
};