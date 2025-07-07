// components/PhoneFrame.jsx
import { Header } from "./Header";
const PhoneFrame = ({ children }) => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="w-[375px] h-[667px] bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-300">
        <Header />
        {/* Main content */}
        <div className="h-[calc(100%-2.5rem)] overflow-y-auto p-4">
          {children}
        </div>
      </div>
    </div>
  );
};

export default PhoneFrame;
