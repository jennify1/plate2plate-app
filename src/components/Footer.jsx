import { Link } from "react-router-dom";
import { Home } from "lucide-react"; // or use any other icon library/image
export const Footer = () => {
  return (
    <footer className="w-full px-4 py-2 border-t text-center text-gray-500 text-sm bg-white">
      <div className="flex justify-center py-2">
        <Link to="/" className="flex flex-col items-center text-gray-600 hover:text-blue-600">
          <Home className="w-6 h-6" />
          <span className="text-xs mt-1">Home</span>
        </Link>
      </div>
    </footer>
  );
};
