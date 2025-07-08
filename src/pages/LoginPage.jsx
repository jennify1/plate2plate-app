// import PhoneFrame from "../components/PhoneFrame";
// export const LoginPage = () => {
//   return (
//     <PhoneFrame>
//       <h1 className="text-xl font-bold">Welcome</h1>
//       <p className="text-gray-600">Login here</p>
//     </PhoneFrame>
//   );
// };
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PhoneFrame from "../components/PhoneFrame";
import logo from "../assets/plate2platelogo.jpeg"; // adjust if needed

export const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (username === "admin" && password === "password123") {
      setError("");
      navigate("/home"); // ✅ Redirect here
    } else {
      setError("Invalid credentials");
    }
  };

  return (
    <PhoneFrame>
      <div className="flex flex-col items-center justify-center min-h-full">
        <img
          src={logo}
          alt="Plate2Plate Logo"
          className="w-60 h-60 object-contain mb-6"
        />

        <form onSubmit={handleSubmit} className="w-full max-w-sm">
          <div className="mb-4">
            <label className="block text-gray-700 mb-1" htmlFor="username">
              Username
            </label>
            <input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-1" htmlFor="password">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2"
              required
            />
          </div>

          {error && (
            <div className="text-red-500 text-sm mb-2">{error}</div>
          )}

          <button
            type="submit"
            className="w-full bg-green-400 text-white py-2 rounded hover:bg-green-500 transition"
          >
            Log In
          </button>
        </form>
      </div>
    </PhoneFrame>
  );
};

// export default LoginPage;
