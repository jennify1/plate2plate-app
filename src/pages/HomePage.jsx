import PhoneFrame from "../components/PhoneFrame";
import { Link } from 'react-router-dom';
import Card from '../components/notifications/Card';

export const HomePage = () => {
  return (
    <PhoneFrame>
      <h1 className="text-xl font-bold">Welcome</h1>
      
      <p className="text-gray-600">This is the home page of the app.</p>
      <Card>
        sdfsdsdf
      </Card>

      {/* Make into component similar to "Card" later  */}
      <div>

      </div>
      
      <p className="text-gray-600">To share!</p>

      <p className="text-gray-600">Sharing~</p>
      <p className="text-gray-600">Community</p>

      <Link
        to="/login"
        className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
      >
        Go to Login
      </Link>
    </PhoneFrame>
  );
};