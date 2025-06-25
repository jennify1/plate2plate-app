// components/PhoneFrame.jsx

const PhoneFrame = ({ children }) => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="w-[375px] h-[667px] bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-300">
        {/* Simulate top bar */}
        <div className="h-10 bg-gray-200 flex items-center justify-center text-sm font-semibold">
          Shareplate
        </div>

        {/* Main content */}
        <div className="h-[calc(100%-2.5rem)] overflow-y-auto p-4">
          {children}
        </div>
      </div>
    </div>
  );
};

export default PhoneFrame;
