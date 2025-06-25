import PhoneFrame from "../components/PhoneFrame";
import { Link } from 'react-router-dom';
export const CommunityPage = () => {
  return (
    <PhoneFrame>
      <h1 className="text-xl font-bold">Welcome</h1>
      <p className="text-gray-600">This is the community page of the app.</p>
    </PhoneFrame>
  );
};