import PhoneFrame from "../components/PhoneFrame";
import { Link } from 'react-router-dom';
export const NotificationsPage = () => {
  return (
    <PhoneFrame>
      <h1 className="text-xl font-bold">Welcome</h1>
      <p className="text-gray-600">This is the notifications page of the app.</p>
    </PhoneFrame>
  );
};