import { useState } from "react";
import { Header } from "./Header";
import NotificationsPage from "./NotificationsPage";
import { Footer } from "./Footer";

const PhoneFrame = ({ children }) => {
  const [showNotifications, setShowNotifications] = useState(false);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="w-[375px] h-[667px] bg-white rounded-2xl shadow-xl border border-gray-300 relative flex flex-col overflow-hidden">
        {/* Header at top */}
        <div className="shrink-0 w-full">
          <Header toggleNotifications={() => setShowNotifications((prev) => !prev)} />
        </div>

        {/* Scrollable main content */}
        <div className="flex-1 overflow-y-auto p-4 w-full">
          {children}
        </div>

        {/* Footer at bottom */}
        <div className="shrink-0 w-full">
          <Footer />
        </div>

        {/* Full-screen overlay inside phone */}
        {showNotifications && (
          <div className="absolute inset-0 bg-white z-10 p-4 overflow-auto">
            <NotificationsPage onClose={() => setShowNotifications(false)} />
          </div>
        )}
      </div>
    </div>
  );
};

export default PhoneFrame;


